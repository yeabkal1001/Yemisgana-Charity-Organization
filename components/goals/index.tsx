"use client";

import { GraduationCap, Home, Users, BookOpen, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const goals = [
  {
    icon: GraduationCap,
    title: 'Expand Access',
    desc: 'Build and renovate schools in underserved communities across the Gurage Zone, ensuring more children have access to quality education.',
  },
  {
    icon: Home,
    title: 'Improve Learning Environments',
    desc: 'Create safe, modern, and inspiring spaces where students can thrive academically and be proud of their schools.',
  },
  {
    icon: Users,
    title: 'Community Involvement',
    desc: 'Engage local communities in every project, fostering ownership and ensuring long-term sustainability.',
  },
  {
    icon: BookOpen,
    title: 'Enhance Resources',
    desc: 'Provide schools with books, computers, and learning materials to support student success and future readiness.',
  },
  {
    icon: Heart,
    title: 'Promote Equality',
    desc: 'Ensure girls and boys have equal opportunities to learn, grow, and succeed in safe, welcoming environments.',
  },
];

export function Goals() {
  return (
    <section id="goals" className="w-full bg-white py-24 md:py-32">
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
            <span className="text-teal font-600 text-sm uppercase tracking-wide">Our Vision</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
            Five Strategic Goals
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything we do is guided by these core objectives that drive meaningful, lasting change.
          </p>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, idx) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center text-teal mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-navy mb-3 text-lg">{goal.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-1">{goal.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
