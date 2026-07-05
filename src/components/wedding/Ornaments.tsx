// Custom SVG ornaments for the Marathi wedding theme.
// All use currentColor so they can be tinted via text-* utilities.
import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

export function Om({ ...p }: P) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={4} {...p}>
      <path
        d="M30 62c-9 0-16-7-16-16 0-8 6-15 15-15 6 0 11 4 12 9 1-9 8-16 18-16 6 0 11 2 14 6"
        strokeLinecap="round"
      />
      <path d="M46 58c0 7 6 12 13 12s13-5 13-13-6-13-14-13c4-4 10-4 14-2" strokeLinecap="round" />
      <circle cx="72" cy="30" r="4" fill="currentColor" stroke="none" />
      <path d="M60 20c6-6 16-6 22 0" strokeLinecap="round" />
      <path d="M66 15c1-3 4-5 7-5" strokeLinecap="round" />
    </svg>
  );
}

export function Lotus({ ...p }: P) {
  return (
    <svg viewBox="0 0 120 80" fill="none" stroke="currentColor" strokeWidth={2.5} {...p}>
      <path d="M60 72C60 40 60 24 60 14c0 10 0 26 0 58Z" fill="currentColor" opacity="0.15" />
      <path d="M60 72V16" strokeLinecap="round" />
      <path d="M60 72C48 60 42 40 44 20c10 8 16 30 16 52Z" />
      <path d="M60 72C72 60 78 40 76 20c-10 8-16 30-16 52Z" />
      <path d="M60 72C40 66 24 50 22 32c14 2 30 16 38 40Z" />
      <path d="M60 72C80 66 96 50 98 32c-14 2-30 16-38 40Z" />
      <path d="M14 60c14 6 30 8 46 8s32-2 46-8" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function Diya({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* flame */}
      <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[85%]">
        <span className="block animate-flame">
          <svg viewBox="0 0 24 40" className="h-10 w-6">
            <defs>
              <radialGradient id="flame" cx="50%" cy="70%" r="60%">
                <stop offset="0%" stopColor="#FFF6D6" />
                <stop offset="45%" stopColor="#F5B301" />
                <stop offset="100%" stopColor="#E4571B" />
              </radialGradient>
            </defs>
            <path
              d="M12 2c5 8 8 12 8 20a8 8 0 1 1-16 0c0-6 3-9 5-13 1 3 2 4 3 5 0-4 0-8 0-12Z"
              fill="url(#flame)"
            />
          </svg>
        </span>
      </span>
      {/* lamp body */}
      <svg viewBox="0 0 100 46" className="h-auto w-full text-gold">
        <defs>
          <linearGradient id="diyaBody" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#E8C670" />
            <stop offset="100%" stopColor="#9A6B1F" />
          </linearGradient>
        </defs>
        <path d="M6 14c14 8 74 8 88 0-4 20-24 30-44 30S10 34 6 14Z" fill="url(#diyaBody)" />
        <path d="M6 14c14 8 74 8 88 0" stroke="#7A4E12" strokeWidth={2} fill="none" />
        <ellipse cx="50" cy="14" rx="44" ry="7" fill="#3B2412" opacity="0.5" />
      </svg>
    </div>
  );
}

export function Kalash({ ...p }: P) {
  return (
    <svg viewBox="0 0 100 130" fill="none" stroke="currentColor" strokeWidth={2.5} {...p}>
      {/* coconut + leaves */}
      <ellipse cx="50" cy="26" rx="12" ry="14" fill="currentColor" opacity="0.15" />
      <path d="M50 24c-8-8-20-10-28-6 6 8 18 12 28 8Z" />
      <path d="M50 24c8-8 20-10 28-6-6 8-18 12-28 8Z" />
      <path d="M50 22c0-10 0-16 0-20" strokeLinecap="round" />
      {/* pot */}
      <path d="M30 40h40l-4 8c10 6 16 18 16 34 0 26-16 40-32 40S18 108 18 82c0-16 6-28 16-34l-4-8Z" />
      <path d="M22 66c18 8 38 8 56 0" strokeLinecap="round" opacity="0.6" />
      <path d="M26 88c16 8 32 8 48 0" strokeLinecap="round" opacity="0.4" />
      <circle cx="50" cy="80" r="6" fill="currentColor" opacity="0.3" stroke="none" />
    </svg>
  );
}

export function PeacockFeather({ ...p }: P) {
  return (
    <svg viewBox="0 0 60 160" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
      <path d="M30 158V60" strokeLinecap="round" />
      <path d="M30 60C10 56 6 34 16 18 26 6 44 6 50 22c6 16-2 34-20 38Z" fill="currentColor" opacity="0.12" />
      <ellipse cx="30" cy="34" rx="14" ry="20" />
      <ellipse cx="30" cy="34" rx="8" ry="12" fill="currentColor" opacity="0.35" stroke="none" />
      <circle cx="30" cy="32" r="4" fill="currentColor" stroke="none" />
      <path d="M30 60c-6 8-6 8-12 12M30 78c6 8 6 8 12 12M30 100c-6 8-6 8-12 12" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function TempleBell({ ...p }: P) {
  return (
    <svg viewBox="0 0 80 120" fill="none" stroke="currentColor" strokeWidth={2.5} {...p}>
      <path d="M40 8v14" strokeLinecap="round" />
      <circle cx="40" cy="26" r="6" fill="currentColor" opacity="0.2" />
      <path d="M20 88c0-30 6-52 20-52s20 22 20 52Z" fill="currentColor" opacity="0.12" />
      <path d="M14 92c8 6 44 6 52 0" strokeLinecap="round" />
      <path d="M40 92v14" strokeLinecap="round" />
      <circle cx="40" cy="110" r="6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Tulsi({ ...p }: P) {
  return (
    <svg viewBox="0 0 80 100" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
      <path d="M40 98V40" strokeLinecap="round" />
      <path d="M40 70C24 68 16 54 18 40c14 2 22 14 22 30ZM40 70c16-2 24-16 22-30-14 2-22 14-22 30Z" fill="currentColor" opacity="0.12" />
      <path d="M40 48C28 46 22 36 24 26c12 2 16 12 16 22ZM40 48c12-2 18-12 16-22-12 2-16 12-16 22Z" fill="currentColor" opacity="0.12" />
      <path d="M40 30c-8-2-12-10-10-18 8 2 10 10 10 18Z" fill="currentColor" opacity="0.2" />
    </svg>
  );
}

export function Mandala({ ...p }: P) {
  const petals = Array.from({ length: 16 });
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth={1} {...p}>
      <circle cx="100" cy="100" r="18" />
      <circle cx="100" cy="100" r="34" />
      <circle cx="100" cy="100" r="58" />
      <circle cx="100" cy="100" r="80" />
      <circle cx="100" cy="100" r="96" />
      {petals.map((_, i) => (
        <g key={i} transform={`rotate(${(360 / 16) * i} 100 100)`}>
          <path d="M100 4c8 14 8 30 0 44-8-14-8-30 0-44Z" />
          <path d="M100 46c6 8 6 18 0 28-6-10-6-20 0-28Z" opacity="0.7" />
          <circle cx="100" cy="70" r="3" fill="currentColor" stroke="none" />
        </g>
      ))}
      {petals.map((_, i) => (
        <line
          key={`l${i}`}
          x1="100"
          y1="100"
          x2="100"
          y2="18"
          transform={`rotate(${(360 / 16) * i + 11} 100 100)`}
          opacity="0.35"
        />
      ))}
    </svg>
  );
}

export function TempleArch({ ...p }: P) {
  return (
    <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth={2} {...p}>
      <path d="M10 118V40c0-8 6-14 14-14M190 118V40c0-8-6-14-14-14" />
      <path d="M24 26C24 12 56 4 100 4s76 8 76 22" strokeLinecap="round" />
      <path d="M40 118V50c0-30 26-40 60-40s60 10 60 40v68" />
      <path d="M100 10c-24 0-44 14-44 44M100 10c24 0 44 14 44 44" opacity="0.5" />
      <circle cx="100" cy="4" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footprints({ ...p }: P) {
  return (
    <svg viewBox="0 0 120 80" fill="currentColor" {...p}>
      {[0, 60].map((x) => (
        <g key={x} transform={`translate(${x} 0)`}>
          <ellipse cx="28" cy="46" rx="14" ry="22" />
          <circle cx="16" cy="20" r="4" />
          <circle cx="24" cy="14" r="4.5" />
          <circle cx="33" cy="13" r="4.5" />
          <circle cx="41" cy="18" r="4" />
          <circle cx="47" cy="26" r="3.5" />
        </g>
      ))}
    </svg>
  );
}

export function WarliDancers({ ...p }: P) {
  return (
    <svg viewBox="0 0 240 60" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" {...p}>
      {[0, 40, 80, 120, 160, 200].map((x, i) => (
        <g key={x} transform={`translate(${x} 0)`}>
          <circle cx="20" cy="14" r="6" fill="currentColor" />
          <path d="M20 20v14" />
          <path d={i % 2 ? "M20 24l-10 10M20 24l10 4" : "M20 24l-10 4M20 24l10 10"} />
          <path d="M20 34l-8 16M20 34l8 16" />
        </g>
      ))}
    </svg>
  );
}

export function FloralBorder({ ...p }: P) {
  return (
    <svg viewBox="0 0 400 24" fill="none" stroke="currentColor" strokeWidth={1.5} preserveAspectRatio="none" {...p}>
      <path d="M0 12h400" opacity="0.4" />
      {Array.from({ length: 10 }).map((_, i) => (
        <g key={i} transform={`translate(${i * 40 + 20} 12)`}>
          <path d="M0 0c-8-8-8-8 0-12 8 4 8 4 0 12Z" fill="currentColor" opacity="0.5" />
          <path d="M0 0c-8 8-8 8 0 12 8-4 8-4 0-12Z" fill="currentColor" opacity="0.5" />
          <circle cx="0" cy="0" r="2.5" fill="currentColor" />
          <path d="M-20 0c6-6 14-6 20 0M20 0c-6-6-14-6-20 0" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

export function WaxSeal({ className = "" }: { className?: string }) {
  return (
    <div className={`relative grid place-items-center ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-full drop-shadow-lg">
        <defs>
          <radialGradient id="wax" cx="40%" cy="35%" r="75%">
            <stop offset="0%" stopColor="#B22233" />
            <stop offset="70%" stopColor="#7A0E1A" />
            <stop offset="100%" stopColor="#4E0812" />
          </radialGradient>
        </defs>
        <path
          d="M50 4c10 6 18 2 26 10s4 16 10 26-2 18-10 26-2 20-10 26-18 2-26 10-16-4-26-10-20 2-26-10 4-18-10-26 2-18 10-26 2-20 10-26 16 4 26 10Z"
          fill="url(#wax)"
        />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#E8C670" strokeWidth="1.5" opacity="0.7" />
        <g className="text-gold-light" stroke="currentColor">
          <Om x={25} y={25} width={50} height={50} strokeWidth={5} />
        </g>
      </svg>
    </div>
  );
}

export function CornerFlourish({ ...p }: P) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.5} {...p}>
      <path d="M6 6c30 0 40 10 40 40" strokeLinecap="round" />
      <path d="M6 6c0 30 10 40 40 40" strokeLinecap="round" />
      <path d="M6 20c14 0 20 6 20 20M20 6c0 14 6 20 20 20" opacity="0.6" strokeLinecap="round" />
      <circle cx="46" cy="46" r="3" fill="currentColor" stroke="none" />
      <path d="M14 6c-4 0-8 0-8 8M6 14c0-4 0-8 8-8" opacity="0.5" />
    </svg>
  );
}
