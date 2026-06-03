"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { number: 12,  suffix: '+',  label: 'Schools Built\n& Renovated' },
  { number: 7000,suffix: '+',  label: 'Students\nImpacted' },
  { number: 50,  suffix: '+',  label: 'Classrooms\nConstructed' },
  { number: 30,  suffix: '+',  label: 'Schools with\nClean Water' },
  { number: 20,  suffix: '+',  label: 'Communities\nEmpowered' },
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

export function Impact() {
  return (
    <section id="impact" className="w-full bg-[var(--color-bg-primary)] relative select-none overflow-hidden border-b border-[var(--color-border)] grid-bg">

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-[var(--color-border)] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-[var(--color-border)] pointer-events-none hidden md:block" />

      {/* ── Section Masthead ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24 pt-24 md:pt-32 pb-12 md:pb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lime font-sans text-[10px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
        >
          <span className="w-6 h-px bg-lime" />
          Our Impact
        </motion.p>

        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="font-sans font-black text-[var(--color-text-primary)] leading-[0.95] tracking-tighter"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 4.8rem)' }}
          >
            Real <span className="font-serif italic font-normal text-lime">change</span>.<br />
            Lasting <span className="font-serif italic font-normal text-lime">impact</span>.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[var(--color-text-muted)] font-sans text-xs md:text-sm max-w-sm leading-relaxed"
          >
            Since Yemisgana Charity began, every project has been a collaborative step to build educational accessibility across Gurage.
          </motion.p>
        </div>
      </div>

      {/* ── Full-bleed children photo ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative w-full h-[50vh] md:h-[65vh] rounded-3xl overflow-hidden border border-[var(--color-border)] group"
        >
          <Image
            src="/9dffb4ea-0a0a-4ec8-9364-4ca50a758981.png"
            alt="Excited school children helped by Yemisgana Charity Organization in Gurage Zone"
            fill
            className="object-cover transition-transform duration-[1.8s] group-hover:scale-103"
            style={{ objectPosition: 'center 30%' }}
            priority
          />
          {/* image overlay removed per user request */}

          {/* Caption overlays */}
          <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
            <div>
              <p className="text-lime font-sans text-[8px] font-black tracking-[0.25em] uppercase mb-1.5 flex items-center gap-2">
                <span className="w-4 h-px bg-lime" />
                The Reason We Build
              </p>
              <h3 className="text-[var(--color-text-primary)] font-serif italic text-lg md:text-2xl leading-snug">
                "Uplifting minds, one school at a time."
              </h3>
            </div>
            <span className="px-3.5 py-1.5 rounded-full font-black text-[9px] uppercase tracking-widest backdrop-blur-md" style={{ border: '1px solid var(--color-border)', background: 'var(--color-surface)', color: 'var(--color-text-primary)' }}>
              Gurage, Ethiopia
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Metric Wall Grid ──────────────────────────────────────── */}
      <div className="border-y border-[var(--color-border)] bg-[var(--color-bg-secondary)]/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0 divide-white/5">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center justify-center py-10 md:py-14 hover:bg-[var(--color-surface-hover)] transition-colors duration-500 cursor-default group ${
                  i >= 4 ? 'col-span-2 md:col-span-1 border-t md:border-t-0' : ''
                }`}
              >
                <p
                  className="font-sans font-black text-[var(--color-text-primary)] leading-none tracking-tighter mb-2 group-hover:text-lime transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)' }}
                >
                  <CountUp target={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-[var(--color-text-muted)] font-sans text-[9px] text-center leading-snug whitespace-pre-line tracking-[0.18em] uppercase group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Split commitment panel ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.25 }}
            className="relative rounded-3xl overflow-hidden min-h-[260px] md:min-h-[340px] border border-[var(--color-border)] group"
          >
            <Image
              src="/9af86ad0-1671-4a65-b8d5-35a6ca32bd2e.jpg"
              alt="Community school building in Gurage Zone"
              fill
              className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 transition-all duration-700" style={{ background: 'transparent' }} />
            <div className="absolute inset-0 rounded-3xl translate-x-2 translate-y-2 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-700 pointer-events-none" style={{ border: '1px solid rgba(var(--color-lime-rgb),0.2)' }} />
          </motion.div>

          {/* Dark commitment text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl p-8 md:p-12 border border-[var(--color-border)] bg-[var(--color-bg-secondary)]/60 backdrop-blur-sm flex flex-col justify-center relative overflow-hidden"
          >
            {/* Custom glowing backdrop */}
            <div className="absolute -right-16 -bottom-16 w-36 h-36 blur-3xl rounded-full" style={{ background: 'rgba(var(--color-lime-rgb),0.05)' }} />
            
            <p className="text-lime font-sans text-[10px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
              <span className="w-4 h-px bg-lime" />
              The Journey Continues
            </p>
            
            <h3
              className="text-[var(--color-text-primary)] font-sans font-black leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}
            >
              until every child has a classroom.<br />
              <span className="text-lime font-serif italic font-normal">until every child has a classroom.</span>
            </h3>
            
            <p className="text-[var(--color-text-muted)] font-sans text-xs md:text-sm leading-relaxed max-w-md">
              Our journey doesn&apos;t stop here. We remain committed to expanding our reach, continuing to deliver safe, functional, and inspiring spaces for children across Silti, Cheha, and all regions of the Gurage Zone.
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
