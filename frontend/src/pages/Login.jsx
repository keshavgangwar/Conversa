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
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "/api/user/login";
      const response = await axios.post(url, data, {
        withCredentials: true, // To include cookies in cross-origin requests
      });

      if (response.status === 200) {
        toast.success(response.data.message || "Login successful");
        setAuthenticated(true);
        navigate("/"); // Redirect after successful login
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
    <section className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sign in to your account
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Your email
            </label>
            <input
              onChange={handleChange}
              value={data.email}
              type="email"
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="name@example.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              value={data.password}
              type="password"
              name="password"
              id="password"
              className="w-full border border-gray-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="************"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm font-light text-gray-600"
              >
                Remember me
              </label>
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
            className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition disabled:opacity-50"
          >
            Sign in
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account yet?{" "}
          <Link
            to="/register"
            className="text-blue-600 hover:underline font-medium"
          >
            Sign up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
