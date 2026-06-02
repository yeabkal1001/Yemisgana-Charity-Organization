"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

const stats = [
  { number: 12,    suffix: '+', label: 'Schools Built\n& Renovated' },
  { number: 7000,  suffix: '+', label: 'Students\nImpacted' },
  { number: 2010,  suffix: '',  label: 'Year\nFounded' },
  { number: 20,    suffix: '+', label: 'Communities\nEmpowered' },
];

const values = [
  { name: 'Integrity', desc: 'Honesty and transparency in all actions.' },
  { name: 'Collaboration', desc: 'Working together with local communities.' },
  { name: 'Empowerment', desc: 'Providing tools for long-term growth.' },
  { name: 'Sustainability', desc: 'Solutions built to serve generations.' },
  { name: 'Equity', desc: 'Access to quality learning for every child.' }
];

const tickerItems = [
  'Education Opens Doors', '— We Build Them', 'Gurage Zone, Ethiopia',
  'Building Schools', '— Changing Lives', '7,000+ Students Impacted',
  'Safe. Modern. Inspiring.', '— Since 2010',
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {target >= 1000 ? count.toLocaleString() : count}{suffix}
    </span>
  );
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <section id="about" ref={containerRef} className="w-full bg-mid-forest relative overflow-hidden select-none border-b border-white/5 grid-bg">

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-white/5 pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-white/5 pointer-events-none hidden md:block" />

      {/* ── Headline band ──────────────────────────────── */}
      <div className="px-6 md:px-20 lg:px-24 pt-24 md:pt-32 pb-10 md:pb-14 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lime font-sans text-[10px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
        >
          <span className="w-6 h-px bg-lime" />
          About Yemisgana
        </motion.p>

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="font-sans font-black text-white leading-[0.95] tracking-tighter"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.8rem)' }}
          >
            Building <span className="font-serif italic font-normal text-lime">today</span>.<br />
            Empowering <span className="font-serif italic font-normal text-lime">forever</span>.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-white/40 font-sans text-xs md:text-sm max-w-xs leading-relaxed"
          >
            A dedicated collective focused on constructing safe, modern learning environments for students in the Gurage Zone.
          </motion.p>
        </div>
      </div>

      {/* ── Marquee ticker ───────────────────────────────────────── */}
      <div className="border-y border-white/5 overflow-hidden py-3.5 bg-deep-forest/80 backdrop-blur-sm relative z-10">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="text-white/60 font-sans font-bold text-[10px] tracking-[0.25em] uppercase px-8"
            >
              {item}
              <span className="text-lime/50 mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Two-col editorial ────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row relative z-10">

        {/* Left: Description & Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 flex flex-col justify-between px-6 md:px-20 lg:px-24 py-12 md:py-16 lg:border-r border-white/5"
        >
          <div>
            <p className="text-white/70 font-sans text-base md:text-lg leading-[1.8] max-w-xl">
              Founded on the belief that every child deserves a safe place to learn,{' '}
              <strong className="text-white font-bold group">Yemisgana Charity Organization</strong>{' '}
              works in the Gurage Zone of Ethiopia — constructing new schools, renovating
              dilapidated infrastructure, and equipping classrooms with the resources students need to thrive.
            </p>

            {/* Pull quote */}
            <div className="mt-12 bg-white/3 border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
              <div className="absolute right-4 top-4 text-white/5 group-hover:text-lime/10 transition-colors duration-500">
                <Quote size={60} strokeWidth={1} />
              </div>
              <p className="text-white/80 font-serif italic text-[15px] md:text-[17px] leading-[1.6] relative z-10">
                "Education is the most powerful weapon which you can use to change the world."
              </p>
              <cite className="text-lime font-sans text-[9px] font-bold tracking-[0.2em] uppercase not-italic mt-4 block relative z-10">
                — Nelson Mandela
              </cite>
            </div>
          </div>

          {/* Interactive Values Section */}
          <div className="mt-12">
            <p className="text-white/30 text-[9px] font-bold tracking-[0.25em] uppercase mb-4">Our Core Values</p>
            <div className="flex flex-wrap gap-2.5">
              {values.map((v, i) => (
                <div
                  key={v.name}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  className={`px-4 py-2 rounded-full border text-[10px] font-bold tracking-[0.18em] uppercase transition-all duration-300 cursor-default relative overflow-hidden ${
                    hoveredValue === i
                      ? 'border-lime text-deep-forest bg-lime scale-[1.03]'
                      : 'border-white/10 text-white/75 bg-white/3 hover:border-white/35'
                  }`}
                >
                  {v.name}
                </div>
              ))}
            </div>
            
            {/* Value detail description */}
            <div className="h-10 mt-4 relative overflow-hidden">
              {values.map((v, i) => (
                <motion.p
                  key={v.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: hoveredValue === i ? 1 : 0, 
                    y: hoveredValue === i ? 0 : 10 
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 text-white/50 text-[11px] font-sans leading-relaxed pointer-events-none"
                >
                  {v.desc}
                </motion.p>
              ))}
              {hoveredValue === null && (
                <p className="text-white/20 text-[11px] font-sans leading-relaxed italic">
                  Hover over a value to learn more about our commitment.
                </p>
              )}
            </div>
          </div>
        </motion.div>

        {/* Right: Photo with offset decoration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1 flex items-center justify-center p-6 md:p-12 lg:p-16 min-h-[340px] md:min-h-[480px]"
        >
          <div className="relative w-full h-full min-h-[300px] md:min-h-[400px] rounded-3xl overflow-hidden group">
            
            {/* Visual offset border decoration */}
            <div className="absolute inset-0 border border-lime/20 rounded-3xl translate-x-3 translate-y-3 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-700 ease-out" />
            
            <Image
              src="/9af86ad0-1671-4a65-b8d5-35a6ca32bd2e.jpg"
              alt="School building in the Gurage Zone supported by Yemisgana"
              fill
              className="object-cover rounded-3xl transition-transform duration-[1.8s] group-hover:scale-[1.04]"
              style={{ objectPosition: 'center' }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-forest/60 via-transparent to-transparent pointer-events-none" />

            {/* Floating mission card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-[270px] bg-deep-forest/85 backdrop-blur-xl rounded-2xl p-5 border border-white/10 shadow-2xl"
            >
              <p className="text-lime font-sans text-[9px] font-black tracking-[0.25em] uppercase mb-1.5">
                Our Mission
              </p>
              <p className="text-white/70 font-sans text-[11px] leading-[1.75]">
                To ensure every child in the Gurage Zone has access to quality education —
                regardless of background or location.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── Stat Wall ────────────────────────────────────────────── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/5 relative z-10">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            viewport={{ once: true, amount: 0.4 }}
            className={`flex flex-col items-center justify-center py-10 md:py-14 border-white/5 hover:bg-white/[0.02] transition-colors duration-500 cursor-default group ${
              i % 2 === 0 ? 'border-r' : 'lg:border-r'
            } ${i < 2 ? 'border-b lg:border-b-0' : ''}`}
          >
            <p
              className="font-sans font-black text-white leading-none tracking-tighter mb-2 group-hover:text-lime transition-colors duration-300"
              style={{ fontSize: 'clamp(1.8rem, 3.8vw, 3rem)' }}
            >
              <CountUp target={stat.number} suffix={stat.suffix} />
            </p>
            <p className="text-white/40 font-sans text-[9px] text-center leading-snug whitespace-pre-line tracking-[0.18em] uppercase group-hover:text-white/60 transition-colors duration-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
