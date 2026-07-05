import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";
import { Section, SectionTitle, Reveal } from "../Primitives";
import { Lotus, PeacockFeather } from "../Ornaments";

function Portrait({
  img,
  alt,
  name,
  parents,
  about,
  from,
  delay,
}: {
  img: string;
  alt: string;
  name: string;
  parents: string;
  about: string;
  from: "left" | "right";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === "left" ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col items-center text-center"
    >
      <div className="relative" data-cursor>
        <div className="absolute -inset-3 animate-spin-slow rounded-full border border-dashed border-gold/40" />
        <div className="absolute -inset-6 rounded-full bg-gold/0 blur-2xl transition-all duration-700 group-hover:bg-gold/25" />
        <div className="relative h-56 w-56 overflow-hidden rounded-full ring-4 ring-gold/60 shadow-gold sm:h-64 sm:w-64 md:h-72 md:w-72">
          <img
            src={img}
            alt={alt}
            width={912}
            height={1104}
            loading="lazy"
            className="h-full w-full scale-105 object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-cream/40" />
        </div>
      </div>
      <h3 className="mt-8 font-display text-3xl font-semibold text-maroon">{name}</h3>
      <p className="mt-1 font-serif text-sm italic text-gold-deep">{parents}</p>
      <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">{about}</p>
    </motion.div>
  );
}

export default function Couple() {
  return (
    <Section id="couple">
      <PeacockFeather className="pointer-events-none absolute -left-6 top-10 h-40 w-16 text-gold/[0.1]" />
      <PeacockFeather className="pointer-events-none absolute -right-6 bottom-10 h-40 w-16 -scale-x-100 text-gold/[0.1]" />
      <SectionTitle
        deva="|| Bride & Groom ||"
        kicker="The Beloved Couple"
        title="Two Hearts, One Soul"
        subtitle="Blessed by their families and guided by divine grace, they begin a new journey together."
      />

      <div className="grid items-start gap-14 md:grid-cols-[1fr_auto_1fr] md:gap-8">
        <Portrait
          img="/groom_img.png"
          alt="Aarav, the groom, in a cream sherwani with a Maharashtrian pheta"
          name={wedding.groom.name}
          parents={wedding.groom.parents}
          about={wedding.groom.about}
          from="left"
          delay={0}
        />

        <Reveal delay={0.3} className="flex items-center justify-center py-4 md:py-24">
          <div className="flex flex-col items-center gap-3">
            <Lotus className="h-14 w-20 text-gold" />
            <span className="font-display text-2xl text-temple-red">&amp;</span>
            <span className="h-16 w-px divider-gold" />
          </div>
        </Reveal>

        <Portrait
          img="/bride_img.png"
          alt="Sanika, the bride, in a traditional Maharashtrian nauvari saree"
          name={wedding.bride.name}
          parents={wedding.bride.parents}
          about={wedding.bride.about}
          from="right"
          delay={0.15}
        />
      </div>
    </Section>
  );
}
