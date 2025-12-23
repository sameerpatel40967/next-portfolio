'use client';

import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <motion.div
        className="relative w-24 h-24 flex items-center justify-center"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-0 rounded-full border-t-4 border-cyan-400 border-opacity-60 blur-[1px]" />
        <div className="absolute inset-2 rounded-full border-t-4 border-purple-500 border-opacity-40 blur-[1px]" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-1/3 text-xl text-gray-300 tracking-widest"
      >
        Loading<span className="text-cyan-400">...</span>
      </motion.h2>
    </div>
  );
}
