"use client";

import { FC, ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

interface ThemeWrapperProps extends ThemeProviderProps {
  children: ReactNode;
}

export const ThemeWrapper: FC<ThemeWrapperProps> = ({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
