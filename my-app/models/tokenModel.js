const mongoose = require("mongoose");
const Schema = mongoose. Schema;

const tokenSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: "user",
        unique:true,
    },
    token: { type: String, required: true},
    createdAt: { type: Date, default: DataTransfer.now},
    expiresAt: { type: Date, default: Date.now + 3600000},
});

const token = mongoose.model("token", tokenSchema);
module.exports = {Token};