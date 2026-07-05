import { motion } from "framer-motion";
import { loveStory } from "@/data/wedding";
import { Section, SectionTitle } from "../Primitives";
import { Lotus } from "../Ornaments";

export default function LoveStory() {
  return (
    <Section id="story" className="bg-secondary/40">
      <SectionTitle
        deva="|| Love Story ||"
        kicker="Our Journey"
        title="A Love Story"
        subtitle="Every great love is a story worth telling. Here begins ours."
      />

      <div className="relative mx-auto max-w-3xl">
        {/* center line */}
        <motion.span
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute left-4 top-0 h-full w-px origin-top divider-gold md:left-1/2"
          aria-hidden
        />

        <div className="space-y-10 md:space-y-4">
          {loveStory.map((s, i) => {
            const right = i % 2 === 1;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: right ? 60 : -60, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`relative pl-12 md:w-1/2 md:pl-0 ${
                  right ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"
                }`}
              >
                {/* node */}
                <span
                  className={`absolute top-2 grid h-8 w-8 place-items-center rounded-full bg-gradient-gold text-maroon-deep shadow-gold left-0 md:top-4 ${
                    right ? "md:-left-4" : "md:left-auto md:-right-4"
                  }`}
                >
                  <Lotus className="h-4 w-5" />
                </span>

                <div className="rounded-2xl border border-gold/30 bg-card/80 p-6 shadow-soft backdrop-blur-sm hover-lift">
                  <span className="font-display text-sm tracking-[0.2em] text-gold-deep">{s.year}</span>
                  <h3 className="mt-1 font-display text-xl font-semibold text-maroon">{s.title}</h3>
                  <p className="mt-2 font-serif text-base italic leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
