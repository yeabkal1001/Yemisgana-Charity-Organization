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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
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

export function Goals() {
  return (
    <section id="goals" className="section bg-color-white">
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
            <span className="badge bg-color-accent-surface text-color-accent-primary">Our Vision</span>
          </motion.div>
          <h2 className="text-display text-color-text-primary mb-6">
            Five Strategic Goals
          </h2>
          <p className="text-lg text-color-text-secondary leading-relaxed">
            Everything we do is guided by these core objectives that drive meaningful, lasting change.
          </p>
        </motion.div>

        {/* Goals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {goals.map((goal, idx) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.title}
                variants={itemVariants}
                className="card group h-full relative overflow-hidden"
                whileHover={{ y: -6 }}
              >
                {/* Background accent */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-color-accent-surface rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  style={{ filter: 'blur(40px)' }}
                />

                <div className="flex flex-col h-full gap-4 relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-color-accent-surface flex items-center justify-center text-color-accent-primary transition-all duration-300"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                  >
                    <Icon size={24} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-normal text-color-text-primary">
                    {goal.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-color-text-secondary leading-relaxed flex-1">
                    {goal.desc}
                  </p>

                  {/* Bottom accent line */}
                  <motion.div
                    className="h-0.5 bg-color-accent-primary rounded-full w-0 group-hover:w-8 transition-all duration-300"
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
