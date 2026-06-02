"use client";

import { motion } from 'framer-motion';
import { Users, Zap, Handshake, CheckCircle } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Community-First',
    desc: 'We work hand-in-hand with local leaders, parents, teachers—ensuring every project reflects authentic community needs and vision.',
    number: '01',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Zap,
    title: 'Sustainable Design',
    desc: 'Our construction methods focus on durability, local resources, and environmental responsibility—built to serve generations.',
    number: '02',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    desc: 'Collaborating with government, NGOs, and sponsors to build networks that amplify impact and ensure long-term success.',
    number: '03',
    color: 'from-gold to-orange-500',
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Approach() {
  return (
    <section id="approach" className="section bg-white relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-ocean opacity-5 blur-3xl pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
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
              <CheckCircle size={16} className="text-emerald-600" />
              <span className="text-sm font-semibold text-color-text-dark">Our Approach</span>
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 text-color-text-dark">
            How We <span className="gradient-text">Create Impact</span>
          </h2>
          <p className="text-lg text-color-text-light leading-relaxed max-w-2xl">
            Three core pillars guide every decision and action we take to ensure meaningful, lasting transformation in every community we serve.
          </p>
        </motion.div>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-emerald-300 transition-all duration-300 h-full flex flex-col overflow-hidden">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center text-4xl font-bold text-gray-200 group-hover:text-emerald-200 transition-colors">
                    {pillar.number}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pillar.color} p-3 mb-6 group-hover:scale-110 transition-transform relative z-10`}>
                    <Icon size={24} className="text-white w-full h-full" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-color-text-dark mb-3 relative z-10">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-color-text-light leading-relaxed flex-grow relative z-10">
                    {pillar.desc}
                  </p>

                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
