import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Om } from "./Ornaments";

// Cinematic opening: dark temple ambience -> golden envelope -> tap -> seal breaks,
// flap opens, invitation card slides out, particles burst, zoom + fade into site.
export default function Intro({ onOpen }: { onOpen: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [gone, setGone] = useState(false);
  const [opening, setOpening] = useState(false);

  useEffect(() => {
    if (!root.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".intro-envelope", {
        y: 60,
        opacity: 0,
        scale: 0.85,
        duration: 1.4,
        ease: "power3.out",
      });
      gsap.from(".intro-hint", { opacity: 0, y: 20, delay: 0.9, duration: 1 });
      gsap.to(".intro-envelope", {
        y: "-=14",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(".intro-glow", { opacity: 0.9, scale: 1.15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".intro-particle", {
        y: "-=30",
        opacity: 0.9,
        duration: 3,
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, from: "random" },
        ease: "sine.inOut",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    onOpen(); // start music on user gesture

    const tl = gsap.timeline({
      onComplete: () => {
        setGone(true);
      },
    });
    tl.to(".intro-hint", { opacity: 0, duration: 0.3 })
      .to(".intro-seal", { scale: 1.25, duration: 0.25, ease: "back.out(3)" })
      .to(".intro-seal", { scale: 0, rotate: 40, opacity: 0, duration: 0.5, ease: "power2.in" })
      .to(".intro-flap", { rotateX: -180, duration: 1, ease: "power3.inOut", transformOrigin: "top center" }, "-=0.2")
      .to(".intro-card", { y: -170, duration: 1.1, ease: "power3.out" }, "-=0.5")
      .to(".intro-card", { scale: 1.05, duration: 0.6, ease: "power2.out" }, "-=0.3")
      .to(".burst", { scale: 1.6, opacity: 0, duration: 1, ease: "power2.out", stagger: 0.02 }, "-=0.9")
      .to(".intro-stage", { scale: 2.6, duration: 1.1, ease: "power2.inOut" }, "-=0.5")
      .to(root.current, { opacity: 0, duration: 0.8, ease: "power2.inOut" }, "-=0.6");
  };

  if (gone) return null;

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-gradient-royal"
      style={{ perspective: "1200px" }}
    >
      {/* ambience */}
      <div className="pointer-events-none absolute inset-0">
        <div className="intro-glow absolute left-1/2 top-1/2 h-[70vmin] w-[70vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 opacity-40 blur-[80px]" />
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="intro-particle absolute h-1.5 w-1.5 rounded-full bg-gold-light/70 shadow-[0_0_10px_2px_rgba(232,198,112,0.6)]"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, opacity: 0.3 }}
          />
        ))}
      </div>

      <div className="intro-stage relative flex flex-col items-center" style={{ transformStyle: "preserve-3d" }}>
        <div className="relative h-[240px] w-[320px] sm:h-[300px] sm:w-[420px]" style={{ transformStyle: "preserve-3d" }}>
          {/* invitation card (behind, slides up) */}
          <div className="intro-card absolute inset-x-4 top-3 z-10 h-[92%] rounded-lg bg-cream p-4 text-center shadow-2xl gold-ring-border">
            <div className="flex h-full flex-col items-center justify-center gap-2 rounded-md border border-gold/40 px-3 py-4">
              <Om className="h-7 w-7 text-gold" />
              <p className="font-deva text-[11px] text-temple-red">|| Shubh Vivah ||</p>
              <p className="font-display text-lg font-semibold text-maroon sm:text-xl">Saurabh &amp; Vaishnavi</p>
              <p className="font-serif text-xs italic text-muted-foreground">request the pleasure of your company</p>
            </div>
          </div>

          {/* envelope body */}
          <div onClick={handleOpen} className="intro-envelope absolute inset-0 z-20 cursor-pointer drop-shadow-2xl" style={{ transformStyle: "preserve-3d" }}>
            <div className="absolute inset-0 overflow-hidden rounded-lg bg-gradient-to-br from-saffron to-gold shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              {/* body texture lines */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute bottom-0 left-0 h-full w-full [clip-path:polygon(0_100%,50%_45%,100%_100%)] bg-gold-deep/40" />
                <div className="absolute bottom-0 left-0 h-full w-1/2 [clip-path:polygon(0_20%,100%_60%,0_100%)] bg-black/10" />
                <div className="absolute bottom-0 right-0 h-full w-1/2 [clip-path:polygon(100%_20%,0_60%,100%_100%)] bg-black/10" />
              </div>
              <div className="pointer-events-none absolute inset-0 border-2 border-gold-light/40" />
            </div>

            {/* flap */}
            <div
              className="intro-flap absolute left-0 top-0 z-30 h-1/2 w-full origin-top"
              style={{ transformStyle: "preserve-3d", backfaceVisibility: "hidden" }}
            >
              <div className="h-full w-full [clip-path:polygon(0_0,100%_0,50%_100%)] bg-gradient-to-b from-saffron to-gold shadow-lg">
                <div className="absolute inset-0 [clip-path:polygon(0_0,100%_0,50%_100%)] border-b border-gold-deep/30 bg-black/5" />
              </div>
            </div>

            {/* wax seal */}
            <div className="intro-seal absolute left-1/2 top-1/2 z-40 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full sm:h-20 sm:w-20">
              <div className="grid h-full w-full place-items-center rounded-full bg-gradient-to-br from-temple-red to-maroon-deep shadow-lg ring-2 ring-gold/60">
                <Om className="h-8 w-8 text-gold-light" />
              </div>
            </div>

            {/* burst particles */}
            {Array.from({ length: 16 }).map((_, i) => (
              <span
                key={i}
                className="burst absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-light opacity-0"
                style={{ transform: `rotate(${i * 22.5}deg) translateY(-60px)` }}
              />
            ))}
          </div>
        </div>

        {/* hint */}
        <button
          onClick={handleOpen}
          className="intro-hint mt-10 flex flex-col items-center gap-3"
          data-cursor
          aria-label="Tap to open the invitation"
        >
          <span className="grid h-12 w-12 animate-glow place-items-center rounded-full border border-gold/60 text-gold-light">
            <Om className="h-6 w-6" />
          </span>
          <span className="font-sans text-xs uppercase tracking-[0.4em] text-gold-light">Tap to Open</span>
        </button>
      </div>
    </div>
  );
}
