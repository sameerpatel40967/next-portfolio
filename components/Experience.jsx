'use client';

import { motion } from 'framer-motion';
import experiences from '../data/experience.json';

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white overflow-hidden"
      data-aos="fade-up"
    >
      {/* 🌟 Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-16"
      >
        💼 Experience Timeline
      </motion.h2>

      {/* 🕓 Timeline */}
      <div className="relative w-full max-w-4xl border-l border-cyan-400/30 pl-10 space-y-16">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative"
          >
            {/* ✨ Glow Dot */}
            <div className="absolute -left-5 top-1.5 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse shadow-lg shadow-cyan-500/30"></div>

            {/* 🧩 Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 shadow-xl">
              <h3 className="text-xl font-semibold text-cyan-400">{exp.role}</h3>
              <p className="text-gray-300 text-sm mb-2">{exp.company}</p>
              <p className="text-gray-400 text-xs mb-4 italic">{exp.period}</p>
              <p className="text-gray-200 leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
