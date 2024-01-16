'use client'
import { Suspense } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms/accordion";
import { AsideLink } from "@/components/atoms/aside-link";
import { FadeInStagger, FadeIn } from "@/components/atoms/fade-in";
import { NAV_ROUTES } from "@/components/organisms/navbar-mobile/constants";
import { useRouteHelper } from "@/hooks/useRouteHelper";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getActiveLanguage } = useRouteHelper();
  return (
    <section className="grid grid-cols-12 overflow-hidden h-full">
      <aside className="md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto">
        <Accordion type="single" collapsible defaultValue="about">
          <AccordionItem value={"about"} defaultChecked>
            <AccordionTrigger
              className="border-b border-lines px-5 py-2.5 text-left"
              data-umami-event="accordion-about"
            >
              About Me
            </AccordionTrigger>
            <AccordionContent className="mt-5 space-y-1">
              <FadeInStagger faster>
                {NAV_ROUTES.find(
                  ({ name }) => name === "_about-me"
                )?.child?.map(({ name, path }) => (
                  <FadeIn key={"title"}>
                    <Suspense fallback={<>Loading...</>}>
                      <AsideLink
                        href={`/${getActiveLanguage()}${path}`}
                        key={`${name}`}
                        startWith=""
                        title={name}
                      >
                        {name}
                      </AsideLink>
                    </Suspense>
                  </FadeIn>
                ))}
              </FadeInStagger>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </aside>
      <section className="md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto">
        {children}
      </section>
    </section>
  );
}
