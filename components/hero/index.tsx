"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 },
  },
};

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-20 pb-20 md:pt-32 md:pb-32 bg-white">
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-gradient-emerald-gold opacity-10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{ top: '-10%', right: '-5%' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full bg-gradient-sunset opacity-5 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          style={{ bottom: '0%', left: '-5%' }}
        />
      </div>

      <div className="container px-4 md:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-8"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex w-fit">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-50 to-orange-50 border border-emerald-200">
                <Zap size={18} className="text-gold" />
                <span className="text-sm font-semibold bg-gradient-emerald-gold bg-clip-text text-transparent">
                  Changing Lives in Ethiopia
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight"
            >
              <span className="block text-color-text-dark">Building Schools,</span>
              <span className="block gradient-text mt-2">Creating Futures</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-color-text-light max-w-xl leading-relaxed"
            >
              We&apos;re constructing safe, modern schools across Ethiopia&apos;s Gurage Zone, transforming education and unlocking potential in thousands of young lives.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 py-8 border-y border-gray-200"
            >
              {[
                { number: '25+', label: 'Schools Built', accent: 'from-emerald-500 to-cyan-500' },
                { number: '7K+', label: 'Lives Changed', accent: 'from-gold to-orange-500' },
                { number: '100%', label: 'Impact Driven', accent: 'from-purple-500 to-pink-500' },
              ].map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.8 + idx * 0.1,
                    duration: 0.6,
                  }}
                >
                  <span className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent`}>
                    {stat.number}
                  </span>
                  <span className="text-xs md:text-sm font-medium text-color-text-light uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#get-involved"
                className="btn btn-primary btn-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Supporting
                <ArrowRight size={20} />
              </motion.a>
              <motion.a
                href="#about"
                className="btn btn-secondary btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn Our Story
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right - Image with Interactive Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative h-96 md:h-full min-h-[500px] lg:min-h-[600px]"
          >
            {/* Main Image */}
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/hero-bg.png"
                alt="School building in Ethiopia"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Cards */}
              <motion.div
                className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <p className="text-sm font-bold text-color-text-dark">
                  Safe Learning Spaces
                </p>
                <p className="text-xs text-color-text-light mt-1">
                  In rural Ethiopia
                </p>
              </motion.div>

              <motion.div
                className="absolute top-6 right-6 bg-gradient-emerald-gold rounded-full p-3 text-white shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity }}
              >
                <Zap size={24} />
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-emerald-gold rounded-full opacity-5 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-medium text-color-text-light">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-emerald-500 rounded-full flex items-center justify-center"
        >
          <motion.div
            className="w-1 h-2 bg-emerald-500 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
