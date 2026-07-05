import { useEffect, useState, type CSSProperties } from "react";

type Piece = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  kind: "petal" | "spark";
};

// Ambient floating flower petals + golden sparkle particles.
export default function Particles({ count = 22 }: { count?: number }) {
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    const arr: Piece[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 18,
      duration: 12 + Math.random() * 16,
      delay: Math.random() * 14,
      drift: (Math.random() - 0.5) * 160,
      kind: Math.random() > 0.45 ? "petal" : "spark",
    }));
    setPieces(arr);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute -top-12 will-change-transform"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
              "--drift": `${p.drift}px`,
            } as CSSProperties
          }
        >
          {p.kind === "petal" ? (
            <svg viewBox="0 0 24 24" className="h-full w-full opacity-70">
              <path
                d="M12 2c6 4 8 9 6 14-2 4-8 6-12 4-4-3-5-9-2-13 2-3 5-4 8-5Z"
                fill="#E8B4C0"
                opacity="0.9"
              />
              <path d="M12 3c3 5 3 11 0 18" stroke="#C86B84" strokeWidth="0.6" fill="none" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-full w-full opacity-80">
              <path
                d="M12 0l2.4 8.6L23 12l-8.6 2.4L12 23l-2.4-8.6L1 12l8.6-2.4z"
                fill="#E8C670"
              />
            </svg>
          )}
        </span>
      ))}
      <style>{`
        @keyframes petalFall {
          0% { transform: translateY(-10vh) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(115vh) translateX(var(--drift)) rotate(540deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
