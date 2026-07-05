import { motion } from "framer-motion";
import { wedding } from "@/data/wedding";
import { Section, Reveal, Corners } from "../Primitives";
import { Om, Diya, WaxSeal, Kalash, FloralBorder } from "../Ornaments";

export default function Invitation() {
  return (
    <Section id="invitation">
      <Reveal>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotateX: 8 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-3xl"
          style={{ perspective: "1000px" }}
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-gold/50 bg-card p-2 shadow-luxe">
            <Corners />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-gold/30 bg-gradient-to-b from-cream to-secondary/50 px-6 pt-6 pb-12 text-center sm:px-14 sm:pt-10 sm:pb-16">
              <img
                src="/back_img.webp"
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-bottom opacity-[0.3]"
              />
              <div className="relative z-10">
                {/* Ganpati Bappa top */}
                <div className="flex justify-center">
                  <img src="/ganpati_bappa.png" alt="Shri Ganesha" className="h-16 w-auto object-contain drop-shadow-md" />
                </div>

                <p className="mt-2 font-deva text-base text-temple-red font-medium">|| Shri Ganeshay Namah ||</p>

                <div className="my-5 flex items-center justify-center gap-3 text-gold">
                  <span className="h-px w-12 divider-gold" />
                  <Om className="h-4 w-4" />
                  <span className="h-px w-12 divider-gold" />
                </div>

                <h2 className="font-display text-3xl font-semibold text-maroon sm:text-4xl">Wedding Invitation</h2>

                <p className="mx-auto mt-6 max-w-xl font-serif text-lg leading-relaxed text-foreground/85 sm:text-xl">
                  In the karmabhumi of Sant Shiromani Namdev Maharaj and the holy land of{" "}
                  <span className="text-temple-red">Lord Vitthal-Rukmini</span>... With the witness of the Lord, we joyfully
                  invite you and your family to bless the couple on this auspicious occasion.
                </p>

                <p className="mx-auto mt-4 max-w-lg font-serif text-base italic leading-relaxed text-muted-foreground">
                  Your love, blessings, and presence will make our celebration truly unforgettable.
                </p>

                <div className="mt-10 flex flex-col items-center gap-4 border-y border-gold/30 py-6">
                  <p className="font-display text-2xl text-maroon">
                    {wedding.groom.name} <span className="text-temple-red">&amp;</span> {wedding.bride.name}
                  </p>
                  <div className="flex flex-col items-center gap-1.5">
                    <p className="font-sans text-sm font-bold uppercase tracking-[0.25em] text-temple-red drop-shadow-sm">
                      {wedding.dateLabel}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-serif text-2xl text-maroon font-bold">{wedding.venue.name}</p>
                    <p className="mx-auto mt-1 max-w-sm font-serif text-maroon font-bold leading-relaxed ">
                      {wedding.venue.address}
                    </p>
                  </div>
                </div>

                {/* New bottom design */}
                <div className="mt-12 flex flex-col items-center justify-center gap-4 text-gold/80">
                  <FloralBorder className="h-5 w-full max-w-xs" />
                  <Om className="h-8 w-8 text-gold" />
                  <FloralBorder className="h-5 w-full max-w-xs rotate-180" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Reveal>
    </Section>
  );
}
