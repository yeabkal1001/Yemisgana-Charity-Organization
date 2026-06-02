"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const footerLinks = {
  Company: [
    { label: 'About', href: '#about' },
    { label: 'Impact', href: '#impact' },
    { label: 'Team', href: '#team' },
    { label: 'Careers', href: '#careers' },
  ],
  Resources: [
    { label: 'Blog', href: '#blog' },
    { label: 'Reports', href: '#reports' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  Legal: [
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
    { label: '501(c)(3)', href: '#nonprofit' },
    { label: 'Transparency', href: '#transparency' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#facebook', label: 'Facebook' },
  { icon: Twitter, href: '#twitter', label: 'Twitter' },
  { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' },
  { icon: Instagram, href: '#instagram', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-color-neutral-900 text-color-text-inverse relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-color-accent-primary/5 rounded-full blur-3xl -ml-48 -mt-48" />

      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 md:py-24 border-b border-color-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
            
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-color-accent-surface/20 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Yemisgana"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-color-text-inverse">Yemisgana</p>
                  <p className="text-xs text-color-neutral-400">Education Initiative</p>
                </div>
              </div>
              <p className="text-sm text-color-neutral-400 leading-relaxed mt-4 max-w-xs">
                Building safe, modern schools in Ethiopia&apos;s Gurage Zone. Every school we build transforms lives and communities.
              </p>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <motion.a
                  href="mailto:info@yemisgana.org"
                  className="flex items-center gap-3 text-sm text-color-neutral-400 hover:text-color-accent-light transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <Mail size={16} className="flex-shrink-0" />
                  info@yemisgana.org
                </motion.a>
                <motion.a
                  href="tel:+251911223344"
                  className="flex items-center gap-3 text-sm text-color-neutral-400 hover:text-color-accent-light transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <Phone size={16} className="flex-shrink-0" />
                  +251 (0)9 1122 3344
                </motion.a>
                <motion.a
                  href="#"
                  className="flex items-center gap-3 text-sm text-color-neutral-400 hover:text-color-accent-light transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <MapPin size={16} className="flex-shrink-0" />
                  Addis Ababa, Ethiopia
                </motion.a>
              </div>
            </motion.div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map((column, colIdx) => (
              <motion.div
                key={column[0]}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: colIdx * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-sm font-semibold text-color-text-inverse mb-4">
                  {column[0]}
                </h4>
                <ul className="space-y-3">
                  {column[1].map((link, idx) => (
                    <li key={link.label}>
                      <motion.a
                        href={link.href}
                        className="text-sm text-color-neutral-400 hover:text-color-accent-light transition-colors"
                        whileHover={{ x: 4 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                          delay: colIdx * 0.1 + idx * 0.05,
                          duration: 0.4,
                        }}
                        viewport={{ once: true }}
                      >
                        {link.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.p
            className="text-sm text-color-neutral-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            &copy; {new Date().getFullYear()} Yemisgana Charity Organization. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-color-white/10 flex items-center justify-center text-color-neutral-400 hover:bg-color-accent-primary hover:text-color-text-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: idx * 0.08,
                    duration: 0.4,
                  }}
                  viewport={{ once: true }}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
