import { useEffect, useState } from "react";

// One-shot golden confetti burst, shown right after the invitation opens.
export default function Confetti({ fire }: { fire: boolean }) {
  const [pieces, setPieces] = useState<
    { id: number; left: number; delay: number; rot: number; color: string; size: number; dur: number }[]
  >([]);

  useEffect(() => {
    if (!fire) return;
    const colors = ["#C89B3C", "#E8C670", "#7A0E1A", "#A32020", "#E8B4C0"];
    const arr = Array.from({ length: 90 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 0.6,
      rot: Math.random() * 360,
      color: colors[i % colors.length],
      size: 6 + Math.random() * 8,
      dur: 2.4 + Math.random() * 1.8,
    }));
    setPieces(arr);
    const t = setTimeout(() => setPieces([]), 5000);
    return () => clearTimeout(t);
  }, [fire]);

  if (!pieces.length) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] overflow-hidden" aria-hidden>
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute -top-8 block"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 0.5,
            background: p.color,
            borderRadius: 2,
            transform: `rotate(${p.rot}deg)`,
            animation: `confettiFall ${p.dur}s cubic-bezier(0.3,0.7,0.4,1) ${p.delay}s forwards`,
          }}
        />
      ))}
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
