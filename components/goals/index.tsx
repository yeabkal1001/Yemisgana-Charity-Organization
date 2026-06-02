"use client";

import { GraduationCap, Sun, Users, BookOpen, Scale, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const goals = [
  {
    icon: GraduationCap,
    num: '01',
    title: 'Expand Access',
    full: 'Expand Access to Education',
    tag: 'Foundation',
    desc: 'Build and renovate schools in underserved communities, ensuring that more children have access to quality education across the Gurage Zone.',
    gridClass: 'lg:col-span-2',
    glow: 'rgba(var(--color-lime-rgb), 0.12)',
  },
  {
    icon: Sun,
    num: '02',
    title: 'Improve Environments',
    full: 'Improve Learning Environments',
    tag: 'Safety',
    desc: 'Create safe, modern, and conducive learning spaces that allow students to thrive academically — schools children are proud to attend.',
    gridClass: 'lg:col-span-1',
    glow: 'rgba(var(--color-amber-rgb), 0.12)',
  },
  {
    icon: Users,
    num: '03',
    title: 'Community Involvement',
    full: 'Increase Community Involvement',
    tag: 'Ownership',
    desc: 'Engage local communities in construction and renovation, fostering ownership and ensuring the long-term sustainability of every project.',
    gridClass: 'lg:col-span-1',
    glow: 'rgba(var(--color-purple-rgb), 0.12)',
  },
  {
    icon: BookOpen,
    num: '04',
    title: 'Enhance Resources',
    full: 'Enhance Educational Resources',
    tag: 'Equipment',
    desc: 'Provide schools with books, computers, vocational programs, and learning materials to support student success and future readiness.',
    gridClass: 'lg:col-span-1',
    glow: 'rgba(var(--color-sky-rgb), 0.12)',
  },
  {
    icon: Scale,
    num: '05',
    title: 'Gender Equality',
    full: 'Promote Gender Equality',
    tag: 'Equity',
    desc: 'Ensure that both girls and boys have equal opportunities to learn, grow, and succeed — because education knows no gender.',
    gridClass: 'lg:col-span-1',
    glow: 'rgba(var(--color-red-rgb), 0.12)',
  },
];

export function Goals() {
  return (
    <section id="goals" className="w-full bg-[var(--color-bg-secondary)] relative select-none overflow-hidden border-b border-[var(--color-border)] py-24 md:py-32 grid-bg">

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-[var(--color-surface)] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-[var(--color-surface)] pointer-events-none hidden md:block" />

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
          Looking Forward
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
            Our Core <span className="font-serif italic font-normal text-lime">Goals</span>.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[var(--color-text-primary)]/40 font-sans text-xs md:text-sm max-w-xs leading-relaxed"
          >
            Five defining objectives guiding every project, every brick, and every classroom.
          </motion.p>
        </div>
      </div>

      {/* ── Bento Grid Layout ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {goals.map((goal, i) => {
            const Icon = goal.icon;
            
            return (
              <motion.div
                key={goal.num}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`group relative rounded-3xl p-8 border border-[var(--color-border)] bg-[var(--color-bg-primary)]/50 backdrop-blur-sm flex flex-col justify-between overflow-hidden transition-all duration-500 hover:scale-[1.015] hover:border-white/15 ${goal.gridClass}`}
                style={{
                  boxShadow: `inset 0 0 20px rgba(255, 255, 255, 0.01)`
                }}
              >
                {/* Glow ring overlay on hover */}
                <div 
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(350px circle at 50% 50%, ${goal.glow}, transparent 70%)`
                  }}
                />

                {/* Top Section: Icon, Tag & Number */}
                <div className="flex items-start justify-between relative z-10">
                  <div className="relative">
                    {/* Glowing background blur for icon */}
                    <div className="absolute inset-0 bg-lime/10 blur-xl rounded-full" />
                    
                    <div className="relative w-12 h-12 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-center text-lime shadow-2xl transition-transform duration-500 group-hover:scale-105">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] font-sans text-[8px] font-black tracking-[0.2em] uppercase text-[var(--color-text-primary)]/50 group-hover:text-lime group-hover:border-lime/20 transition-all duration-300">
                      {goal.tag}
                    </span>
                    <span className="font-serif font-black text-[var(--color-text-primary)]/10 text-xl select-none group-hover:text-lime/25 transition-colors duration-300">
                      {goal.num}
                    </span>
                  </div>
                </div>

                {/* Bottom Section: Heading & Desc */}
                <div className="mt-12 md:mt-16 relative z-10">
                  <h3 
                    className="font-sans font-black text-[var(--color-text-primary)] leading-tight tracking-tight mb-3 transition-colors duration-300 group-hover:text-lime-light"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)' }}
                  >
                    {goal.full}
                  </h3>
                  
                  <p className="text-[var(--color-text-primary)]/50 font-sans text-xs md:text-sm leading-relaxed transition-colors duration-300 group-hover:text-[var(--color-text-primary)]/70">
                    {goal.desc}
                  </p>
                </div>

                {/* Hover indicator line */}
                <div className="absolute left-8 bottom-0 right-8 h-[2px] bg-gradient-to-r from-transparent via-lime to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
