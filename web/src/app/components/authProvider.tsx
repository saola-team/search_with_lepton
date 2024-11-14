"use client";

import { createContext, useContext, ReactNode, useState } from "react";

const AuthContext = createContext({
  isLoggedIn: true,
  isOpenSignUpModal: false,
  login: () => {},
  setSignUpModalOpen: (isOpen: boolean) => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const setSignUpModalOpen = (isOpen: boolean) => {
    setIsOpenSignUpModal(isOpen);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isOpenSignUpModal, setSignUpModalOpen, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
