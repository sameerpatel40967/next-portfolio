'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import certificatesData from '../data/certificates.json';

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 
                 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white overflow-hidden"
      data-aos="fade-up"
    >
      {/* 🌟 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-cyan-400 to-blue-500 mb-12"
      >
        🎓 Certificates & Achievements
      </motion.h2>

      {/* 🏆 Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl w-full">
        {certificatesData.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/10 
                       backdrop-blur-xl transition-all duration-500 hover:bg-white/20"
          >
            {/* 🌈 Floating Glow Border Animation */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-transparent 
                            before:absolute before:inset-[-2px] before:rounded-2xl before:bg-gradient-to-r 
                            before:from-cyan-400 before:via-purple-500 before:to-pink-500 
                            before:opacity-0 before:blur-[6px] before:transition-all 
                            before:duration-700 group-hover:before:opacity-70"></div>

            {/* 📜 Certificate Image */}
            <Image
              src={cert.image}
              alt={cert.title}
              width={400}
              height={250}
              className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* 🪶 Overlay Info */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 
                            group-hover:opacity-100 transition-opacity duration-500 flex flex-col 
                            justify-end items-center p-5">
              <h3 className="text-lg font-semibold text-cyan-400">{cert.title}</h3>
              <p className="text-sm text-gray-300">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✨ Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-gray-400 italic"
      >
        🌟 Forever exploring, forever growing!
      </motion.p>
    </section>
  );
}
