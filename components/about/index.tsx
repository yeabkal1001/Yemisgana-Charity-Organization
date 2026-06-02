"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Users, Target, Leaf } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Integrity', desc: 'Honesty and transparency in every action.' },
  { icon: Users, title: 'Community', desc: 'Working together with local partners.' },
  { icon: Target, title: 'Impact', desc: 'Measurable change that lasts generations.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Long-term solutions for growth.' },
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
    transition: {
      duration: 0.6,
    },
  },
};

export function About() {
  return (
    <section id="about" className="section bg-color-white">
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
            <span className="badge bg-color-accent-surface text-color-accent-primary">Our Story</span>
          </motion.div>
          <h2 className="text-display text-color-text-primary mb-6">
            Transforming Education in Ethiopia
          </h2>
          <p className="text-lg text-color-text-secondary leading-relaxed">
            Since 2010, Yemisgana has been dedicated to building safe, modern schools in the Gurage Zone. We believe that every child deserves access to quality education in an inspiring learning environment.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20 md:mb-32 items-center">
          {/* Left: Image with animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-lg group"
          >
            <Image
              src="/images/second-hero-bg.png"
              alt="Our impact in communities"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
          </motion.div>

          {/* Right: Content with stagger */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl md:text-4xl font-serif text-color-text-primary mb-4">
                What Drives Us
              </h3>
              <p className="text-color-text-secondary leading-relaxed">
                Education is the foundation of community development. When children have access to quality schools, entire communities thrive. Our approach combines construction expertise with educational partnership to create lasting change.
              </p>
            </motion.div>

            {/* Values Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 pt-4">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    className="card p-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.4 + idx * 0.08,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-color-accent-surface flex items-center justify-center text-color-accent-primary mb-3">
                      <Icon size={20} />
                    </div>
                    <h4 className="font-semibold text-color-text-primary mb-1 text-sm">
                      {value.title}
                    </h4>
                    <p className="text-xs text-color-text-tertiary">
                      {value.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-12 border-t border-b border-color-border-light"
        >
          {[
            { number: 25, label: 'Schools Built' },
            { number: 7000, label: 'Students Reached' },
            { number: 2010, label: 'Year Founded' },
            { number: 50, label: 'Staff & Volunteers' },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.5,
              }}
              viewport={{ once: true }}
            >
              <span className="text-3xl md:text-4xl font-serif font-normal text-color-accent-primary">
                {stat.number}+
              </span>
              <span className="text-sm text-color-text-tertiary font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
