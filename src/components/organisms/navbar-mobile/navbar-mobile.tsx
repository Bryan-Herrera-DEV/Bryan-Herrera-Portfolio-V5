"use client";
import Link from "next/link";
import { Fragment } from "react";
import { useNavbarMobile } from ".";
import { FadeIn, AnimatePresence } from "@/components/atoms/fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";

export const NavbarMobile = () => {
  const { isOpen, toggleNavbar } = useNavbarMobile();
  return (
    <AnimatePresence>
      {isOpen && (
        <FadeIn
          fromTopToBottom
          className="absolute top-[57px] left-0 bg-background h-[calc(100%-57px-27px)] w-full z-50 p-5 divide-y overflow-y-auto"
        >
          {navMenu.map((menu, i) => (
            <Fragment key={i}>
              {menu.child ? (
                <Accordion type="single" collapsible>
                  <AccordionItem value={menu.name}>
                    <AccordionTrigger
                      className="text-2xl font-normal text-foreground"
                      data-umami-event={`navbar-accordion-${menu.name}`}
                    >
                      {menu.name}
                    </AccordionTrigger>
                    <AccordionContent className="pl-5 divide-y">
                      {menu.child.map((child, j) => (
                        <Link
                          href={child.path}
                          key={j}
                          className="block text-xl py-2 first:pt-0 last:pb-0 border-b last:border-0 text-muted-foreground"
                          onClick={toggleNavbar}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ) : (
                <Link
                  href={menu.path}
                  className="block text-2xl py-4 first:pt-0 last:pb-0"
                  onClick={toggleNavbar}
                >
                  {menu.name}
                </Link>
              )}
            </Fragment>
          ))}
        </FadeIn>
      )}
    </AnimatePresence>
  );
};

export const navMenu = [
  {
    name: "_hello",
    path: "/",
  }
];
