import React from "react";

const Footer = () => {
  return (
    <footer className="bg-background shadow mx-4 rounded-lg">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-1">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Swift Logo"
            />
            <span className="self-center text-2xl font-semibold">SwiftChat</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
        <span className="block text-sm sm:text-center text-gray-500">
          © 2023{" "}
          <a href="#" className="hover:underline">
            SwiftChat
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
