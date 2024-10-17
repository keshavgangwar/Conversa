import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./authContext";
import axios from "axios";

// Create Profile Context
const ProfileContext = createContext();

// Profile Provider Component
export const ProfileProvider = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get("/api/user/profile");
        // console.log(response.data);
        setUserDetails(response.data);
      } catch (error) {
        console.log("Error fetching user details in profile", error);
      }
    };
    fetchUserDetails();
  }, [isAuthenticated]);

  return (
    <ProfileContext.Provider value={{ isAuthenticated, userDetails }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  return useContext(ProfileContext);
};
