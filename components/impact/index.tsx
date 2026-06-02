"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Zap } from 'lucide-react';

const stats = [
  { number: 25, label: 'Schools Built', icon: Award, accent: 'from-emerald-500 to-cyan-500' },
  { number: 7000, label: 'Students Reached', icon: Users, accent: 'from-blue-500 to-purple-500' },
  { number: 500, label: 'Teachers Trained', icon: TrendingUp, accent: 'from-gold to-orange-500' },
  { number: 30, label: 'Communities', icon: Zap, accent: 'from-coral to-pink-500' },
];

const progressItems = [
  { label: 'Educational Access', value: 92 },
  { label: 'Infrastructure Quality', value: 88 },
  { label: 'Teacher Development', value: 85 },
  { label: 'Community Engagement', value: 94 },
];

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{target >= 1000 ? count.toLocaleString() : count}</span>;
}

export function Impact() {
  return (
    <section id="impact" className="section bg-gradient-nocturne text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-emerald-gold opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-ocean opacity-5 blur-3xl pointer-events-none" />

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
            <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-gold rounded-full" />
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-gold/20 border border-emerald-400/30">
              <TrendingUp size={16} className="text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-300">Real Change, Real Impact</span>
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6">
            Transforming Lives <br />
            <span className="bg-gradient-emerald-gold bg-clip-text text-transparent">by the Numbers</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
            Our impact is measured not just in schools built, but in lives changed, potential unleashed, and futures transformed across Ethiopia&apos;s Gurage Zone.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative group"
              >
                {/* Card */}
                <div className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors`}>
                  {/* Icon Background */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.accent} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} className="text-white w-full h-full" />
                  </div>

                  {/* Number */}
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl md:text-5xl font-bold text-white">
                      <CountUp target={stat.number} />
                    </span>
                    <span className="text-xl font-bold text-emerald-400">+</span>
                  </div>

                  {/* Label */}
                  <p className="text-sm font-medium text-gray-300">
                    {stat.label}
                  </p>

                  {/* Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.accent} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Impact Story with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative h-96 md:h-full min-h-[400px]"
          >
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/hero-bg.png"
                alt="Impact story"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          {/* Right Progress Bars */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col gap-8"
          >
            <h3 className="text-3xl font-serif font-normal">
              Our <span className="bg-gradient-emerald-gold bg-clip-text text-transparent">Commitment</span>
            </h3>

            {progressItems.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <label className="text-lg font-semibold text-white">
                    {item.label}
                  </label>
                  <span className="text-2xl font-bold bg-gradient-emerald-gold bg-clip-text text-transparent">
                    {item.value}%
                  </span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-emerald-gold rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    transition={{ duration: 1.5, delay: idx * 0.1 }}
                    viewport={{ once: true, margin: '-100px' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-serif font-normal mb-8">
            Key <span className="bg-gradient-emerald-gold bg-clip-text text-transparent">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: '🏫', text: '25+ educational institutions constructed with modern facilities' },
              { emoji: '👨‍🎓', text: '500+ local teachers trained in modern teaching methodologies' },
              { emoji: '📚', text: '7,000+ students with access to quality education' },
            ].map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-100px' }}
                className="flex gap-4"
              >
                <span className="text-3xl flex-shrink-0">{achievement.emoji}</span>
                <p className="text-gray-300 leading-relaxed">
                  {achievement.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
