"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Zap, Award, Globe } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Integrity', desc: 'Honesty and transparency in every action.', color: 'from-red-500 to-coral' },
  { icon: Users, title: 'Community', desc: 'Working together with local partners.', color: 'from-blue-500 to-cyan-500' },
  { icon: Target, title: 'Impact', desc: 'Measurable change that lasts generations.', color: 'from-emerald-500 to-teal-500' },
  { icon: Globe, title: 'Sustainability', desc: 'Long-term solutions for growth.', color: 'from-purple-500 to-pink-500' },
];

const timeline = [
  { year: '2018', milestone: 'Foundation', description: 'Started with a vision to transform education in Ethiopia' },
  { year: '2020', milestone: '5 Schools', description: 'First five schools built, reaching 500+ students' },
  { year: '2022', milestone: '15 Schools', description: 'Expansion across Gurage Zone, 3,000+ students' },
  { year: '2024', milestone: '25+ Schools', description: 'Serving 7,000+ students, building momentum' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function About() {
  return (
    <section id="about" className="section bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-ocean opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-sunset opacity-5 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <motion.div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-500 to-gold rounded-full" />
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-orange-50 border border-emerald-200">
              <Award size={16} className="text-emerald-600" />
              <span className="text-sm font-semibold text-color-text-dark">Our Story</span>
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 text-color-text-dark">
            A Journey of <span className="gradient-text">Impact and Growth</span>
          </h2>
          <p className="text-lg text-color-text-light leading-relaxed max-w-2xl">
            From a bold vision to transform education in rural Ethiopia, Yemisgana has grown into a beacon of hope, building not just schools but futures and opportunities for thousands of young lives.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative h-96 md:h-full min-h-[450px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-xl group">
              <Image
                src="/images/hero-bg.png"
                alt="Our journey"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Stat Badge */}
              <motion.div
                className="absolute top-6 right-6 bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-lg flex items-center gap-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="text-gold" size={20} />
                <div>
                  <p className="text-lg font-bold text-color-text-dark">6+</p>
                  <p className="text-xs text-color-text-light">Years Strong</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-6"
          >
            {timeline.map((item, idx) => (
              <motion.div
                key={item.year}
                variants={itemVariants}
                className="group relative pl-12 pb-6 border-l-2 border-gradient-to-b border-emerald-200 hover:border-emerald-500 transition-colors"
              >
                {/* Timeline dot */}
                <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-gradient-emerald-gold shadow-md group-hover:scale-125 transition-transform" />
                
                {/* Content */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold bg-gradient-emerald-gold bg-clip-text text-transparent">
                      {item.year}
                    </span>
                    <span className="text-lg font-bold text-color-text-dark">
                      {item.milestone}
                    </span>
                  </div>
                  <p className="text-color-text-light text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="mt-24 pt-20 border-t border-gray-200"
        >
          <motion.h3
            variants={itemVariants}
            className="text-3xl md:text-4xl font-serif font-normal mb-12 text-color-text-dark"
          >
            Our Core <span className="gradient-text">Values</span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  className="group card hover-lift"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Icon Background */}
                  <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${value.color} p-3 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={26} className="text-white w-full h-full" />
                  </div>

                  {/* Content */}
                  <h4 className="text-lg font-bold text-color-text-dark mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-color-text-light leading-relaxed">
                    {value.desc}
                  </p>

                  {/* Gradient Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
