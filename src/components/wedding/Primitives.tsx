import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { CornerFlourish, FloralBorder, Om } from "./Ornaments";

// Scroll-reveal wrapper with configurable direction.
export function Reveal({
  children,
  delay = 0,
  y = 40,
  x = 0,
  scale = 1,
  blur = false,
  className = "",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  blur?: boolean;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x, scale, filter: blur ? "blur(12px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Staggered children container.
export function Stagger({
  children,
  className = "",
  amount = 0.12,
}: {
  children: ReactNode;
  className?: string;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ show: { transition: { staggerChildren: amount } } }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

// Section shell with the saffron glow + ornamental spacing.
export function Section({
  id,
  children,
  className = "",
  glow = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  glow?: boolean;
}) {
  return (
    <section id={id} className={`relative overflow-hidden px-5 py-20 sm:px-8 md:py-28 ${className}`}>
      {glow && <div className="pointer-events-none absolute inset-0 bg-saffron-glow" aria-hidden />}
      <div className="relative mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

// Ornate section heading with divider + optional kicker.
export function SectionTitle({
  kicker,
  title,
  subtitle,
  deva,
  light = false,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  deva?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      {deva && (
        <Reveal>
          <p className={`font-deva text-sm tracking-wide ${light ? "text-gold-light" : "text-temple-red"}`}>
            {deva}
          </p>
        </Reveal>
      )}
      {kicker && (
        <Reveal delay={0.05}>
          <p className={`mt-2 font-sans text-xs uppercase tracking-[0.35em] ${light ? "text-gold-light/80" : "text-gold-deep"}`}>
            {kicker}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2
          className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl ${
            light ? "text-cream" : "text-maroon"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      <Reveal delay={0.2} className="mt-5 flex items-center justify-center gap-3">
        <span className="h-px w-16 divider-gold sm:w-24" />
        <Om className={`h-5 w-5 ${light ? "text-gold-light" : "text-gold"}`} />
        <span className="h-px w-16 divider-gold sm:w-24" />
      </Reveal>
      {subtitle && (
        <Reveal delay={0.28}>
          <p className={`mx-auto mt-5 max-w-xl font-serif text-lg italic ${light ? "text-cream/80" : "text-muted-foreground"}`}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

// Luxury gold button with sheen + glow.
export function GoldButton({
  children,
  onClick,
  href,
  type = "button",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  className?: string;
}) {
  const cls = `group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-gold px-8 py-3.5 font-sans text-sm font-medium uppercase tracking-[0.2em] text-maroon-deep shadow-gold transition-transform duration-300 hover:scale-[1.04] active:scale-95 ${className}`;
  const inner = (
    <>
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );
  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cls} data-cursor>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls} data-cursor>
      {inner}
    </button>
  );
}

// Decorative gold frame corners for cards.
export function Corners({ className = "" }: { className?: string }) {
  return (
    <>
      <CornerFlourish className={`pointer-events-none absolute left-2 top-2 h-8 w-8 text-gold/70 ${className}`} />
      <CornerFlourish className="pointer-events-none absolute right-2 top-2 h-8 w-8 -scale-x-100 text-gold/70" />
      <CornerFlourish className="pointer-events-none absolute bottom-2 left-2 h-8 w-8 -scale-y-100 text-gold/70" />
      <CornerFlourish className="pointer-events-none absolute bottom-2 right-2 h-8 w-8 -scale-100 text-gold/70" />
    </>
  );
}

export function FancyDivider({ light = false }: { light?: boolean }) {
  return (
    <div className={`mx-auto flex max-w-md items-center justify-center gap-3 ${light ? "text-gold-light" : "text-gold"}`}>
      <FloralBorder className="h-4 flex-1" />
    </div>
  );
}
