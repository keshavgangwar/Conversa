import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullhorn,
  faGavel,
  faCogs,
  faMoneyBillWave,
  faPalette,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <section className="">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-black">
            Designed for business teams like yours
          </h2>
          <p className="sm:text-xl text-black">
            Here at Conversa we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          <div className="mt-8">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 lg:w-12 lg:h-12">
              <FontAwesomeIcon
                icon={faBullhorn}
                className="text-white w-6 h-6"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-black">Marketing</h3>
            <p className="text-gray-400">
              Plan it, create it, launch it. Collaborate seamlessly across your
              organization and hit your marketing goals every month with an
              actionable marketing plan.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 lg:w-12 lg:h-12">
              <FontAwesomeIcon icon={faGavel} className="text-white w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-black">Legal</h3>
            <p className="text-gray-400">
              Protect your organization, devices and stay compliant with
              structured workflows and custom permissions made for you.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 lg:w-12 lg:h-12">
              <FontAwesomeIcon icon={faCogs} className="text-white w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-black">
              Business Automation
            </h3>
            <p className="text-gray-400">
              Auto-assign tasks, send Slack messages, and much more. Save time
              and speed up processes with hundreds of templates to help you get
              started.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 lg:w-12 lg:h-12">
              <FontAwesomeIcon
                icon={faMoneyBillWave}
                className="text-white w-6 h-6"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-black">Finance</h3>
            <p className="text-gray-400">
              Audit-proof software built for critical financial operations like
              month-end close and quarterly budgeting.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 lg:w-12 lg:h-12">
              <FontAwesomeIcon
                icon={faPalette}
                className="text-white w-6 h-6"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-black">
              Enterprise Design
            </h3>
            <p className="text-gray-400">
              Craft beautiful, delightful experiences for both marketing and
              product with real cross-company collaboration.
            </p>
          </div>

          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 lg:w-12 lg:h-12">
              <FontAwesomeIcon icon={faTasks} className="text-white w-6 h-6" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-black">Operations</h3>
            <p className="text-gray-400">
              Keep your company's lights on with customizable, structured
              workflows built for efficient teamwork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
