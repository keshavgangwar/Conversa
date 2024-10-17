import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/user/register";
      const { data: res } = await axios.post(url, data);
      console.log(res.message);
      toast.success(res.message);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 300 &&
        error.response.status < 500
      ) {
        // Handle client-side errors
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <section className="bg-light">
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="rounded-lg shadow border md:mt-0 sm:mt-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 sm:text-2xl">
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-black"
                  htmlFor="email"
                >
                  Your email
                </label>
                <input
                  onChange={handleChange}
                  value={data.email}
                  type="email"
                  name="email"
                  id="email"
                  required=""
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@gmail.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-black"
                    htmlFor="firstName"
                  >
                    First Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={data.firstName}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Keshav"
                    required=""
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 text-sm font-medium text-black"
                    htmlFor="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    onChange={handleChange}
                    value={data.lastName}
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Gangwar"
                    required=""
                    className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-black"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  value={data.password}
                  type="password"
                  name="password"
                  id="password"
                  required=""
                  placeholder="********"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border focus:ring-3 bg-gray-50"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-black-300">
                    I accept the{" "}
                    <a
                      className="font-medium text-indigo-400 hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-gray-900 hover:bg-gradient-to-r from-gray-800 to-blue-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-black-400">
                Already have an account?{" "}
                <Link
                  to={"/login"}
                  className="font-medium text-indigo-400 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
