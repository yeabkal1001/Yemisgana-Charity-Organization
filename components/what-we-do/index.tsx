"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Hammer, Brush, BookOpen, ArrowRight } from 'lucide-react';

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
    <section id="what-we-do" className="w-full bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-teal rounded-full" />
            <span className="text-teal font-600 text-sm uppercase tracking-wide">What We Do</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
            Three Pillars of Impact
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We approach education holistically—building new schools, upgrading existing facilities, and providing resources that transform learning.
          </p>
        </motion.div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-80 md:h-96 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Background Image */}
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-teal/20 flex items-center justify-center text-white mb-4 group-hover:bg-teal group-hover:text-white transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-200 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
