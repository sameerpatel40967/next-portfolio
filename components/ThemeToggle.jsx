'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    if (localStorage.getItem('theme')) {
      setTheme(localStorage.getItem('theme'));
      document.documentElement.classList.toggle('dark', localStorage.getItem('theme') === 'dark');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <AnimatePresence>
      <motion.button
        key={theme}
        onClick={toggleTheme}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.4 }}
        className="fixed top-5 right-5 z-50 p-3 rounded-full bg-white/10 dark:bg-gray-800 text-cyan-400 shadow-lg backdrop-blur-md hover:scale-110 transition-transform duration-300"
      >
        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
      </motion.button>
    </AnimatePresence>
  );
}
