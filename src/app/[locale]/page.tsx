
import { FadeIn } from "@/components/atoms/fade-in";
import { AnimatedName } from "@/components/molecules/animated-name";
import { useTranslations } from 'next-intl';
import Image from "next/image";

export default function Home() {
  const socialMedia = [
    {
      link: "https://www.linkedin.com/in/bryan-herrera-dev/",
      name: "LinkedIn",
    },
    {
      link: "https://www.youtube.com/@bryanherreradev8055",
      name: "Youtube",
    },
    {
      link: "https://github.com/Bryan-Herrera-DEV",
      name: "Github",
    },
    {
      link: "https://dev.to/bryanherreradev",
      name: "DevTo",
    },

    {
      link: "https://www.twitch.tv/bryan_herrera_dev",
      name: "Twitch",
    },
  ];
  const t = useTranslations("Home");
  return (
    <section className="flex items-center justify-center gap-20 p-5">
      <FadeIn>
        <div className="md:space-y-10 space-y-8 relative z-10">
          <header>
            <p className="text-muted-foreground text-lg font-extralight">
            {t('pretitle')}
            </p>
            <AnimatedName />
            <h2 className="text-muted-foreground md:text-2xl sm:text-xl text-base">
              <span className="animate-pulse">&gt; </span>
              {t('profession')}
            </h2>
            <div className="absolute w-full h-1/2 bg-muted-foreground/10 blur-2xl top-0 left-0 -z-10 rounded-full animate-pulse" />
          </header>

          <div className="space-y-2 sm:text-sm text-xs">
            <p className="text-muted-foreground">{`// ${t('comment')}`}</p>

            {socialMedia.map((social, i) => (
              <p key={i} className="text-muted-foreground">
                <span className="text-purple">const</span>{" "}
                <span className={`text-green ${social.name}`}>{social.name}</span> ={" "}
                <a
                  target="_blank"
                  href={social.link}
                  className="text-light-brown hover:underline hover:text-foreground transition-colors"
                >
                  &apos;{social.link}&apos;
                </a>
              </p>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
