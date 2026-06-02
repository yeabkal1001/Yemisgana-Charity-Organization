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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);

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
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-base border-b border-color-border-light'
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-3 group flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-lg overflow-hidden bg-accent-surface flex items-center justify-center">
              <Image
                src="/images/logo.png"
                alt="Yemisgana"
                width={40}
                height={40}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-color-text-primary leading-tight">Yemisgana</p>
              <p className="text-xs text-color-text-tertiary">Education Initiative</p>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.href;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className={`text-sm font-medium transition-colors duration-300 relative group ${
                    isActive
                      ? 'text-color-accent-primary'
                      : 'text-color-text-secondary hover:text-color-text-primary'
                  }`}
                >
                  {link.label}
                  <motion.div
                    className="absolute bottom-[-6px] left-0 h-0.5 bg-color-accent-primary"
                    initial={{ width: 0 }}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-[-6px] left-0 h-0.5 bg-color-accent-primary opacity-0 group-hover:opacity-100"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <motion.a
              href="#get-involved"
              className="hidden sm:block btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-color-neutral-100 text-color-text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm z-50 bg-white shadow-xl"
          >
            {/* Menu Header */}
            <div className="p-6 border-b border-color-border-light flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent-surface flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Yemisgana"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-color-text-primary">Yemisgana</p>
                  <p className="text-xs text-color-text-tertiary">Education</p>
                </div>
              </div>
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-color-neutral-100"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <X size={24} className="text-color-text-primary" />
              </motion.button>
            </div>

            {/* Menu Links */}
            <nav className="px-6 py-8 space-y-2">
              {[...navLinks, { label: 'Get Involved', href: '#get-involved' }].map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.08, type: 'spring', damping: 20 }}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-color-text-secondary hover:bg-color-neutral-100 hover:text-color-accent-primary transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-color-border-light bg-white">
              <motion.a
                href="#get-involved"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Donate Now
                <ArrowRight size={16} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Spacing */}
      <div className="h-16" />
    </>
  );
}
