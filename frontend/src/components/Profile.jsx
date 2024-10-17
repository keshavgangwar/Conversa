import React, { useEffect, useState } from "react";
import axios from "axios";
import Nav from "./Chat/Nav";
import { useProfile } from "../context/profileContext";
import SelectAvatar from "./SelectAvatar";

const Profile = () => {
  const { userDetails } = useProfile();

  const [formData, setFormData] = useState({});
  const [selectedLink, setSelectedLink] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put("/api/user/profile/update", {
        ...formData,
        avatarLink: selectedLink,
      });
      setStatusMessage("Profile updated successfully!");
    } catch (error) {
      setStatusMessage("Failed to update profile. Please try again.");
      console.error("Update error:", error);
    }
  };

  useEffect(() => {
    setFormData(userDetails);
  }, [userDetails]);

  return (
    <div className="flex h-full min-h-screen bg-background">
      <Nav />
      <div className="bg-background w-[91%] flex items-center">
        <div className="max-w-xl mx-auto">
          <h2 className="mb-4 text-2xl font-bold text-white">Update</h2>
          {statusMessage && (
            <p className="mb-4 text-center text-sm font-medium text-gray-900 dark:text-gray-300">
              {statusMessage}
            </p>
          )}
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-4">
              <div className="w-full">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData?.firstName}
                  placeholder="First Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={formData?.lastName}
                  placeholder="Last Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  disabled
                  className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-gray-700 bg-gray-100 border border-gray-200 appearance-none dark:placeholder-gray-400/70 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={userDetails?.email}
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <SelectAvatar
              setSelectedLink={setSelectedLink}
              selectedLink={selectedLink}
            />
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
