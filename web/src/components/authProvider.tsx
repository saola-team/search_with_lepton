"use client";

import {
  getAuthentication,
  setLocalStorageLoggedIn,
} from "@/utils/local-storage";
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

const isLocalStorageLoggedIn = getAuthentication() === "true";

const AuthContext = createContext({
  isLoggedIn: isLocalStorageLoggedIn,
  isOpenSignUpModal: false,
  login: () => {},
  setSignUpModalOpen: (isOpen: boolean) => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpenSignUpModal, setIsOpenSignUpModal] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
    setLocalStorageLoggedIn();
  };

  const setSignUpModalOpen = (isOpen: boolean) => {
    setIsOpenSignUpModal(isOpen);
  };

  useEffect(() => {
    setIsLoggedIn(isLocalStorageLoggedIn);
  }, [isLocalStorageLoggedIn]);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, isOpenSignUpModal, setSignUpModalOpen, login }}
    >
      {children}
    </AuthContext.Provider>
  );
};
