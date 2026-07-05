import { motion } from "framer-motion";
import { Section, Reveal } from "../Primitives";
import { TempleBell, Diya, Om } from "../Ornaments";

export default function Blessings() {
  return (
    <Section id="blessings" glow={false} className="bg-[#FAF5ED] text-maroon">
      {/* soft glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(232,198,112,0.25),transparent_70%)]" />

      <div className="relative grid items-center gap-12 md:grid-cols-2">
        <Reveal x={-50} y={0}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] border border-gold/40" />
            <div className="absolute -inset-8 rounded-[2.5rem] bg-gold/10 blur-2xl" />
            <img
              src="/bg.webp"
              alt="Divine Blessings"
              width={1104}
              height={1104}
              loading="lazy"
              className="relative rounded-[1.5rem] shadow-luxe ring-2 ring-gold/50 object-cover"
            />
          </div>
        </Reveal>

        <div className="text-center md:text-left">
          <div className="flex justify-center gap-10 md:justify-start">
            <TempleBell className="h-20 w-14 animate-bell text-gold-deep" />
            <TempleBell className="h-20 w-14 animate-bell text-gold-deep" style={{ animationDelay: "0.7s" }} />
          </div>

          <Reveal delay={0.1}>
            <Om className="mx-auto mt-6 h-8 w-8 text-gold md:mx-0" />
            <h2 className="mt-4 font-display text-3xl font-semibold text-maroon sm:text-4xl">Divine Blessings</h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 font-deva text-lg leading-relaxed text-temple-red">
              || Roop Pahata Lochani | Sukh Jale Wo Sajani ||
            </p>
            <p className="mt-3 font-serif text-lg leading-relaxed text-foreground/85">
              In the sacred karmabhumi of Sant Shiromani Namdev Maharaj and the holy land of Lord Vitthal-Rukmini... With the witness of the Lord, we step into a new chapter of our lives. 
              <br/><br/>
              May the eternal love of Vitthal and Rukmini guide us, filling our journey with devotion, unbroken joy, and lifelong togetherness. We seek His divine grace and your heartfelt blessings as we embark on this beautiful path together.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex justify-center gap-12 md:justify-start">
            <Diya className="w-20" />
            <Diya className="w-20" />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
