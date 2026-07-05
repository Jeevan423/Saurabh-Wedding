import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";
import { wedding } from "@/data/wedding";
import { scrollToId } from "./SmoothScroll";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-24 left-4 z-[55] flex flex-col gap-3 md:bottom-6 md:left-6">

      <button
        onClick={() => scrollToId("home")}
        className={`grid h-12 w-12 place-items-center rounded-full glass-gold text-gold transition-all duration-500 ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
        aria-label="Back to top"
        data-cursor
      >
        <FaArrowUp className="h-4 w-4" />
      </button>
    </div>
  );
}
