'use client';

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-lg text-gray-400 text-center py-6 border-t border-gray-700">
      <p>
        © {new Date().getFullYear()} <span className="text-cyan-400">Sameer.dev</span> — All Rights Reserved
      </p>
      <div className="flex justify-center gap-5 mt-3">
        <a href="https://github.com/" target="_blank" className="hover:text-cyan-400">GitHub</a>
        <a href="https://linkedin.com/" target="_blank" className="hover:text-cyan-400">LinkedIn</a>
        <a href="mailto:youremail@gmail.com" className="hover:text-cyan-400">Email</a>
      </div>
    </footer>
  );
}
