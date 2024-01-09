import { FadeIn } from "@/components/atoms/fade-in";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex items-center justify-center gap-20 p-5">
      <FadeIn>
        <div className="md:space-y-10 space-y-8 relative z-10">
          <header>
            <p className="text-muted-foreground text-lg font-extralight">
              Hi all. I am
            </p>
          </header>
        </div>
      </FadeIn>
    </section>
  );
}
