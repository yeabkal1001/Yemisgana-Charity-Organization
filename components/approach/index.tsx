"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Eye, ArrowRightLeft } from 'lucide-react';

const pillars = [
  {
    num: '01',
    title: 'Community Engagement',
    desc: 'We work hand-in-hand with local leaders, parents, teachers, and students — ensuring every voice is heard and every project aligns with the community\'s long-term vision.',
  },
  {
    num: '02',
    title: 'Long-term Sustainability',
    desc: 'Our construction methods focus on durability and local resources, ensuring schools outlive temporary projects and serve generations we have yet to meet.',
  },
  {
    num: '03',
    title: 'Strategic Partnerships',
    desc: 'Collaborating closely with local government, NGOs, and global sponsors to build a robust support network that amplifies the reach of our educational programs.',
  },
];

export function Approach() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section id="approach" className="w-full bg-[var(--color-bg-primary)] relative overflow-hidden select-none border-b border-[var(--color-border)] py-24 md:py-32 grid-bg">

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-[var(--color-border)] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-[var(--color-border)] pointer-events-none hidden md:block" />

      {/* ── Section Masthead ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24 mb-16">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lime font-sans text-[10px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3"
        >
          <span className="w-6 h-px bg-lime" />
          Our Approach
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
            Why the <span className="font-serif italic font-normal text-lime">Gurage Zone</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[var(--color-text-muted)] font-sans text-xs md:text-sm max-w-sm leading-relaxed"
          >
            We target resources where the need is greatest, transforming dilapidated classrooms into modern, structural hubs of opportunity.
          </motion.p>
        </div>
      </div>

      {/* ── Interactive Before/After Comparison Slider ───────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="relative w-full h-[55vh] md:h-[65vh] rounded-3xl overflow-hidden select-none border border-[var(--color-border)] cursor-ew-resize"
          ref={sliderRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          {/* Before Image (Bottom Layer) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/f234e0ef-5e51-49b7-a63b-c9524fc9f528.jpg"
              alt="Inside a dilapidated classroom in the Gurage Zone before renovation"
              fill
              className="object-cover"
              style={{ objectPosition: 'center 35%' }}
              priority
            />
            {/* cinematic overlay removed per user request */}
          </div>

          {/* After Image (Top Clip Layer) */}
          <div
            className="absolute inset-0 z-10 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
              <div className="absolute inset-0 w-[100vw] h-full" style={{ width: sliderRef.current?.getBoundingClientRect().width }}>
              <Image
                src="/images/second-hero-bg.png"
                alt="A newly constructed school building in the Gurage Zone by Yemisgana"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 55%' }}
                priority
              />
              {/* Subtle visual color boost for after */}
              <div className="absolute inset-0" style={{ background: 'rgba(var(--color-lime-rgb),0.05)', mixBlendMode: 'overlay' }} />
            </div>
          </div>

          {/* Floating Badges */}
          <div className="absolute top-6 left-6 z-20 pointer-events-none">
            <span className="px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.25em] rounded-full border" style={{ background: 'rgba(var(--color-red-rgb),0.9)', color: 'white', borderColor: 'rgba(var(--color-red-rgb),0.2)', boxShadow: '0 10px 25px rgba(0,0,0,0.25)' }}>
              Before Renovation
            </span>
          </div>

          <div className="absolute top-6 right-6 z-20 pointer-events-none">
            <span className="px-3.5 py-2 text-[9px] font-black uppercase tracking-[0.25em] rounded-full" style={{ background: 'rgba(var(--color-lime-rgb),0.9)', color: 'var(--color-deep-forest)', borderColor: 'rgba(var(--color-lime-light-rgb),0.3)', boxShadow: '0 8px 20px rgba(var(--color-lime-rgb),0.1)' }}>
              After Yemisgana
            </span>
          </div>

          {/* Centered Instructions Badge when not dragging */}
          {!isDragging && sliderPosition === 50 && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
              <div className="px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-2xl scale-100 animate-pulse" style={{ background: 'rgba(var(--color-deep-forest-rgb),0.8)', border: '1px solid var(--color-border)', backdropFilter: 'blur(6px)' }}>
                <ArrowRightLeft size={13} className="text-lime animate-bounce" />
                <span style={{ color: 'var(--color-text-primary)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase' }}>Drag to Compare</span>
              </div>
            </div>
          )}

          {/* Slider Handle (Bar & Circle) */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-lime/60 z-30 pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div 
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-lime border-2 flex items-center justify-center shadow-[0_0_20px_var(--color-lime)] transition-all duration-300"
              style={{
                transform: `translate(-50%, -50%) scale(${isDragging ? 1.15 : 1})`,
              }}
            >
              <ArrowRightLeft size={13} strokeWidth={2.5} className="text-[var(--color-deep-forest)]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Context Paragraphs ───────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24 mb-16 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 border-b border-[var(--color-border)] pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-sans text-base md:text-lg leading-[1.8]"
          style={{ color: 'var(--color-text-primary)' }}
        >
          Located in the <strong style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>SNNPR region of Ethiopia</strong>, the Gurage Zone is home to a vibrant community with a rich cultural heritage. Yet, the region faces significant educational hurdles: overcrowded classrooms, failing infrastructure, and lack of sanitations.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-sans text-sm md:text-base leading-[1.8]"
          style={{ color: 'var(--color-text-muted)' }}
        >
          By establishing operations in Gurage, Yemisgana builds bridges between local community councils, government organizations, and international donors. We believe that safe educational ecosystems are the foundation of sustainable socioeconomic empowerment.
        </motion.p>
      </div>

      {/* ── Three Approach Pillars ───────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border)] border border-[var(--color-border)] rounded-3xl overflow-hidden bg-[var(--color-bg-primary)]/40 backdrop-blur-sm">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col p-8 md:p-10 hover:bg-[var(--color-surface-hover)] transition-colors duration-500 cursor-default"
            >
              {/* Number */}
              <span
                className="font-serif font-black leading-none select-none mb-6 group-hover:text-lime transition-colors duration-500"
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)' }}
              >
                {pillar.num}
              </span>

              {/* Title */}
              <h3
                className="font-sans font-black tracking-tight mb-4 group-hover:text-lime-light transition-colors duration-400"
                style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.1rem, 2vw, 1.4rem)' }}
              >
                {pillar.title}
              </h3>

              {/* Accent divider */}
              <div className="h-px w-8 group-hover:w-16 transition-all duration-500 mb-5" style={{ background: 'rgba(var(--color-lime-rgb),0.2)' }} />

              {/* Desc */}
              <p className="font-sans text-xs md:text-sm leading-[1.75] group-hover:text-[var(--color-text-primary)] transition-colors duration-300" style={{ color: 'var(--color-text-muted)' }}>
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
