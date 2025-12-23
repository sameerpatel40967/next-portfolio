'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    show && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-full shadow-lg transition-all"
      >
        <ArrowUp size={20} />
      </button>
    )
  );
}
