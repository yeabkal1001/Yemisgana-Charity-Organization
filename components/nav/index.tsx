"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'Approach', href: '#approach' },
  { label: 'Goals', href: '#goals' },
  { label: 'Impact', href: '#impact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      
      const totalH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(totalH > 0 ? (y / totalH) * 100 : 0);

      // Scroll spy logic
      const scrollPosition = y + window.innerHeight / 3;
      const sections = navLinks.map(link => {
        const el = document.querySelector(link.href);
        if (!el) return null;
        return {
          id: link.href,
          top: el.getBoundingClientRect().top + y,
          bottom: el.getBoundingClientRect().bottom + y
        };
      }).filter(Boolean) as { id: string; top: number; bottom: number }[];

      const currentSection = sections.find(section => {
        return scrollPosition >= section.top && scrollPosition < section.bottom;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      } else if (y < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // initial call
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Cinematic Top Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-lime via-lime-light to-lime z-[10000] pointer-events-none transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          scrolled
            ? 'bg-deep-forest/85 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40 py-3 md:py-4'
            : 'bg-transparent py-5 md:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 lg:px-12">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-lime/30 group-hover:ring-lime/80 group-hover:scale-105 transition-all duration-500">
              <Image
                src="/images/logo.png"
                alt="Yemsigana"
                width={80} height={80}
                className="w-full h-auto object-cover"
                style={{ objectPosition: 'center 18%', transform: 'scale(1.15)', transformOrigin: 'center 30%' }}
                priority
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="text-white text-[11px] font-bold tracking-wide group-hover:text-lime-light transition-colors duration-300">
                የምስጋና በጎ አድራጎት ድርጅት
              </p>
              <p className="text-white/45 text-[8px] tracking-[0.2em] uppercase mt-0.5 group-hover:text-white/60 transition-colors duration-300">
                Yemsigana Charity
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-[13px] font-semibold tracking-wider uppercase transition-colors duration-300 py-1.5 px-0.5 group ${
                    isActive ? 'text-lime font-bold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {link.label}
                  
                  {/* Sliding active bar */}
                  {isActive ? (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-lime shadow-[0_0_8px_var(--color-lime)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white/40 group-hover:w-full transition-all duration-300" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#get-involved"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-lime text-deep-forest font-black text-[12px] uppercase tracking-wider rounded-full hover:bg-lime-light transition-all duration-300 shadow-[0_4px_20px_rgba(var(--color-lime-rgb),0.25)] hover:shadow-[0_4px_25px_rgba(var(--color-lime-rgb),0.4)]"
            >
              Donate Now <ArrowRight size={12} strokeWidth={3} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </motion.a>

            <button
              onClick={() => setMenuOpen(true)}
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:border-lime/40 hover:bg-lime/10 hover:text-lime hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile / Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9500] bg-deep-forest/98 backdrop-blur-3xl flex flex-col px-8 py-8"
          >
            {/* Header in menu */}
            <div className="flex items-center justify-between mb-16 max-w-7xl mx-auto w-full">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-1 ring-lime/30">
                  <Image
                    src="/images/logo.png"
                    alt="Yemsigana"
                    width={60} height={60}
                    className="w-full h-auto object-cover"
                    style={{ objectPosition: 'center 18%', transform: 'scale(1.15)', transformOrigin: 'center 30%' }}
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-white text-[11px] font-bold">የምስጋና በጎ አድራጎት ድርጅት</p>
                  <p className="text-white/45 text-[8px] tracking-[0.18em] uppercase mt-0.5">Yemsigana Charity</p>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-lime hover:text-lime hover:bg-lime/10 hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="Close menu"
              >
                <X size={16} />
              </button>
            </div>

            {/* Menu links */}
            <nav className="flex flex-col gap-6 flex-1 justify-center max-w-2xl mx-auto w-full pl-4">
              {[...navLinks, { label: 'Get Involved', href: '#get-involved' }].map((link, i) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`font-black tracking-tight leading-none uppercase transition-all duration-300 flex items-center gap-4 group ${
                      isActive ? 'text-lime font-black' : 'text-white/70 hover:text-lime-light'
                    }`}
                    style={{ fontSize: 'clamp(2rem, 7vw, 3.2rem)' }}
                  >
                    <span className="text-[14px] font-serif font-normal italic text-white/30 group-hover:text-lime/50 transition-colors duration-300">
                      0{i + 1}
                    </span>
                    {link.label}
                  </motion.a>
                );
              })}
            </nav>

            {/* Footer in menu */}
            <div className="pt-8 border-t border-white/5 flex items-center justify-between max-w-7xl mx-auto w-full">
              <p className="text-white/20 text-[10px] tracking-widest uppercase font-semibold">
                © 2026 Yemsigana Charity
              </p>
              <a
                href="#get-involved"
                onClick={() => setMenuOpen(false)}
                className="px-6 py-3 bg-lime text-deep-forest font-bold text-[12px] uppercase tracking-wider rounded-full hover:bg-lime-light transition-all duration-300 shadow-[0_4px_15px_rgba(var(--color-lime-rgb),0.2)]"
              >
                Donate Now →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
