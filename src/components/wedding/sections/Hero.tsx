import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import { wedding } from "@/data/wedding";
import { Om, TempleBell, Mandala } from "../Ornaments";
import { scrollToId } from "../SmoothScroll";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      {/* temple background */}
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src="/bg1.png"
          alt="Wedding Background"
          width={1920}
          height={1280}
          className="mx-auto h-full w-full max-w-3xl object-contain p-6 opacity-40 mix-blend-overlay sm:p-12 md:max-w-4xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </motion.div>

      {/* sunlight rays */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -top-1/3 left-1/2 h-[130%] w-[130%] -translate-x-1/2 opacity-30 [background:conic-gradient(from_180deg_at_50%_0%,transparent,rgba(232,198,112,0.35),transparent,rgba(232,198,112,0.25),transparent)] animate-spin-slow" />
      </div>

      {/* swinging temple bells */}
      <TempleBell className="absolute left-[8%] top-24 hidden h-24 w-16 animate-bell text-gold/60 md:block" />
      <TempleBell className="absolute right-[8%] top-24 hidden h-24 w-16 animate-bell text-gold/60 md:block" style={{ animationDelay: "0.8s" }} />
      <Mandala className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 text-gold/[0.08]" />
      <Mandala className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 animate-spin-slow text-gold/[0.06]" />

      {/* content */}
      <motion.div style={{ y: contentY, opacity }} className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex flex-col items-center gap-3"
        >
          <img src="/ganpati_bappa.png" alt="Shri Ganesha" className="h-16 w-auto object-contain drop-shadow-md" />
          <p className="font-deva text-sm text-temple-red">|| Shri Ganeshay Namah ||</p>
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold-deep">Together with their families</p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, filter: "blur(14px)", y: 30 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl font-semibold leading-[1.05] text-maroon sm:text-7xl md:text-8xl"
        >
          <span className="block">{wedding.groom.name}</span>
          <span className="my-2 flex items-center justify-center gap-4 text-2xl sm:text-4xl">
            <span className="h-px w-10 divider-gold sm:w-16" />
            <FaHeart className="animate-float text-temple-red" />
            <span className="h-px w-10 divider-gold sm:w-16" />
          </span>
          <span className="block text-shimmer">{wedding.bride.name}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-8 space-y-2"
        >
          <p className="font-serif text-xl italic text-foreground/90 sm:text-2xl">{wedding.dateLabel}</p>
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-muted-foreground">{wedding.city}</p>
          <p className="font-serif text-lg text-gold-deep">{wedding.hashtag}</p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          onClick={() => scrollToId("couple")}
          className="mx-auto mt-12 flex flex-col items-center gap-2 text-gold-deep"
          aria-label="Scroll down"
          data-cursor
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="flex h-10 w-6 items-start justify-center rounded-full border border-gold/60 p-1">
            <motion.span
              className="h-2 w-1 rounded-full bg-gold"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.button>
      </motion.div>
    </section>
  );
}
