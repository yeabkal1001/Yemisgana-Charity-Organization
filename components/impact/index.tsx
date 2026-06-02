"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { number: 25, label: 'Schools Built' },
  { number: 7000, label: 'Students Reached' },
  { number: 50, label: 'Classrooms' },
  { number: 30, label: 'Communities' },
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

  return <span ref={ref}>{target >= 1000 ? count.toLocaleString() : count}+</span>;
}

export function Impact() {
  return (
    <section id="impact" className="section bg-color-neutral-50">
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
            <span className="badge bg-color-accent-surface text-color-accent-primary">Our Impact</span>
          </motion.div>
          <h2 className="text-display text-color-text-primary mb-6">
            Real Change, Real Impact
          </h2>
          <p className="text-lg text-color-text-secondary leading-relaxed">
            Since 2010, we&apos;ve worked in collaboration with communities to build educational accessibility across the Gurage Zone.
          </p>
        </motion.div>

        {/* Impact Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="relative w-full h-96 md:h-[520px] rounded-2xl overflow-hidden shadow-lg group mb-16 md:mb-24"
        >
          <Image
            src="/images/third-hero-bg.png"
            alt="Impact in communities"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-12 md:py-16 border-t border-b border-color-border-light"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="flex flex-col gap-2 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.12,
                duration: 0.6,

              }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="text-4xl md:text-5xl font-serif font-normal text-color-accent-primary">
                <CountUp target={stat.number} />
              </span>
              <span className="text-sm md:text-base text-color-text-tertiary font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-24"
        >
          {[
            {
              title: 'Safe Learning Spaces',
              desc: 'Every school we build meets international safety standards and includes clean water, sanitation, and electricity.',
            },
            {
              title: 'Inclusive Education',
              desc: 'We prioritize accessibility for all students, including those with disabilities, ensuring nobody is left behind.',
            },
            {
              title: 'Teacher Empowerment',
              desc: 'We invest in teacher training and professional development to ensure quality instruction in every classroom.',
            },
          ].map((highlight, idx) => (
            <motion.div
              key={highlight.title}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.1,
                duration: 0.6,
              }}
              viewport={{ once: true, margin: '-100px' }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-lg font-serif font-normal text-color-text-primary mb-3">
                {highlight.title}
              </h3>
              <p className="text-sm text-color-text-secondary leading-relaxed">
                {highlight.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
