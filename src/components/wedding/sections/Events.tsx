import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { events } from "@/data/wedding";
import { Section, SectionTitle, Stagger, staggerItem } from "../Primitives";
import { TempleArch } from "../Ornaments";

export default function Events() {
  return (
    <Section id="events" className="bg-secondary/40">
      <SectionTitle
        deva="|| Wedding Ceremony ||"
        kicker="Celebrations"
        title="Wedding Events"
        subtitle="Join us as we celebrate each cherished ritual, from the vibrant hues of Mehndi to the sacred vows of our Wedding."
      />

      <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e) => {
          const Icon = e.icon;
          return (
            <motion.article
              key={e.name}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-3xl border border-gold/30 bg-card p-7 text-center shadow-soft hover-lift"
              data-cursor
            >
              <TempleArch className="pointer-events-none absolute -right-6 -top-6 h-24 w-40 text-gold/[0.07] transition-transform duration-700 group-hover:scale-110" />
              <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-gold text-maroon-deep shadow-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold text-maroon">{e.name}</h3>
              <p className="mt-2 font-serif text-sm italic text-muted-foreground">{e.desc}</p>

              <div className="mx-auto my-5 h-px w-16 divider-gold" />

              <div className="space-y-2 text-sm text-foreground/80">
                <p className="font-sans font-medium tracking-wide text-temple-red">{e.date}</p>
                <p className="flex items-center justify-center gap-2">
                  <FaClock className="h-3.5 w-3.5 text-gold-deep" /> {e.time}
                </p>
                <p className="flex items-center justify-center gap-2">
                  <FaMapMarkerAlt className="h-3.5 w-3.5 text-gold-deep" /> {e.venue}
                </p>
              </div>
            </motion.article>
          );
        })}
      </Stagger>
    </Section>
  );
}
