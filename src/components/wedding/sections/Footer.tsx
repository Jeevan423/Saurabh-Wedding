import { FaHeart } from "react-icons/fa";
import { wedding } from "@/data/wedding";
import { Footprints, Om } from "../Ornaments";

export default function Footer() {
  return (
    <footer className="relative bg-[#2D0A11] px-6 py-24 text-center text-cream overflow-hidden">
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.15),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
        
        <div className="flex flex-col items-center justify-center mb-10">
          <Om className="h-10 w-10 text-gold mb-4" />
        </div>

        <h3 className="font-display text-5xl font-bold tracking-wide text-cream sm:text-7xl">
          {wedding.groom.name} <span className="text-gold mx-2 font-light">&amp;</span> {wedding.bride.name}
        </h3>
        
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
          <p className="font-serif text-lg tracking-wide text-cream/80 uppercase">{wedding.dateLabel}</p>
          <span className="hidden h-1.5 w-1.5 rotate-45 bg-gold sm:block" />
          <p className="font-serif text-lg tracking-wide text-cream/80 uppercase">{wedding.city}</p>
        </div>
        
        <p className="mt-8 inline-block border-y border-gold/30 py-3 px-8 font-serif text-xl italic text-gold-light">
          {wedding.hashtag}
        </p>

        <div className="mt-16 flex flex-col items-center gap-6">
          <Footprints className="h-14 w-20 text-gold-light/60" />
          
          <div className="flex flex-col items-center gap-2">
            <p className="flex items-center gap-2 font-sans text-[10px] sm:text-xs uppercase tracking-[0.3em] text-cream/70">
              Made with <FaHeart className="h-3.5 w-3.5 text-temple-red" /> for our loved ones
            </p>
          
          </div>
        </div>
      </div>
    </footer>
  );
}
