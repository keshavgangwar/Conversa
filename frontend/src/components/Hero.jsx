import { Link } from "react-router-dom";
import hero from "../assets/hero.png";
import { useAuth } from "../context/authContext";

const Hero = () => {
  const { isAuthenticated } = useAuth();
  return (
    <section>
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold">
            Swift Chat: Instant Connections, Effortless Conversations!
          </h1>
          <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
            Connect Seamlessly, Chat Effortlessly: Elevate Your Social Experience with Our Intuitive Chat Application!
          </p>

          {!isAuthenticated && (
            <Link to={"/login"} className="inline-flex items-center justify-center">
              Login
              <svg
                className="w-5 h-5 ml-2-mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}

          {isAuthenticated && (
            <Link to={"/chathome"} className="inline-flex items-center justify-center">
              Chat Home
              <svg
                className="w-5 h-5 ml-2-mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          )}

          {!isAuthenticated && (
            <Link to={"/register"} className="inline-flex items-center justify-center">
              Register
            </Link>
          )}
        </div>

        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={hero} alt="mockup" className="mix-blend-normal" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
