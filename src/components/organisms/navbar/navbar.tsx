"use client";
import { NavLink } from "@/components/atoms/nav-link";
import { LanguageToggle } from "@/components/molecules/language-toggle";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import Link from "next/link";
import { NavbarMobileBtn } from "../navbar-mobile/navbar-mobile-btn";

export const Navbar = () => {
  return (
    <nav className="md:grid grid-cols-12 border-b flex items-center justify-between relative z-10 bg-background overflow-x-auto">
      <Link
        href="/"
        className="md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-3 lg:col-span-2 shrink-0 transition-colors"
      >
        Bryan Herrera
      </Link>
      <div className="md:col-span-9 lg:col-span-10 flex items-center justify-between">
        <ul className="md:flex items-center divide-x w-max border-r hidden shrink-0">
          {navMenu.map((menu, i) => (
            <NavLink key={i} href={menu.path}>
              {menu.name}
            </NavLink>
          ))}
        </ul>
        <div className="flex items-center justify-between">
          <LanguageToggle />
          <ThemeToggle />
          <NavbarMobileBtn />
        </div>
      </div>
    </nav>
  );
};

export const navMenu = [
  {
    name: "_hello",
    path: "/",
  },
  // {
  //   name: "_about-me",
  //   path: "/about",
  // },
  // {
  //   name: "_projects",
  //   path: "/projects",
  // },
  // {
  //   name: "_guest-book",
  //   path: "/guest-book",
  // },
  // {
  //   name: "_articles",
  //   path: "/articles",
  // },
];
