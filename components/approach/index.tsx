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

export function Approach() {
  return (
    <section id="approach" className="w-full bg-gray-50 py-24 md:py-32">
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
            <span className="text-teal font-600 text-sm uppercase tracking-wide">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
            Our Approach to Change
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We target resources where need is greatest, working within communities to understand their vision and build sustainable solutions.
          </p>
        </motion.div>

        {/* Three Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0 text-teal">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-2 text-lg">{pillar.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
