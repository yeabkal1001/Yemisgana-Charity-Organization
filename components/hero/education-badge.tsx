import { School } from 'lucide-react';

export function EducationBadge() {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const topText = 'TOGETHER FOR EDUCATION ·';
  const bottomText = 'TOGETHER FOR CHANGE ·';

  return (
    <div className="hidden md:flex flex-col items-center absolute bottom-20 right-8 lg:right-14 z-30">
      {/* Circular rotating-text badge */}
      <div className="relative w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center">
        {/* SVG with circular text paths */}
        <svg
          viewBox="0 0 128 128"
          className="absolute inset-0 w-full h-full animate-badge-spin"
        >
          <defs>
            <path
              id="topArc"
              d="M 64,64 m -52,0 a 52,52 0 1,1 104,0 a 52,52 0 1,1 -104,0"
            />
          </defs>
          {/* Outer ring */}
          <circle
            cx="64" cy="64" r="62"
            fill="none"
            stroke="rgba(var(--color-lime-rgb),0.4)"
            strokeWidth="1"
          />
          <circle
            cx="64" cy="64" r="52"
            fill="none"
            stroke="rgba(var(--color-lime-rgb),0.2)"
            strokeWidth="0.5"
          />
          {/* Circular text — top half */}
          <text className="fill-lime" fontSize="8.5" fontWeight="bold" letterSpacing="2.5">
            <textPath href="#topArc" startOffset="0%">
              {topText}{'  '}{bottomText}
            </textPath>
          </text>
        </svg>

        {/* Center icon */}
        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-lime/50 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <School className="w-6 h-6 lg:w-7 lg:h-7 text-lime" strokeWidth={1.5} />
        </div>
      </div>

      {/* Scroll to explore */}
      <div className="flex flex-col items-center gap-1 mt-4">
        <p className="text-lime text-[9px] font-bold tracking-[0.2em] uppercase">Scroll</p>
        <p className="text-[var(--color-text-primary)]/70 text-[9px] font-semibold tracking-[0.15em] uppercase">To Explore</p>
        <div className="relative w-[2px] h-6 mt-1 overflow-hidden rounded-full bg-white/20">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-lime rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
}
