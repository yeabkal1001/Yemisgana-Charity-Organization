"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
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

export function Hero() {
  return (
    <section id="hero" className="relative w-full bg-white overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-48 lg:pb-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 w-fit">
              <div className="w-8 h-0.5 bg-color-accent-primary rounded-full" />
              <span className="badge text-color-accent-primary bg-color-accent-surface">Our Mission</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight text-color-text-primary tracking-tight"
            >
              Building Schools,
              <br />
              <span className="text-color-accent-primary">Changing Lives</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-color-text-secondary leading-relaxed max-w-2xl"
            >
              Yemisgana Charity Organization builds safe, modern schools across Ethiopia&apos;s Gurage Zone, creating inspiring learning environments where every child can thrive and reach their full potential.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 py-8 border-y border-color-border-light"
            >
              {[
                { value: '25+', label: 'Schools Built' },
                { value: '7K+', label: 'Students Impacted' },
                { value: '100%', label: 'Mission Focused' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.6 + idx * 0.1,
                    duration: 0.5,
                  }}
                >
                  <span className="text-3xl md:text-4xl font-serif font-normal text-color-accent-primary">
                    {stat.value}
                  </span>
                  <span className="text-sm text-color-text-tertiary font-medium">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#get-involved"
                className="btn-primary btn-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Supporting
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#about"
                className="btn-secondary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn Our Story
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
        
            }}
            className="relative h-96 md:h-full min-h-[500px] rounded-2xl overflow-hidden shadow-xl group"
          >
            <Image
              src="/images/hero-bg.png"
              alt="School building in Ethiopia"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
            
            {/* Floating accent */}
            <motion.div
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <p className="text-sm font-medium text-color-text-primary">
                Safe, modern learning spaces
              </p>
              <p className="text-xs text-color-text-tertiary mt-1">
                in rural Ethiopia
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs text-color-text-tertiary font-medium">Scroll to explore</span>
        <ChevronDown size={20} className="text-color-accent-primary" />
      </motion.div>
    </section>
  );
}
