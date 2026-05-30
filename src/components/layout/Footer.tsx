import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Footer() {
  const needs = ["Logo?", "Jasa Sosmed?", "Iklan?"];
  const [currentNeed, setCurrentNeed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNeed((prev) => (prev + 1) % needs.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [needs.length]);

  return (
    <footer className="bg-gray-50 dark:bg-[#0a1128] border-t border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-[#00FF66] bg-clip-text text-transparent mb-4 inline-block">
              WebWirausaha.
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">
              Kami membangun solusi digital yang elegan dan powerful untuk membantu bisnis Anda tumbuh eksponensial di era modern.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-[#00FF66] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400 dark:hover:text-[#00FF66] transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-pink-600 dark:hover:text-[#00FF66] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-700 dark:hover:text-[#00FF66] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-[#00FF66] transition-colors">Pembuatan Website</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-[#00FF66] transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-[#00FF66] transition-colors">SEO Optimization</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 dark:hover:text-[#00FF66] transition-colors">Mobile App Dev</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-blue-600 dark:hover:text-[#00FF66] transition-colors">Tentang Kami</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-600 dark:hover:text-[#00FF66] transition-colors">Portfolio</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-600 dark:hover:text-[#00FF66] transition-colors">Harga</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 dark:hover:text-[#00FF66] transition-colors">Kontak</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent mb-8"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>Copyright © {new Date().getFullYear()} Web Wirausaha by PT TEKNO TREND TERATAS.</p>
          <div className="flex items-center mt-4 md:mt-0 space-x-6">
             <Link to="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
             <Link to="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

      <div className="w-full py-6 border-t border-gray-200 dark:border-white/10 bg-white/50 dark:bg-black/40 text-center flex items-center justify-center space-x-2 text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200">
        <span>Anda Lagi Butuh</span>
        <div className="relative inline-flex overflow-hidden h-8 md:h-10">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentNeed}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-blue-600 dark:text-[#00FF66]"
            >
              {needs[currentNeed]}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
}
