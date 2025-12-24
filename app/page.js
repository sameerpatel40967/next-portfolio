'use client';
export const dynamic = "force-static";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';

// Components
import Loader from '@/components/Loader';
import ThemeToggle from '@/components/ThemeToggle';
import BackToTop from '@/components/BackToTop';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // ✅ Initialize AOS once
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    // ✅ Loader duration
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <motion.main
          key="main"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-gradient-to-br from-[#05060A] via-[#0B0C14] to-black text-white overflow-hidden relative scroll-smooth"
        >
          {/* 🌙 Theme Toggle */}
          <div className="fixed top-5 right-5 z-50">
            <ThemeToggle />
          </div>

          {/* 🧭 Navbar */}
          <div className="sticky top-0 z-40 backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-md">
            <Navbar />
          </div>

          {/* ✨ Sections */}
          <section data-aos="fade-up"><Hero /></section>
          <section data-aos="fade-up" data-aos-delay="100"><About /></section>
          <section data-aos="fade-up" data-aos-delay="200"><Skills /></section>
          <section data-aos="fade-up" data-aos-delay="300"><Projects /></section>
          <section data-aos="fade-up" data-aos-delay="400"><Certificates /></section>
          <section data-aos="fade-up" data-aos-delay="500"><Contact /></section>
          <section data-aos="fade-up" data-aos-delay="600"><Footer /></section>

          {/* ⬆️ Back To Top Button */}
          <BackToTop />

          {/* 🌌 Ambient Glow Effects */}
          <div className="absolute -top-40 -left-40 w-[450px] h-[450px] bg-cyan-500/20 blur-[160px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-600/20 blur-[160px] rounded-full animate-pulse" />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
