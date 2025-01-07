import { jwtDecode } from "jwt-decode";
import { createContext, useState } from "react";

const refreshToken = localStorage.getItem("refreshToken");
const INITIAL_LOGGED_IN = refreshToken ? true : false;
const INITIAL_NAME = refreshToken ? jwtDecode(refreshToken)["name"] : "";

/** @ts-ignore */
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_LOGGED_IN);
  const [name, setName] = useState(INITIAL_NAME);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};
