import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";
import { Section, SectionTitle } from "../Primitives";
import { Mandala } from "../Ornaments";

function useCountdown(target: string) {
  const [t, setT] = useState({ days: 0, hours: 0, mins: 0, secs: 0, done: false });
  useEffect(() => {
    const end = new Date(target).getTime();
    const tick = () => {
      const diff = end - Date.now();
      if (diff <= 0) {
        setT({ days: 0, hours: 0, mins: 0, secs: 0, done: true });
        return;
      }
      setT({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        mins: Math.floor((diff / 60000) % 60),
        secs: Math.floor((diff / 1000) % 60),
        done: false,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  return t;
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid aspect-square place-items-center rounded-2xl glass-gold p-2 sm:p-3 shadow-gold sm:rounded-3xl"
      data-cursor
    >
      <span className="pointer-events-none absolute inset-0 rounded-2xl border border-gold/30 sm:rounded-3xl" />
      <span className="font-display text-4xl font-semibold tabular-nums text-maroon sm:text-5xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 font-sans text-[10px] uppercase tracking-widest text-gold-deep sm:tracking-[0.25em] sm:text-xs">{label}</span>
    </motion.div>
  );
}

export default function Countdown() {
  const { days, hours, mins, secs, done } = useCountdown(wedding.date);
  return (
    <Section id="countdown" className="px-4">
      <Mandala className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 animate-spin-slow text-gold/[0.05]" />
      <SectionTitle
        deva="|| Auspicious Time ||"
        kicker="Counting Every Moment"
        title="The Big Day Awaits"
        subtitle={done ? "Today, two souls unite forever." : "Until we celebrate together — every second is precious."}
      />
      <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5 px-2">
        <Unit value={days} label="Days" />
        <Unit value={hours} label="Hours" />
        <Unit value={mins} label="Minutes" />
        <Unit value={secs} label="Seconds" />
      </div>
    </Section>
  );
}
