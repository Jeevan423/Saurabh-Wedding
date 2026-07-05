import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

// Top scroll progress bar in gold.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-gold"
      aria-hidden
    />
  );
}

// Elegant gold ring cursor follower (desktop only, disabled for touch).
export function MouseFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
    else return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
        const t = e.target as HTMLElement;
        setHovering(!!t.closest("a,button,[data-cursor]"));
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[70] hidden md:block"
      style={{ left: pos.x, top: pos.y }}
      animate={{ scale: hovering ? 1.9 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        <div className="h-7 w-7 rounded-full border border-gold/70 mix-blend-multiply" />
        <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold" />
      </div>
    </motion.div>
  );
}
