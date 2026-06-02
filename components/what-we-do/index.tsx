"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Hammer, Brush, BookOpen } from 'lucide-react';

const pillars = [
  {
    icon: Hammer,
    title: 'School Construction',
    desc: 'We build completely new schools in underserved communities—fully equipped learning spaces designed for modern education and built to last generations.',
    image: '/images/second-hero-bg.png',
  },
  {
    icon: Brush,
    title: 'Renovation & Repair',
    desc: 'Transforming existing structures into safe, inspiring spaces. We upgrade infrastructure, repair damage, and modernize facilities.',
    image: '/images/third-hero-bg.png',
  },
  {
    icon: BookOpen,
    title: 'Educational Resources',
    desc: 'Beyond buildings—libraries, computers, books, and learning materials that empower students and teachers.',
    image: '/images/hero-bg.png',
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section bg-color-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-24 max-w-2xl"
        >
          <motion.div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-color-accent-primary rounded-full" />
            <span className="badge bg-color-accent-surface text-color-accent-primary">What We Do</span>
          </motion.div>
          <h2 className="text-display text-color-text-primary mb-6">
            Three Pillars of Impact
          </h2>
          <p className="text-lg text-color-text-secondary leading-relaxed">
            We approach education holistically—building new schools, upgrading existing facilities, and providing resources that transform learning.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,

                }}
                viewport={{ once: true, margin: '-100px' }}
                className="group relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                whileHover={{ y: -8 }}
              >
                {/* Background Image */}
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-color-accent-surface/20 flex items-center justify-center text-white mb-4 transition-all duration-300 group-hover:bg-color-accent-primary group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon size={24} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-serif font-normal text-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed line-clamp-2">
                    {pillar.desc}
                  </p>

                  {/* Arrow indicator */}
                  <motion.div
                    className="mt-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
