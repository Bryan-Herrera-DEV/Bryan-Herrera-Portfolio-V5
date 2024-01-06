"use client";
import { FC, ReactNode, createContext, useState } from "react";

interface NavbarProviderProps {
  children: ReactNode;
}

interface NavbarMobileContextProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

const NabvarContext = createContext<NavbarMobileContextProps | undefined>(
  undefined
);

export const NavbarProvider: FC<NavbarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NabvarContext.Provider value={{ isOpen, toggleNavbar: toggle }}>
      {children}
    </NabvarContext.Provider>
  );
};
