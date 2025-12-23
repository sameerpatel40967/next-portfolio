'use client'
import { Typewriter } from 'react-simple-typewriter'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className='container py-28' data-aos='fade-up'>
        <div className='glass p-10 flex flex-col md:flex-row items-center gap-8'>
          
          {/* Left Side Text */}
          <div className='flex-1'>
            <h1 className='text-4xl md:text-5xl font-extrabold'>Hi — I&#39;m Sameer</h1>
            
            <h2 className='text-xl mt-3'>
              I&#39;m a <span style={{ color: '#7dd3fc' }}>
                <Typewriter
                  words={['Web Developer', 'Full-stack Engineer', 'Problem Solver']}
                  loop
                  cursor
                  cursorStyle='|'
                />
              </span>
            </h2>

            <p className='mt-6 text-gray-300 max-w-xl'>
              I build modern, accessible, and performant web apps. My focus is on beautiful UI,
              clean code, and great UX.
            </p>

            <div className='mt-6 flex gap-3'>
              <a href='#projects' className='glass px-4 py-2 rounded hover:scale-105 transition'>
                See Projects
              </a>
              <a href='/resume.pdf' download className='glass px-4 py-2 rounded'>
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <motion.div
            className='w-48 h-48 relative rounded-full overflow-hidden glass flex items-center justify-center'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image src="/profile.png" alt="avatar" fill style={{ objectFit: 'cover' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
