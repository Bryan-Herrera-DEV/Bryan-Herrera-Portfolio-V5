"use client";
import { NavLink } from "@/components/atoms/nav-link";
import { LanguageToggle } from "@/components/molecules/language-toggle";
import { ThemeToggle } from "@/components/molecules/theme-toggle";
import Link from "next/link";
import { NavbarMobileBtn } from "../navbar-mobile/navbar-mobile-btn";
import { useRouteHelper } from "@/hooks/useRouteHelper";
import { NAV_ROUTES } from "../navbar-mobile/constants";

export const Navbar = () => {
  const { getActiveLanguage } = useRouteHelper();
  return (
    <nav className="md:grid grid-cols-12 border-b flex items-center justify-between relative z-10 bg-background overflow-x-auto">
      <Link
        href={`/${getActiveLanguage()}`}
        className="md:border-r md:px-5 px-2.5 py-4 text-foreground md:col-span-3 lg:col-span-2 shrink-0 transition-colors"
      >
        Bryan Herrera
      </Link>
      <div className="md:col-span-9 lg:col-span-10 flex items-center justify-between">
        <ul className="md:flex items-center divide-x w-max border-r hidden shrink-0">
          {NAV_ROUTES.map((menu, i) => (
            <NavLink key={i} href={`/${getActiveLanguage()}${menu.path}`}>
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