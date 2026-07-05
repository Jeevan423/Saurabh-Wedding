import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { nav } from "@/data/wedding";
import { scrollToId } from "./SmoothScroll";
import { Om } from "./Ornaments";
import {
  FaHome,
  FaHeart,
  FaEnvelopeOpenText,
  FaCalendarAlt,
  FaImages,
  FaMapMarkerAlt,
  FaRegPaperPlane,
} from "react-icons/fa";

const mobileIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  home: FaHome,
  couple: FaHeart,
  invitation: FaEnvelopeOpenText,
  events: FaCalendarAlt,
  gallery: FaImages,
  venue: FaMapMarkerAlt,
  rsvp: FaRegPaperPlane,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    nav.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <>
      {/* Desktop / top bar */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-6 ${
            scrolled ? "glass-gold shadow-soft" : "border border-transparent"
          } mx-3 md:mx-auto`}
        >
          <button onClick={() => go("home")} className="flex items-center gap-2" data-cursor>
            <Om className="h-6 w-6 text-gold" />
            <span className="flex items-center gap-1.5 font-display text-xl font-bold text-maroon tracking-wider">
              S
              <motion.span
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="flex items-center justify-center"
              >
                <FaHeart className="h-4 w-4 text-temple-red drop-shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
              </motion.span>
              V
            </span>
          </button>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className={`relative rounded-full px-4 py-2 font-sans text-xs uppercase tracking-[0.15em] transition-colors ${
                    active === n.id ? "text-maroon" : "text-muted-foreground hover:text-maroon"
                  }`}
                  data-cursor
                >
                  {active === n.id && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 -z-10 rounded-full bg-gold/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {n.label}
                </button>
              </li>
            ))}
          </ul>


          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full text-maroon lg:hidden"
            aria-label="Menu"
            data-cursor
          >
            {open ? <HiX className="h-6 w-6" /> : <HiMenuAlt4 className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile full menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 grid place-items-center glass-dark lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
              className="flex flex-col items-center gap-5"
            >
              {nav.map((n) => (
                <motion.li
                  key={n.id}
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                >
                  <button
                    onClick={() => go(n.id)}
                    className={`font-display text-2xl ${active === n.id ? "text-gold-light" : "text-cream/80"}`}
                  >
                    {n.label}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile floating bottom navigation */}
      <nav className="fixed inset-x-3 bottom-3 z-50 lg:hidden">
        <ul className="mx-auto flex max-w-md items-center justify-between rounded-full glass-gold px-2 py-1.5 shadow-soft">
          {nav.map((n) => {
            const Icon = mobileIcons[n.id];
            const isActive = active === n.id;
            return (
              <li key={n.id}>
                <button
                  onClick={() => go(n.id)}
                  className={`relative grid h-10 w-10 place-items-center rounded-full transition-colors ${
                    isActive ? "text-maroon-deep" : "text-muted-foreground"
                  }`}
                  aria-label={n.label}
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobileNavActive"
                      className="absolute inset-0 rounded-full bg-gradient-gold"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon className="relative z-10 h-4 w-4" />
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
