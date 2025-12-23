'use client';

import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`w-full fixed top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'backdrop-blur-2xl bg-black/30 border-b border-cyan-500/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-cyan-400">Sameer<span className="text-white">.dev</span></h1>

        <ul className="hidden md:flex space-x-8 text-gray-300">
          {navLinks.map((link, i) => (
            <li key={i} className="relative group">
              <ScrollLink
                to={link.to}
                spy
                smooth
                duration={500}
                offset={-70}
                className="cursor-pointer hover:text-cyan-400 transition-colors duration-300"
              >
                {link.label}
              </ScrollLink>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
