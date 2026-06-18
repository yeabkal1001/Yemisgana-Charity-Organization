"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroContent } from './hero-content';
import { StatsSection } from './stats-section';
import { EducationBadge } from './education-badge';

const slides = [
  {
    id: 0,
    image: '/images/hero-bg.png',
    headline: <>Today, we build<br />schools.</>,
    subHeadline: <>Tomorrow, we build<br />futures.</>,
    location: 'Gurage Zone, Ethiopia',
  },
  {
    id: 1,
    image: '/images/second-hero-bg.png',
    headline: <>Better schools,</>,
    subHeadline: <>brighter<br />tomorrows.</>,
    location: 'Silti Woreda, SNNPR',
  },
  {
    id: 2,
    image: '/images/third-hero-bg.png',
    headline: <>Every school<br />we build,</>,
    subHeadline: <>a community<br />we uplift.</>,
    location: 'Cheha District, Ethiopia',
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrev(current);
      setCurrent((c) => (c + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (i: number) => {
    if (i === current) return;
    setPrev(current);
    setCurrent(i);
  };

  return (
    <section id="hero" className="relative w-full h-screen bg-[var(--color-bg-primary)] overflow-hidden">

      {/* ── Background Images with Ken Burns ───────────── */}
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className="absolute inset-0"
          style={{ zIndex: i === current ? 1 : 0, pointerEvents: 'none' }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === current ? 1 : 0 }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.05 }}
              animate={{ scale: i === current ? 1 : 1.05 }}
              transition={{ duration: 7, ease: 'linear' }}
            >
              <Image
                src={slide.image}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
                style={{ objectPosition: 'center 25%' }}
                priority={i === 0}
              />
            </motion.div>
          </motion.div>
        </div>
      ))}

      {/* ── Cinematic overlays ─────────────────────────── */}
      {/* Decorative floating SVG accents */}
      <svg className="absolute right-12 top-24 w-28 h-28 opacity-10 pointer-events-none animate-floaty" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" fill="rgba(163,230,53,0.06)" />
      </svg>
      <svg className="absolute left-10 bottom-32 w-20 h-20 opacity-8 pointer-events-none animate-floaty" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="80" height="80" rx="16" fill="rgba(255,255,255,0.03)" />
      </svg>

      {/* ── Content ────────────────────────────────────── */}
      <div className="relative h-full flex flex-col" style={{ zIndex: 3 }}>

        {/* Desktop layout */}
        <div className="hidden md:block relative flex-1">
          <AnimatePresence mode="wait">
            <HeroContent
              key={current}
              headline={slides[current].headline}
              subHeadline={slides[current].subHeadline}
              slideNum={current + 1}
              totalSlides={slides.length}
              location={slides[current].location}
            />
          </AnimatePresence>
          <StatsSection />
          <EducationBadge />
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col h-full">
          <div className="flex-1 flex flex-col justify-center px-6 pt-24 pb-4">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-3"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-px bg-lime" />
                <p className="text-lime font-black text-[9px] tracking-[0.28em] uppercase">
                  {slides[current].location}
                </p>
              </div>
              <h1 className="text-[var(--hero-contrast)] font-black leading-[0.92] tracking-tighter text-4xl">
                {slides[current].headline}
              </h1>
              
              <h2 className="text-lime font-serif italic text-2xl leading-[1.05]">
                {slides[current].subHeadline}
              </h2>
              <div className="h-px w-40 bg-gradient-to-r from-lime to-transparent mt-1" />
              <p className="text-[var(--color-text-muted)] text-sm leading-[1.75] max-w-[300px] mt-1">
                Yemisgana Charity Organization builds safe, modern schools for children in the Gurage Zone of Ethiopia.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <button className="px-5 py-2.5 bg-lime text-deep-forest font-black text-[12px] rounded-full hover:bg-lime-light transition-all shadow-lg shadow-lime/25" aria-label="Learn about our mission">
                  Our Mission →
                </button>
                <button className="flex items-center gap-2 text-[var(--color-text-muted)] text-[12px] font-semibold hover:text-[var(--color-text-primary)] transition-colors" aria-label="Watch our story video">
                  <div className="w-8 h-8 rounded-full border border-[var(--color-border)] flex items-center justify-center">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor">
                      <path d="M1 1l8 5-8 5V1z" />
                    </svg>
                  </div>
                  Watch Story
                </button>
              </div>
            </motion.div>
          </div>
          <StatsSection />
        </div>
      </div>

      {/* ── Slide indicators ───────────────────────────── */}
      <div className="absolute bottom-24 md:bottom-20 left-6 md:left-10 lg:left-14 flex items-center gap-2" style={{ zIndex: 4 }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-500 ${
              i === current
                ? 'w-8 h-1.5 bg-lime'
                : 'w-1.5 h-1.5 bg-[var(--color-text-muted)] hover:bg-[var(--color-text-primary)]'
            }`}
          />
        ))}
      </div>

      {/* ── Animated scroll indicator ──────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5" style={{ zIndex: 4 }}>
        <p className="text-[var(--color-text-muted)] font-sans text-[8px] tracking-[0.3em] uppercase">Scroll</p>
        <div className="w-px h-8 bg-gradient-to-b from-[rgba(var(--color-text-muted-rgb,10,30,18),0.4)] to-transparent animate-scroll-pulse" />
      </div>

    </section>
  );
}
