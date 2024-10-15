//registerController.js
const bcrypt = require("bcrypt");
const { User, validateRegister } = require("../models/userModel");
const { Token } = require("../models/tokenModel");
const { sendEmail } = require("../utils/sendEmail");
const crypto = require("crypto");

const registerController = async (req, res) => {
  try {
    const { error } = validateRegister(req.body);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    //check if user already exists
    let user = await User.findOne({ email: req.body.email });
    if (user && user.verified) {
      return res.status(409).send({ message: "User already registered." });
    }
    if (user && user.verificationLinkSent) {
      return res
        .status(400)
        .send({ message: "Verification link already sent to your email." });
    }
    //create a new user
    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    //Save the user with hashed password
    user = await new User({ ...req.body, password: hashPassword }).save();
    //create a verification token
    const token = await new Token({
      _userId: user._id,
      token: crypto.randomBytes(16).toString("hex"),
      createdAt: Date.now(),
      expiresAt: Date.now() + 3600000,
    }).save();
    const url = `${process.env.BASE_URL}/users/${user._id}/verify/${token.token}`;
    await sendEmail(user.email, "Verify your email", url);

    user.verificationLinkSent = true;
    await user.save();
    res
      .status(201)
      .send({ message: `verification link sent to ${user.email}` });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = registerController;
