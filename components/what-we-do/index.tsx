"use client";

import { motion } from 'framer-motion';
import { Building, Users, Heart, Lightbulb, BookOpen, Globe } from 'lucide-react';

const services = [
  {
    icon: Building,
    title: 'School Infrastructure',
    description: 'Constructing modern, safe, and sustainable educational facilities with electricity, water, and sanitation systems.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BookOpen,
    title: 'Educational Resources',
    description: 'Providing textbooks, learning materials, technology, and equipment to enhance the teaching and learning experience.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Users,
    title: 'Teacher Training',
    description: 'Offering professional development programs to empower educators with modern pedagogical methods and skills.',
    color: 'from-gold to-orange-500',
  },
  {
    icon: Heart,
    title: 'Wellness Programs',
    description: 'Supporting student health, nutrition, and mental wellness through comprehensive school health initiatives.',
    color: 'from-coral to-red-500',
  },
  {
    icon: Lightbulb,
    title: 'Skills Development',
    description: 'Teaching practical skills, technology, and entrepreneurship to prepare students for the modern economy.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    title: 'Community Engagement',
    description: 'Building partnerships with local communities to ensure sustainable, locally-driven educational transformation.',
    color: 'from-indigo-500 to-blue-500',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="section bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-ocean opacity-5 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16 md:mb-24 max-w-3xl mx-auto"
        >
          <motion.div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-gold rounded-full" />
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-orange-50 border border-emerald-200">
              <Lightbulb size={16} className="text-emerald-600" />
              <span className="text-sm font-semibold text-color-text-dark">What We Do</span>
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-gold to-emerald-500 rounded-full" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 text-color-text-dark">
            Comprehensive <span className="gradient-text">Education Solutions</span>
          </h2>
          <p className="text-lg text-color-text-light leading-relaxed max-w-2xl mx-auto">
            We don&apos;t just build schools—we create complete educational ecosystems that transform communities and unlock human potential.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card */}
                <div className="relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                    <Icon size={28} className="text-white w-full h-full" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-color-text-dark mb-3 relative z-10">
                    {service.title}
                  </h3>
                  <p className="text-color-text-light text-sm leading-relaxed relative z-10 flex-grow">
                    {service.description}
                  </p>

                  {/* Gradient Border */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-emerald-600 font-semibold text-sm relative z-10 group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
