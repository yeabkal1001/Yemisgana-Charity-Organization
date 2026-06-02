import { Play } from 'lucide-react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface HeroContentProps {
  headline: ReactNode;
  subHeadline: ReactNode;
  slideNum: number;
  totalSlides: number;
  location: string;
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function HeroContent({ headline, subHeadline, slideNum, totalSlides, location }: HeroContentProps) {
  return (
    <div className="absolute inset-0 flex items-center pt-20 pb-28 px-6 md:px-10 lg:px-14">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-3 max-w-[500px] lg:max-w-[560px]"
      >

        {/* Slide counter + location */}
        <motion.div variants={item} className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lime font-black text-[11px] tabular-nums">
              {String(slideNum).padStart(2, '0')}
            </span>
            <div className="w-6 h-px bg-white/25" />
            <span className="text-white/35 font-sans text-[11px] tabular-nums">
              {String(totalSlides).padStart(2, '0')}
            </span>
          </div>
          <div className="w-px h-3.5 bg-white/20" />
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
            <span className="text-white/60 font-sans text-[10px] tracking-[0.2em] uppercase">{location}</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={item}
          className="text-white font-black leading-[0.9] tracking-tighter"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}
        >
          {headline}
        </motion.h1>

        {/* Italic serif sub-headline */}
        <motion.div variants={item}>
          <h2
            className="text-lime font-serif italic leading-[1.05]"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)' }}
          >
            {subHeadline}
          </h2>
          <div className="mt-2 h-px w-48 bg-gradient-to-r from-lime to-transparent" />
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="text-white/65 text-[13px] md:text-sm leading-[1.8] max-w-[360px] mt-1 font-sans"
        >
          Yemisgana Charity Organization builds and renovates schools across the Gurage Zone of Ethiopia —
          creating safe, inspiring places where every child can thrive.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex items-center gap-5 mt-2">
          <button className="px-5 py-2.5 bg-lime text-deep-forest font-black text-[12px] tracking-wide rounded-full hover:bg-lime-light hover:scale-105 active:scale-95 transition-all shadow-xl shadow-lime/25">
            Our Mission →
          </button>
          <button className="flex items-center gap-2.5 text-white hover:text-lime transition-colors group font-sans">
            <div className="w-8 h-8 rounded-full border border-white/45 group-hover:border-lime flex items-center justify-center transition-colors">
              <Play size={10} className="fill-white group-hover:fill-lime transition-colors ml-[1px]" />
            </div>
            <span className="text-[12px] font-semibold">Watch Our Story</span>
          </button>
        </motion.div>

      </motion.div>
    </div>
  );
}
