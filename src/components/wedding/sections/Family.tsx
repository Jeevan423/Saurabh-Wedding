import { motion } from "framer-motion";
import { families } from "@/data/wedding";
import { Section, SectionTitle } from "../Primitives";
import { Kalash, Tulsi } from "../Ornaments";

function FamilyCard({
  side,
  house,
  members,
  from,
}: {
  side: string;
  house: string;
  members: { name: string; relation: string }[];
  from: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === "left" ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-3xl border border-gold/40 bg-card p-8 text-center shadow-soft"
    >
      <Tulsi className="pointer-events-none absolute -right-4 -top-4 h-24 w-20 text-gold/[0.08]" />
      <Kalash className="mx-auto h-16 w-12 text-gold" />
      <p className="mt-3 font-sans text-xs uppercase tracking-[0.3em] text-gold-deep">{side}</p>
      <h3 className="mt-1 font-display text-2xl font-semibold text-maroon">{house}</h3>
      <div className="mx-auto my-5 h-px w-20 divider-gold" />
      <ul className="space-y-3">
        {members.map((m) => (
          <li key={m.name}>
            <p className="font-serif text-lg text-foreground">{m.name}</p>
            <p className="font-sans text-xs uppercase tracking-wide text-muted-foreground">{m.relation}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Family() {
  return (
    <Section id="family" className="bg-secondary/40">
      <SectionTitle
        deva="|| Family ||"
        kicker="With Love & Gratitude"
        title="Our Families"
        subtitle="Two families united in joy, warmly welcome you to be a part of this celebration."
      />
      <div className="grid gap-8 md:grid-cols-2">
        <FamilyCard {...families.groom} from="left" />
        <FamilyCard {...families.bride} from="right" />
      </div>
    </Section>
  );
}
