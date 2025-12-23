'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center bg-gradient-to-b from-black to-gray-900"
      data-aos="fade-up"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg"
      >
        {/* Profile Image */}
        <img
          src="/profile.png"
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-cyan-400 object-cover"
        />

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-4 text-cyan-400">About Me</h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed mb-6">
          Hi! I'm <span className="text-cyan-400 font-semibold">Sameer</span>, a passionate Full Stack Web Developer
          who loves building modern, interactive, and user-friendly web applications.
          I enjoy solving complex problems, learning new technologies, and creating smooth UI/UX experiences.
        </p>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-full shadow-md transition-all"
        >
          📄 Download Resume
        </a>
      </motion.div>
    </section>
  );
}
