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
      setScrolled(y > 20);

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
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm border-b border-gray-200/50 shadow-sm'
          : 'bg-white border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0 bg-teal/10">
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
              <p className="text-xs font-bold text-gray-600 leading-tight">Yemisgana</p>
              <p className="text-[10px] text-gray-400">Education</p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-500 transition-colors duration-200 ${
                    isActive 
                      ? 'text-teal font-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="#get-involved"
              className="hidden sm:flex btn-primary text-sm px-4 py-2 h-10 items-center gap-2"
            >
              Donate
              <ArrowRight size={14} />
            </a>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9500] bg-white"
          >
            {/* Menu header */}
            <div className="px-4 py-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-lg overflow-hidden bg-teal/10">
                  <Image
                    src="/images/logo.png"
                    alt="Yemisgana"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-600">Yemisgana</p>
                  <p className="text-[10px] text-gray-400">Education</p>
                </div>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu links */}
            <div className="flex flex-col py-6">
              {[...navLinks, { label: 'Get Involved', href: '#get-involved' }].map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-base font-500 text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="p-4 border-t border-gray-200">
              <a
                href="#get-involved"
                onClick={() => setMenuOpen(false)}
                className="btn-primary w-full justify-center flex gap-2"
              >
                Donate Now
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add nav spacing */}
      <div className="h-16" />
    </>
  );
}
