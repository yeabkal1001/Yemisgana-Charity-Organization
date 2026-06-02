"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Heart, Users, Target, Leaf } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Integrity', desc: 'Honesty and transparency in every action.' },
  { icon: Users, title: 'Community', desc: 'Working together with local partners.' },
  { icon: Target, title: 'Impact', desc: 'Measurable change that lasts generations.' },
  { icon: Leaf, title: 'Sustainability', desc: 'Long-term solutions for growth.' },
];

const stats = [
  { number: 25, label: 'Schools Built' },
  { number: 5000, label: 'Students Reached' },
  { number: 2010, label: 'Year Founded' },
  { number: 50, label: 'Staff & Volunteers' },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" ref={containerRef} className="w-full bg-gray-50 py-24 md:py-32">
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
            <span className="text-teal font-600 text-sm uppercase tracking-wide">Our Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
            Transforming Education in Ethiopia
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Since 2010, Yemisgana has been dedicated to building safe, modern schools in the Gurage Zone. We believe that every child deserves access to quality education in an inspiring learning environment.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 md:mb-24 items-center">
          
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/second-hero-bg.png"
              alt="Our impact in communities"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-3xl font-black text-navy mb-4">What Drives Us</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Education is the foundation of community development. When children have access to quality schools, entire communities thrive. Our approach combines construction expertise with educational partnership to create lasting change.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Every school we build is designed with children and teachers in mind, equipped with resources, and managed to serve generations of learners.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h3 className="text-3xl font-black text-navy mb-10">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
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
                      <h4 className="font-bold text-navy mb-2">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 md:p-12 border border-gray-200"
        >
          <h3 className="text-3xl font-black text-navy mb-12">By The Numbers</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black text-teal mb-2">
                  {stat.number.toLocaleString()}+
                </div>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
