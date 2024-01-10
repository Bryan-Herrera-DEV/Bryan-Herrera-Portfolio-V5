import "./globals.css";
import { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeWrapper } from "@/components/atoms/theme-wrapper";
import { ResponsiveIndicator } from "@/components/atoms/responsive-indicator";
import {
  NavbarMobile,
  NavbarProvider,
} from "@/components/organisms/navbar-mobile";
import { Navbar } from "@/components/organisms/navbar/navbar";

export const metadata: Metadata = {
  title: "Bryan Herrera | Home",
  description:
    "Bryan Herrera, un desarrollador Full-Stack apasionado y experimentado. Explora mi portafolio para ver mis proyectos más recientes y descubre cómo mis habilidades técnicas y soluciones creativas pueden dar vida a tu próximo proyecto digital.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Wiscaksono",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-mono`}>
        <ThemeWrapper
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            <NavbarProvider>
              <Navbar />
              {/* <NavbarMobile /> */}
            </NavbarProvider>
            {children}
          </main>
        </ThemeWrapper>
        <ResponsiveIndicator />
      </body>
    </html>
  );
}
