"use client";

import { GraduationCap, Home, Users, BookOpen, Heart, Target } from 'lucide-react';
import { motion } from 'framer-motion';

const goals = [
  {
    icon: GraduationCap,
    title: 'Expand Access',
    desc: 'Build and renovate schools in underserved communities across the Gurage Zone, ensuring every child has access to quality education.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Home,
    title: 'Improve Environments',
    desc: 'Create safe, modern, and inspiring spaces where students can thrive academically and feel proud of their schools.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Users,
    title: 'Community Ownership',
    desc: 'Engage local communities in every project, fostering deep ownership and ensuring sustainable, generational impact.',
    color: 'from-gold to-orange-500',
  },
  {
    icon: BookOpen,
    title: 'Enhance Resources',
    desc: 'Provide schools with books, computers, and learning materials to equip students for success in a digital world.',
    color: 'from-coral to-red-500',
  },
  {
    icon: Heart,
    title: 'Promote Equality',
    desc: 'Ensure girls and boys have equal opportunities to learn, grow, and lead in safe, welcoming environments.',
    color: 'from-purple-500 to-pink-500',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Goals() {
  return (
    <section id="goals" className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-sunset opacity-5 blur-3xl pointer-events-none" />

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
              <Target size={16} className="text-emerald-600" />
              <span className="text-sm font-semibold text-color-text-dark">Our Goals</span>
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-gold to-emerald-500 rounded-full" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 text-color-text-dark">
            Strategic <span className="gradient-text">Objectives</span>
          </h2>
          <p className="text-lg text-color-text-light leading-relaxed max-w-2xl mx-auto">
            Five ambitious goals that guide our mission to transform education and unlock unlimited potential across Ethiopia.
          </p>
        </motion.div>

        {/* Goals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {goals.map((goal, idx) => {
            const Icon = goal.icon;
            return (
              <motion.div
                key={goal.title}
                variants={itemVariants}
                className="group"
              >
                <div className="relative bg-white rounded-xl p-6 border border-gray-100 hover:border-emerald-200 transition-all duration-300 h-full flex flex-col overflow-hidden hover:shadow-lg hover:-translate-y-1">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${goal.color} p-2.5 mb-4 group-hover:scale-110 transition-transform relative z-10 flex-shrink-0`}>
                    <Icon size={20} className="text-white w-full h-full" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-color-text-dark mb-2 relative z-10 line-clamp-2">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-color-text-light leading-relaxed flex-grow relative z-10 line-clamp-3">
                    {goal.desc}
                  </p>

                  {/* Bottom accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${goal.color} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
