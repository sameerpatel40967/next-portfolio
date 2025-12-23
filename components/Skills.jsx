'use client';

import { motion } from 'framer-motion';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaPython
} from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiCplusplus, 
  SiC 
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" />, level: 'Advanced' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" />, level: 'Advanced' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 'Advanced' },
  { name: 'React', icon: <FaReact className="text-cyan-400" />, level: 'Pro' },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" />, level: 'Pro' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" />, level: 'Advanced' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 'Intermediate' },
  { name: 'MongoDB', icon: <FaDatabase className="text-green-400" />, level: 'Intermediate' },
  { name: 'Git', icon: <FaGitAlt className="text-red-500" />, level: 'Advanced' },

  // ⭐ Added New Skills
  { name: 'Python', icon: <FaPython className="text-yellow-300" />, level: 'Advanced' },
  { name: 'C++', icon: <SiCplusplus className="text-blue-400" />, level: 'Intermediate' },
  { name: 'C Programming', icon: <SiC className="text-red-400" />, level: 'Intermediate' },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 
                 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Neon glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08),transparent_60%)] 
                     blur-3xl"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.08),transparent_60%)] 
                     blur-3xl"></div>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text 
                   bg-gradient-to-r from-cyan-400 to-blue-500 mb-16 z-10"
      >
        💼 My Technical Expertise
      </motion.h2>

      {/* Skill Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 z-10">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08, rotate: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group bg-white/5 hover:bg-white/10 p-6 rounded-2xl backdrop-blur-2xl 
                       shadow-[0_0_25px_rgba(0,0,0,0.4)] border border-white/10 
                       transition-all duration-300 flex flex-col items-center justify-center 
                       text-center cursor-pointer"
          >
            <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)]">
              {skill.icon}
            </div>
            <h3 className="text-lg font-semibold tracking-wide">{skill.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{skill.level}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-16 text-gray-400 text-sm italic z-10"
      >
        ✨ Always learning and upgrading my stack!
      </motion.div>
    </section>
  );
}
