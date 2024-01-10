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
  keywords: [
    "Bryan Herrera Desarrollador Full-Stack",
    "Portafolio Bryan Herrera",
    "Especialista Full-Stack",
    "Programador Full-Stack Web",
    "Servicios de Desarrollo Full-Stack",
    "Proyectos destacados de Desarrollo Full-Stack",
    "Desarrollador Full-Stack con experiencia",
    "Programación Full-Stack Front-End y Back-End",
    "Desarrollo profesional de aplicaciones web",
    "Soluciones integrales de desarrollo web Full-Stack",
  ],
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
  authors: {
    name: "Bryan Herrera",
    url: "https://www.linkedin.com/in/bryan-herrera-dev/",
  },
  publisher: "Bryan Herrera",
  creator: "Bryan Herrera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="reply-to" content="bryherrera55@gmail.com" />
        <meta name="copyright" content="Bryan Herrera" />
        <meta name="theme-color" content="#09090b" />
        <meta name="googlebot-news" content="all" />
        <meta name="url" content="https://bryan-herrera.netlify.app/" />
        <meta
          name="google-site-verification"
          content="VFIoBukbxlXNN3cDw3_aaIGXvk0LbfAB1O9l7Ii6Wzg"
        />
        <meta name="url" content="https://bryan-herrera.netlify.app/" />
        <meta
          name="identifier-URL"
          content="https://bryan-herrera.netlify.app/"
        />
        <link rel="canonical" href="https://bryan-herrera.netlify.app/" />

        {/* Og */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bryan-herrera.netlify.app/" />
        <meta property="og:title" content={"Bryan Herrera | Home"} />
        <meta
          property="og:description"
          content={
            "Bryan Herrera, un desarrollador Full-Stack apasionado y experimentado. Explora mi portafolio para ver mis proyectos más recientes y descubre cómo mis habilidades técnicas y soluciones creativas pueden dar vida a tu próximo proyecto digital."
          }
        />
        <meta property="og:image:width" content="1584" />
        <meta property="og:image:height" content="396" />
        <meta property="og:image" content="/Bryan_Herrera_Banner.png" />
      </head>
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
