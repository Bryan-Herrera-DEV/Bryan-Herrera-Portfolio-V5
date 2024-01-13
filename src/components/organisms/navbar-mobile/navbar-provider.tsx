"use client";
import { FC, ReactNode, createContext, useState, useContext } from "react";

interface NavbarProviderProps {
  children: ReactNode;
}

interface NavbarMobileContextProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const NavbarContext = createContext<NavbarMobileContextProps | undefined>(
  undefined
);

export const NavbarProvider: FC<NavbarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavbarContext.Provider value={{ isOpen, toggleNavbar: toggle }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarMobile = (): NavbarMobileContextProps => {
  const context = useContext(NavbarContext)
  if (!context) {
    throw new Error('useNavbarMobile must be used within a NavbarMobileProvider')
  }
  return context
}