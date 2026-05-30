import { motion } from 'framer-motion';
import { Hero, WhyUs, AboutPreview, Services, Pricing, Team, Testimonials, Faq } from './Sections';
import { StatsCounter } from '../components/StatsCounter';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <StatsCounter />
      <WhyUs />
      <AboutPreview />
      <Services />
      
      {/* Mini About Banner */}
      <section className="py-20 bg-blue-600 dark:bg-gradient-to-r dark:from-blue-900/40 dark:to-emerald-900/20 px-4 sm:px-6 lg:px-8 border-y border-transparent dark:border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Butuh partner terpercaya untuk visi digital Anda?</h2>
            <p className="text-blue-100 dark:text-gray-300 text-lg">Konsisten memberikan kualitas desain dan kode terbaik tanpa kompromi.</p>
          </div>
          <Link to="/about" className="shrink-0 px-8 py-4 bg-white text-blue-600 dark:bg-[#00FF66] dark:text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center">
            Pelajari Tentang Kami
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <Pricing />
      <Team />
      <Testimonials />
      <Faq />
    </div>
  );
}
