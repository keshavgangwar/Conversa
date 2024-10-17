// Nav.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
const Nav = () => {
  const { logout, isAuthenticated } = useAuth();
  const [isMobile, setIsMobile] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <>
      <button
        onClick={() => setIsMobile(!isMobile)}
        className="flex fixed bottom-5 h-10 aspect-square lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {isMobile && (
        <header className="fixed h-screen w-[150px] z-40 lg:static">
          <Link
            to="/"
            className="flex gap-2 items-center justify-center bg-gray-200 p-4 rounded-lg shadow-lg"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Conversa"
            />
            <span className="font-semibold text-xl mr-2">Conversa</span>
          </Link>
          <nav className="h-full flex flex-col my-4 justify-between bg-white px-4 py-6 rounded-md shadow-md">
            <div className="flex flex-col gap-5">
              <Link
                to="/profile"
                className="flex items-center gap-1 text-gray-700 hover:text-blue-500 transition-colors duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1 -7.5 0 3.75 3.75 0 0 1 7.5 0"
                  />
                </svg>
                <span>Profile</span>
              </Link>
              <Link to="/chathome" className="flex gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 12a.375.375 0 1 1 .75 0 .375.375 0 0 1-.75 0"
                  />
                </svg>
                <span>Chats</span>
              </Link>
            </div>
            <Link
              className="flex items-center gap-1 mb-14"
              to="#"
              onClick={logout}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25V9"
                />
              </svg>
              <button onClick={logout}>Logout</button>
            </Link>
          </nav>
        </header>
      )}
    </>
  );
};

export default Nav;
