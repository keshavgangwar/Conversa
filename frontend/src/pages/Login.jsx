import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const { isAuthenticated, setAuthenticated } = useAuth();

  useEffect(() => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/user/login";
      console.log(data);
      const response = await axios.post(url, data, {
        withCredentials: true, // To include cookies in cross-origin requests
      });
      console.log(response.message);
      if (response.status === 200) {
        toast.success(response.data.message || "Login successful");
        setAuthenticated(true);
        // navigate("/"); // Redirect after successful login
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        toast.error(error.response.data.message || "Login failed");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <section className="bg-light min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full max-w-md bg-gray-100 rounded-lg shadow-md p-6">
        <div className="w-full rounded-lg bg-gray-200 shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email
                </label>
                <input
                  onChange={handleChange}
                  value={data.email}
                  type="email"
                  name="email"
                  id="email"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  value={data.password}
                  type="password"
                  name="password"
                  id="password"
                  className="border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-900 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="ml-2 text-sm font-medium text-black"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white font-medium py-2.5 px-5 rounded-lg hover:bg-gradient-to-r from-blue-800 to-blue-700 focus:ring-4 focus:ring-blue-300 transition text-sm"
              >
                Sign in
              </button>
              <p className="text-sm text-black mt-4 text-center font-light">
                Don't have an account yet?{" "}
                <Link
                  to="/register"
                  className="font-medium text-indigo-500 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
