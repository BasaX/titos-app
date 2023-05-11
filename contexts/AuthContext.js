import React, { useContext, useState } from "react";const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);

  function login(email, password) {
    setUserData(true);
    setCurrentUser(true);
  }

  const value = {
    currentUser,
    userData,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
