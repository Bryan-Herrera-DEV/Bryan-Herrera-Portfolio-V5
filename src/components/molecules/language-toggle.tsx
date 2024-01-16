"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/atoms/dropdown-menu";
import { LanguagesIcon } from "lucide-react";
import { Button } from "@/components/atoms/button";
import { LanguagePrefix, useRouteHelper } from "@/hooks/useRouteHelper";

export const LanguageToggle = () => {
  const { changeRoute, getActiveLanguage } = useRouteHelper();

  const LANGUAGE_FLAGS: Record<string, string> = {
    [LanguagePrefix.es]: "🇸🇪🇸",
    [LanguagePrefix.en]: "🇺🇸",
  };

  const LANGUAGES: Record<string, string[]> = {
    [LanguagePrefix.es]: ["Español", "Spanish"],
    [LanguagePrefix.en]: ["Inglés", "English"],
  };

  const getActualFlag = () => {
    return LANGUAGE_FLAGS[getActiveLanguage()];
  };

  const t = (key: string) =>
    LANGUAGES[key][getActiveLanguage() === LanguagePrefix.es ? 0 : 1];

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
          onClick={() => changeRoute(LanguagePrefix.es)}
        >
          🇸🇪🇸 {t(LanguagePrefix.es)}
        </DropdownMenuItem>
        <DropdownMenuItem
          data-umami-event="theme-toggle-dark"
          onClick={() => changeRoute(LanguagePrefix.en)}
        >
          🇺🇸 {t(LanguagePrefix.en)}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
