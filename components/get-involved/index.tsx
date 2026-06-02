"use client";

import { motion } from 'framer-motion';
import { Heart, Users, Share2, ArrowRight, Zap } from 'lucide-react';

const actions = [
  {
    icon: Heart,
    title: 'Support Our Mission',
    desc: 'Every donation directly funds construction, resources, and programs. Your gift transforms lives—one child at a time.',
    cta: 'Donate Now',
    href: '#',
    featured: true,
    color: 'from-coral to-red-500',
  },
  {
    icon: Users,
    title: 'Volunteer Your Skills',
    desc: 'Join our movement—on the ground in Ethiopia or remotely. We need builders, teachers, designers, and passionate changemakers.',
    cta: 'Get Involved',
    href: '#',
    featured: false,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Share2,
    title: 'Amplify Our Reach',
    desc: 'Share our mission with your network. Awareness and word-of-mouth build the strongest foundation for collective change.',
    cta: 'Share Our Story',
    href: '#',
    featured: false,
    color: 'from-purple-500 to-pink-500',
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function GetInvolved() {
  return (
    <section id="get-involved" className="section bg-gradient-nocturne relative overflow-hidden text-white">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-emerald-gold opacity-5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-ocean opacity-5 blur-3xl pointer-events-none" />

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
            <div className="w-8 h-0.5 bg-gradient-to-r from-emerald-400 to-gold rounded-full" />
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-gold/20 border border-emerald-400/30">
              <Zap size={16} className="text-emerald-300" />
              <span className="text-sm font-semibold text-emerald-300">Join the Movement</span>
            </span>
            <div className="w-8 h-0.5 bg-gradient-to-r from-gold to-emerald-400 rounded-full" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6">
            Make a Difference <br />
            <span className="bg-gradient-emerald-gold bg-clip-text text-transparent">Start Today</span>
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Whether through financial support, volunteer action, or advocacy, there are multiple ways to be part of this transformative journey.
          </p>
        </motion.div>

        {/* Action Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {actions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.title}
                variants={itemVariants}
                className="group relative"
              >
                <div className={`relative overflow-hidden rounded-2xl transition-all duration-300 h-full flex flex-col ${
                  action.featured
                    ? 'bg-gradient-to-br from-emerald-600 to-emerald-800 border-2 border-emerald-400 shadow-2xl scale-100 md:scale-105'
                    : 'bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}>
                  {/* Animated background for non-featured */}
                  {!action.featured && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}

                  <div className="p-8 flex flex-col h-full relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} p-3 mb-6 group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <Icon size={26} className="text-white w-full h-full" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 flex-shrink-0">
                      {action.title}
                    </h3>
                    <p className={`text-sm leading-relaxed flex-grow mb-6 ${
                      action.featured ? 'text-emerald-100' : 'text-gray-300'
                    }`}>
                      {action.desc}
                    </p>

                    {/* CTA Button */}
                    <motion.a
                      href={action.href}
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all w-fit ${
                        action.featured
                          ? 'bg-white text-emerald-700 hover:bg-emerald-50'
                          : 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg'
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {action.cta}
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </div>

                  {/* Gradient border for featured */}
                  {action.featured && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Questions? We&apos;d Love to Connect
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Reach out to learn more about our programs, partnership opportunities, or how you can contribute to this mission.
          </p>
          <motion.a
            href="mailto:contact@yemisgana.org"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-emerald-gold text-white font-bold hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
