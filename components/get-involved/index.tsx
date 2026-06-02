"use client";

import { motion } from 'framer-motion';
import { Heart, Users, Share2, ArrowRight } from 'lucide-react';

const actions = [
  {
    icon: Heart,
    title: 'Donate',
    desc: 'Every contribution goes directly to building and renovating schools. Your gift builds futures—one brick at a time.',
    cta: 'Start Donating',
    href: '#',
    featured: true,
  },
  {
    icon: Users,
    title: 'Volunteer',
    desc: 'Join our team on the ground or remotely. We welcome skills, time, and passion in equal measure.',
    cta: 'Get Involved',
    href: '#',
    featured: false,
  },
  {
    icon: Share2,
    title: 'Spread the Word',
    desc: 'Share our mission with your network. Awareness builds the foundation for change and community support.',
    cta: 'Share Our Mission',
    href: '#',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
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

export function GetInvolved() {
  return (
    <section id="get-involved" className="section bg-gradient-to-b from-color-neutral-900 to-color-neutral-900 text-color-text-inverse relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-color-accent-primary/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-color-accent-primary/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-16 md:mb-24 max-w-2xl"
        >
          <motion.div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 bg-color-accent-light rounded-full" />
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-color-accent-surface/20 text-color-accent-light border border-color-accent-light/20">
              Take Action
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-normal leading-tight text-color-text-inverse mb-6">
            Join the Movement
          </h2>
          <p className="text-lg text-color-neutral-400 leading-relaxed">
            Together, we can transform education across the Gurage Zone. Whether through donations, volunteering, or advocacy, there&apos;s a way for you to make a difference.
          </p>
        </motion.div>

        {/* Action Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {actions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <motion.a
                key={action.title}
                href={action.href}
                variants={itemVariants}
                className={`group relative rounded-xl p-8 flex flex-col gap-6 transition-all duration-300 cursor-pointer overflow-hidden ${
                  action.featured
                    ? 'bg-color-accent-primary text-color-text-primary border border-color-accent-light/50 hover:shadow-xl hover:shadow-color-accent-primary/30'
                    : 'bg-color-white/10 backdrop-blur-sm border border-color-white/20 text-color-text-inverse hover:bg-color-white/15 hover:border-color-accent-light/50'
                }`}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-color-accent-light to-color-accent-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={false}
                />

                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    action.featured
                      ? 'bg-color-text-primary/10 text-color-accent-primary'
                      : 'bg-color-white/20 text-color-accent-light group-hover:bg-color-accent-primary/30'
                  }`}
                  whileHover={{ rotate: 8, scale: 1.1 }}
                >
                  <Icon size={28} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className={`text-2xl font-serif font-normal mb-3 ${
                    action.featured ? 'text-color-text-primary' : 'text-color-text-inverse'
                  }`}>
                    {action.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
                    action.featured ? 'text-color-text-secondary' : 'text-color-neutral-400'
                  }`}>
                    {action.desc}
                  </p>
                </div>

                {/* CTA */}
                <motion.div
                  className="flex items-center gap-2 pt-4 relative z-10"
                  whileHover={{ x: 4 }}
                >
                  <span className={`font-semibold text-sm ${
                    action.featured ? 'text-color-text-primary' : 'text-color-text-inverse'
                  }`}>
                    {action.cta}
                  </span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </motion.div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-color-neutral-400 mb-6">
            Have questions? We&apos;d love to hear from you.
          </p>
          <motion.a
            href="mailto:info@yemisgana.org"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-color-white/20 text-color-text-inverse hover:border-color-accent-light hover:text-color-accent-light transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
