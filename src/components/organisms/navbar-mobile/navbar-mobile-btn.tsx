"use client";
import { Menu } from "lucide-react";
import { useNavbarMobile } from ".";

export const NavbarMobileBtn: React.FC = () => {
  const { toggleNavbar } = useNavbarMobile();

  return (
    <button
      className="text-muted-foreground ml-auto px-2.5 block md:hidden"
      onClick={toggleNavbar}
      data-umami-event="navbar-mobile-trigger"
    >
      <Menu />
    </button>
  );
};
