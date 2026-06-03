"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Hammer, Paintbrush, BookOpen, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const pillars = [
  {
    num: '01',
    title: 'School Construction',
    tag: 'BUILDING NEW FUTURES',
    image: '/images/second-hero-bg.png',
    desc: 'We build entirely new schools in underserved communities where none exist — fully equipped hubs designed with children and teachers in mind, raising standards that match modern educational aspirations.',
    icon: Hammer,
    color: 'from-lime/20 to-transparent',
    glow: 'rgba(var(--color-lime-rgb), 0.15)',
  },
  {
    num: '02',
    title: 'School Renovation',
    tag: 'TRANSFORMING OLD SPACES',
    image: '/7871eddb-65fb-4e4d-ad88-02ecf4faf232.png',
    desc: 'Mud walls become concrete. Dirt floors become smooth tiles. Broken roofs become shelters of possibility. We take what exists and transform it into a space worth studying in.',
    icon: Paintbrush,
    color: 'from-amber/20 to-transparent',
    glow: 'rgba(var(--color-amber-light-rgb), 0.15)',
  },
  {
    num: '03',
    title: 'Educational Resources',
    tag: 'EQUIPPING EVERY LEARNER',
    image: '/images/third-hero-bg.png',
    desc: 'Beyond bricks: libraries stocked with books, computer labs alive with curiosity, science kits, notebooks, and learning toolkits — everything a child needs to grow into tomorrow\'s leader.',
    icon: BookOpen,
    color: 'from-sky/20 to-transparent',
    glow: 'rgba(var(--color-sky-rgb), 0.15)',
  },
];

export function WhatWeDo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="what-we-do" className="w-full bg-[var(--color-bg-primary)] relative select-none overflow-hidden border-b border-[var(--color-border)] py-24 md:py-32 grid-bg">

      {/* Decorative lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-[var(--color-border)] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-[var(--color-border)] pointer-events-none hidden md:block" />

      {/* ── Section Masthead ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24 mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lime font-sans text-[10px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-lime" />
              Areas of Focus
            </p>
            <h2
              className="text-[var(--color-text-primary)] font-sans font-black leading-[0.95] tracking-tighter"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4.8rem)' }}
            >
              How We <span className="text-lime font-serif italic font-normal">Uplift</span>.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-[var(--color-text-muted)] font-sans text-xs md:text-sm leading-relaxed max-w-xs"
          >
            Three core pillars of impact driving structural and systemic educational change in the Gurage Zone.
          </motion.p>
        </div>
      </div>

      {/* ── Editorial Staggered Cards Grid ─────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isHovered = hoveredIndex === idx;
            
            return (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-3xl overflow-hidden min-h-[500px] flex flex-col justify-end p-8 border transition-all duration-700 ease-out cursor-pointer group ${
                  isHovered 
                    ? 'border-[var(--color-border)] shadow-2xl scale-[1.02]' 
                    : 'border-[var(--color-border)]'
                }`}
                style={{
                  boxShadow: isHovered ? `0 15px 40px -10px ${pillar.glow}` : 'none'
                }}
              >
                {/* Background image container */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={pillar.image}
                    alt={pillar.title}
                    fill
                    className="object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
                  />
                  
                  {/* radial gradient overlay removed per user request */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                </div>

                {/* Content Container (lies above images) */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  
                  {/* Top line with Icon and Number */}
                  <div className="flex items-center justify-between">
                    <span 
                      className="font-serif font-black text-lime/25 leading-none transition-colors duration-500 group-hover:text-lime/50"
                      style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                    >
                      {pillar.num}
                    </span>
                    
                    <div 
                      className="w-11 h-11 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-muted)] transition-all duration-500 group-hover:bg-lime group-hover:text-deep-forest group-hover:border-lime group-hover:rotate-12"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Bottom Text Details */}
                  <div className="mt-20">
                    <p className="text-lime font-sans text-[8px] font-black tracking-[0.25em] mb-2">
                      {pillar.tag}
                    </p>
                    
                    <h3 
                      className="text-[var(--color-text-primary)] font-sans font-black tracking-tight leading-[1.1] mb-4 transition-colors duration-300 group-hover:text-lime-light"
                      style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)' }}
                    >
                      {pillar.title}
                    </h3>
                    
                    {/* Animated divider */}
                    <div className="h-px bg-[var(--color-border)] w-full mb-4 group-hover:bg-lime/30 transition-colors duration-500" />
                    
                    <p className="text-[var(--color-text-muted)] font-sans text-xs md:text-sm leading-relaxed transition-colors duration-300 group-hover:text-[var(--color-text-primary)]">
                      {pillar.desc}
                    </p>

                    {/* Bottom CTA icon */}
                    <div className="flex items-center gap-2 mt-6 text-lime opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-[10px] font-black tracking-widest uppercase">Explore Impact</span>
                      <ArrowUpRight size={14} />
                    </div>
                  </div>

                </div>

                {/* Decorative glow ring on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-lime to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
