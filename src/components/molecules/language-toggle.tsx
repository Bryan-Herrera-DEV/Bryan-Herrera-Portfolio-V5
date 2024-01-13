"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import { LanguagesIcon, Moon } from "lucide-react";
import { Button } from "@/components/atoms/button";

export const LanguageToggle = () => {
  const changeLanguage = (language: string) => {
    const newUrl = window.location.pathname.replace(
      /^\/[a-z]{2}(\/|$)/,
      `/${language}$1`
    );
    window.location.href = newUrl;
  };

  const LANGUAGE_FLAGS: Record<string, string> = {
    es: "🇸🇪🇸",
    en: "🇺🇸"
  };

  const LANGUAGES: Record<string, string[]> = {
    es: ["Español", "Spanish"],
    en: ["Inglés", "English"]
  }

  const actualLanguage: string = window.location.pathname.slice(1, 3);

  const getActualFlag = () => {
    return LANGUAGE_FLAGS[actualLanguage];
  }

  const t = (key: string) => LANGUAGES[key][actualLanguage === "es" ? 0 : 1];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="border-l rounded-none h-14 w-14 hidden md:flex shrink-0 relative"
          data-umami-event="theme-toggle"
        >
          <LanguagesIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
          <span className="sr-only">Idiomas</span>
          <div className="p-0 leading-none bg-gray-800/75 w-[18px] h-[18px] rounded-full text-[10px] flex content-center justify-center items-center absolute mt-4 right-1">
            {getActualFlag()}
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          data-umami-event="theme-toggle-light"
          onClick={() => changeLanguage("es")}
        >
          🇸🇪🇸 {t("es")}
        </DropdownMenuItem>
        <DropdownMenuItem
          data-umami-event="theme-toggle-dark"
          onClick={() => changeLanguage("en")}
          >
          🇺🇸 {t("en")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
