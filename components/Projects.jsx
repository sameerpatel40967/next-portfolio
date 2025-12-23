'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'AI Portfolio Generator',
    description: 'An intelligent portfolio builder that uses AI prompts to generate personal websites instantly.',
    tech: ['Next.js', 'Tailwind', 'OpenAI API'],
    image: '/projects/ai-portfolio.png',
    link: 'https://your-portfolio-link.com',
  },
  {
    title: 'Crypto Dashboard',
    description: 'Real-time crypto tracker with modern charts and live data APIs.',
    tech: ['React', 'Chart.js', 'RapidAPI'],
    image: '/projects/crypto-dashboard.jpg',
    link: 'https://your-crypto-link.com',
  },
  {
    title: 'E-Commerce UI Kit',
    description: 'A sleek, mobile-first shopping interface with cart logic and payment animations.',
    tech: ['Next.js', 'Stripe', 'Framer Motion'],
    image: '/projects/ecommerce.png',
    link: 'https://your-store-link.com',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 bg-gradient-to-b from-black via-gray-900 to-black text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
      >
        🚀 Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-cyan-500/30 hover:border-cyan-400 transition-all duration-500"
          >
            {/* Image Section */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-20 text-gray-400 text-sm"
      >
        ✨ More projects coming soon...
      </motion.div>
    </section>
  );
}
