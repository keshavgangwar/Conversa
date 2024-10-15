import React from "react";

const Features = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-10">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Designed for business teams like yours
          </h2>
          <p className="sm:text-xl text-gray-400">
            Here at Swift, we focus on markets where technology and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-5 h-5 text-white lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 011-1h12a1 1 0 011 1v8a2 2 0 01-2 2H5a2 2 0 01-2-2V3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Marketing</h3>
            <p className="text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly across your organization and hit your marketing goals every month with an actionable marketing plan.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-5 h-5 text-white lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2h2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Business Automation</h3>
            <p className="text-gray-400">
              Auto-assign tasks, send Slack messages, and much more. Save time and speed up processes with hundreds of templates to help you get started.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-5 h-5 text-white lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v5a1 1 0 001 1h2a1 1 0 100-2h-1V5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Finance</h3>
            <p className="text-gray-400">
              Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-5 h-5 text-white lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 000 2h12a1 1 0 100-2H4zm0 4a1 1 0 000 2h12a1 1 0 100-2H4zm0 4a1 1 0 000 2h12a1 1 0 100-2H4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Enterprise Design</h3>
            <p className="text-gray-400">
              Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4">
              <svg
                className="w-5 h-5 text-white lg:w-6 lg:h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.53 1.53 0 01-2.97 0c-.38-1.56-2.6-1.56-2.98 0a1.53 1.53 0 01-2.97 0 1.53 1.53 0 01-2.97 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-white">Operations</h3>
            <p className="text-gray-400">
              Keep your company's lights on with customizable, structured workflows built for efficient teamwork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
