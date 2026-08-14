"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const actions = [
  {
    num: '01',
    cta: 'Donate',
    label: 'Donate Now',
    desc: 'Every contribution goes directly to building and renovating schools. Your gift builds futures — brick by brick.',
    href: '#',
    featured: true,
    glow: 'rgba(var(--color-lime-rgb), 0.25)',
  },
  {
    num: '02',
    cta: 'Volunteer',
    label: 'Give Your Time',
    desc: 'Join our team on the ground or remotely. Skills, time, and passion are all welcome here.',
    href: '#',
    featured: false,
    glow: 'rgba(255, 255, 255, 0.05)',
  },
  {
    num: '03',
    cta: 'Spread the Word',
    label: 'Amplify Our Mission',
    desc: 'Share our story with your network. Awareness is the first brick in the foundation of change.',
    href: '#',
    featured: false,
    glow: 'rgba(255, 255, 255, 0.05)',
  },
];

export function GetInvolved() {
  return (
    <section id="get-involved" className="w-full bg-[var(--color-bg-secondary)] relative overflow-hidden select-none border-t border-[var(--color-border)] grid-bg">

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-12 w-px bg-[var(--color-border)] pointer-events-none hidden md:block" />
      <div className="absolute top-0 bottom-0 right-12 w-px bg-[var(--color-border)] pointer-events-none hidden md:block" />

      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-0">
        <Image src="/images/hero-bg.png" alt="" fill className="object-cover" />
      </div>

      {/* ── Section Masthead ─────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 lg:px-24 pt-24 md:pt-32 pb-12 md:pb-16 border-b border-[var(--color-border)]">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <p className="text-lime font-sans text-[10px] font-black tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
              <span className="w-6 h-px bg-lime" />
              Get Involved
            </p>
            <h2
              className="font-sans font-black text-[var(--color-text-primary)] leading-[0.95] tracking-tighter"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 4.8rem)' }}
            >
              Join the <span className="font-serif italic font-normal text-lime">movement</span>.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-[var(--color-text-muted)] font-sans text-xs md:text-sm max-w-xs leading-relaxed"
          >
            Together, we can build a future where every child in the Gurage Zone has access to quality education.
          </motion.p>
        </div>
      </div>

      {/* ── Three Action Cards Grid ─────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 lg:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {actions.map((action, i) => (
            <motion.a
              key={action.num}
              href={action.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className={`group relative rounded-3xl p-8 border flex flex-col justify-between overflow-hidden transition-all duration-500 cursor-pointer min-h-[360px] ${
                action.featured
                  ? 'bg-lime border-lime text-deep-forest hover:bg-lime-light hover:scale-[1.015] shadow-2xl'
                  : 'bg-[var(--color-bg-primary)]/50 backdrop-blur-sm border-[var(--color-border)] hover:scale-[1.015]'
              }`}
              style={{
                boxShadow: action.featured ? `0 15px 40px -15px ${action.glow}` : 'none'
              }}
            >
              {/* Card Hover Glow (non-featured) */}
              {!action.featured && (
                <div 
                  className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{
                    background: `radial-gradient(350px circle at 50% 50%, rgba(var(--color-lime-rgb), 0.08), transparent 70%)`
                  }}
                />
              )}

              {/* Top Row: Number and Arrow */}
              <div className="flex items-center justify-between relative z-10">
                <span className="font-serif font-black text-2xl select-none transition-colors duration-500" style={{ color: action.featured ? 'var(--color-deep-forest)' : 'var(--color-text-muted)' }}>
                  {action.num}
                </span>

                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:scale-105 group-hover:rotate-45 ${
                    action.featured
                      ? 'text-deep-forest bg-[var(--color-deep-forest)]/5 border-[var(--color-deep-forest)]'
                      : 'text-[var(--color-text-muted)] bg-[var(--color-surface)]/5 border-[var(--color-border)] group-hover:border-lime/30 group-hover:text-lime'
                  }`}
                >
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </div>
              </div>

              {/* Bottom: Heading & Text */}
              <div className="relative z-10 mt-16">
                <h3
                  className={`font-sans font-black tracking-tight mb-3 transition-colors duration-300 ${
                    action.featured ? 'text-deep-forest' : 'text-[var(--color-text-primary)] group-hover:text-lime'
                  }`}
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 1.8rem)' }}
                >
                  {action.cta}
                </h3>
                
                <p
                  className={`font-sans text-xs md:text-sm leading-relaxed transition-colors duration-300 ${
                    action.featured ? 'text-deep-forest' : 'text-[var(--color-text-muted)] group-hover:text-[var(--color-text-primary)]'
                  }`}
                >
                  {action.desc}
                </p>

                <div 
                  className={`inline-flex items-center gap-1.5 mt-5 text-[10px] font-black tracking-widest uppercase transition-colors duration-300 ${
                    action.featured ? 'text-deep-forest' : 'text-lime'
                  }`}
                >
                  {action.label} <span>→</span>
                </div>
              </div>

              {/* Decorative line indicators */}
              <div 
                className={`absolute left-8 bottom-0 right-8 h-[2px] transition-opacity duration-500 opacity-0 group-hover:opacity-100 ${
                  action.featured ? 'bg-[var(--color-deep-forest)]/20' : 'bg-gradient-to-r from-transparent via-lime to-transparent'
                }`} 
              />
            </motion.a>
          ))}
        </div>
      </div>

      {/* ── Decorative closing quote ──────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 lg:px-24 py-16 md:py-24 border-t border-[var(--color-border)] text-center">
        
        {/* Decorative Quote Mark */}
        <div
          className="font-serif text-lime/5 leading-none select-none absolute top-4 left-1/2 -translate-x-1/2"
          style={{ fontSize: 'clamp(6rem, 16vw, 11rem)' }}
          aria-hidden
        >
          “
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-serif italic font-normal leading-[1.6] mx-auto relative z-10 max-w-3xl"
          style={{ color: 'var(--color-text-primary)', fontSize: 'clamp(1.1rem, 2.5vw, 1.8rem)' }}
        >
          Education is not a privilege. It is the{' '}
          <span className="text-lime not-italic font-sans font-black tracking-wide uppercase text-[15px] md:text-[19px] ml-1">
            foundation
          </span>{' '}
          upon which every child&apos;s future is built.
        </motion.p>
      </div>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="relative z-10 w-full border-t border-[var(--color-border)] py-8 md:py-10 bg-[var(--color-bg-primary)]/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full overflow-hidden ring-1 ring-lime/25 flex-shrink-0">
              <Image
                src="/images/logo.png" alt="Yemsigana logo"
                width={40} height={40}
                className="w-full h-auto object-cover"
                style={{ objectPosition: 'center 18%', transform: 'scale(1.15)', transformOrigin: 'center 30%' }}
              />
            </div>
            <div>
              <p className="font-sans text-[11px] font-bold tracking-wide" style={{ color: 'var(--logo-contrast)' }}>የምስጋና በጎ አድራጎት ድርጅት</p>
              <p className="font-sans text-[8px] tracking-[0.2em] uppercase mt-0.5" style={{ color: 'var(--logo-contrast)' }}>Yemsigana Charity</p>
            </div>
          </div>

          {/* Copyrights and links */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-sans text-[10px] tracking-wider font-semibold" style={{ color: 'var(--color-text-muted)' }}>
            <a href="#" className="hover:text-lime transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-lime transition-colors duration-300">Terms of Service</a>
            <span>© 2026 Yemsigana Charity. All rights reserved.</span>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Facebook, label: 'Facebook' },
              { Icon: Twitter, label: 'Twitter' },
              { Icon: Instagram, label: 'Instagram' }
            ].map(({ Icon, label }, i) => (
              <a
                key={i} href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-lime)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg-primary)] outline-none"
                style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }}
              >
                <Icon size={13} strokeWidth={2} aria-hidden="true" />
              </a>
            ))}
          </div>

        </div>
      </footer>

    </section>
  );
}
