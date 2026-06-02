"use client";

import { motion } from 'framer-motion';
import { Users, Zap, Handshake } from 'lucide-react';

const pillars = [
  {
    icon: Users,
    title: 'Community Engagement',
    desc: 'We work hand-in-hand with local leaders, parents, teachers, and students—ensuring every project reflects community needs and vision.',
  },
  {
    icon: Zap,
    title: 'Long-term Sustainability',
    desc: 'Our construction methods focus on durability and local resources, ensuring schools serve generations to come.',
  },
  {
    icon: Handshake,
    title: 'Strategic Partnerships',
    desc: 'Collaborating with government, NGOs, and sponsors to build a support network that amplifies impact.',
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
    <section id="approach" className="section bg-color-neutral-50">
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
            <span className="badge bg-color-accent-surface text-color-accent-primary">How We Work</span>
          </motion.div>
          <h2 className="text-display text-color-text-primary mb-6">
            Our Approach to Change
          </h2>
          <p className="text-lg text-color-text-secondary leading-relaxed">
            We target resources where need is greatest, working within communities to understand their vision and build sustainable solutions.
          </p>
        </motion.div>

        {/* Three Pillar Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={itemVariants}
                className="card group h-full"
                whileHover={{ y: -4 }}
              >
                <div className="flex flex-col h-full gap-4">
                  {/* Icon Container */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-color-accent-surface flex items-center justify-center text-color-accent-primary transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-normal text-color-text-primary mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-color-text-secondary leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Visual Accent Line */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-color-accent-primary to-color-accent-light rounded-full w-0 group-hover:w-full"
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
