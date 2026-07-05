import { FaMapMarkerAlt, FaDirections } from "react-icons/fa";
import { wedding } from "@/data/wedding";
import { Section, SectionTitle, Reveal, GoldButton } from "../Primitives";
import { Kalash } from "../Ornaments";

export default function Venue() {
  return (
    <Section id="venue" className="bg-cream">
      <SectionTitle
        deva="|| Venue ||"
        kicker="Where We Celebrate"
        title="The Venue"
        subtitle="We would be honoured to welcome you at this beautiful setting by the sacred Chandrabhaga."
      />

      <div className="mx-auto max-w-6xl relative z-10 grid items-center gap-12 md:grid-cols-[1fr_1fr]">
        <Reveal x={-40} y={0}>
          <div className="relative mx-auto max-w-md overflow-hidden rounded-t-[12rem] rounded-b-3xl border-x border-b border-gold/30 bg-[#FAF7F2] p-8 shadow-xl sm:p-12">
            <div className="pointer-events-none absolute inset-2 rounded-t-[12rem] rounded-b-2xl border border-dashed border-gold/40" />
            <div className="flex flex-col items-center justify-center text-center pt-8">
              <Kalash className="h-16 w-12 text-gold drop-shadow-sm" />
              <h3 className="mt-8 font-display text-3xl font-bold text-maroon">{wedding.venue.name}</h3>
              <p className="mx-auto mt-4 max-w-xs font-serif text-lg leading-relaxed text-muted-foreground">
                {wedding.venue.address}
              </p>
              
              <div className="my-8 flex w-full items-center justify-center gap-4 text-gold">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/50" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-[0.25em] text-maroon-deep">
                  {wedding.dateLabel}
                </span>
                <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/50" />
              </div>
              
              <GoldButton
                href={`https://www.google.com/maps/search/?api=1&query=${wedding.venue.mapsQuery}`}
              >
                <FaDirections className="mr-2 h-4 w-4" /> Get Directions
              </GoldButton>
            </div>
          </div>
        </Reveal>

        <Reveal x={40} y={0} className="h-full w-full">
          <div className="relative h-[24rem] md:h-full w-full overflow-hidden rounded-3xl border border-gold/30 shadow-2xl p-2 bg-[#FAF7F2]">
            <iframe
              title="Wedding venue location"
              src={wedding.venue.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full rounded-2xl grayscale-[0.2] transition-all duration-700 hover:grayscale-0"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
