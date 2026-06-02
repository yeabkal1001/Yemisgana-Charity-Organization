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

export function GetInvolved() {
  return (
    <section id="get-involved" className="w-full bg-navy text-white py-24 md:py-32">
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
            <span className="text-teal font-600 text-sm uppercase tracking-wide">Take Action</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Join the Movement
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Together, we can transform education across the Gurage Zone. Whether through donations, volunteering, or advocacy, there's a way for you to make a difference.
          </p>
        </motion.div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {actions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <motion.a
                key={action.title}
                href={action.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group rounded-xl p-8 flex flex-col gap-6 transition-all duration-300 ${
                  action.featured
                    ? 'bg-teal text-navy border-2 border-teal hover:shadow-xl hover:shadow-teal/20'
                    : 'bg-white/10 border border-white/20 hover:border-teal hover:bg-white/15'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  action.featured ? 'bg-navy text-teal' : 'bg-white/20 text-teal'
                }`}>
                  <Icon size={24} />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3">{action.title}</h3>
                  <p className={action.featured ? 'text-navy/80' : 'text-gray-300'}>
                    {action.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-semibold group-hover:gap-3 transition-all duration-300">
                  {action.cta}
                  <ArrowRight size={18} />
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Questions about how you can help? Contact us to learn more about partnership opportunities and ways to contribute.
          </p>
          <a href="mailto:contact@yemisgana.org" className="btn-primary bg-teal text-navy hover:bg-teal-light">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
