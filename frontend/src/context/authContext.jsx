import Cookies from "js-cookie";
import React, { createContext, useContext, useState } from "react";

// Create a context
const AuthContext = createContext();

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuthenticated = (value) => {
    setIsAuthenticated(value);
  };

  const checkAuth = () => {
    const token = Cookies.get("authToken");
    console.log("Checking authentication...");
    if (token) {
      console.log("Token exists. Setting authenticated to true.");
      setAuthenticated(true);
      console.log(isAuthenticated);
    } else {
      console.log("Token does not exist. Setting authenticated to false.");
      setAuthenticated(false);
    }
  };

  const logout = () => {
    console.log("Logging out...");
    Cookies.remove("authToken");
    setAuthenticated(false); // Optionally remove the token if you want to log out
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, checkAuth, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
