"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="relative w-full bg-white overflow-hidden pt-24 pb-16 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Accent line */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-0.5 bg-teal rounded-full" />
              <span className="text-teal font-600 text-sm uppercase tracking-wide">Our Mission</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-navy">
              Building Schools,<br />
              <span className="text-teal">Changing Lives</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Yemisgana Charity Organization builds safe, modern schools across Ethiopia's Gurage Zone, creating inspiring learning environments where every child can thrive and reach their potential.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-6 mt-4">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-teal">25+</span>
                <span className="text-sm text-gray-600 mt-1">Schools Built</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-teal">5K+</span>
                <span className="text-sm text-gray-600 mt-1">Students Reached</span>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black text-teal">100%</span>
                <span className="text-sm text-gray-600 mt-1">Impact Focused</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-4">
              <a href="#get-involved" className="btn-primary flex items-center justify-center gap-2">
                Start Donating
                <ArrowRight size={16} />
              </a>
              <a href="#about" className="btn-secondary flex items-center justify-center gap-2">
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-96 md:h-full min-h-96 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/hero-bg.png"
              alt="School building in Ethiopia"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
