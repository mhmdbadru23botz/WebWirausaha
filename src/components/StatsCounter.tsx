import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Briefcase, Star, Clock } from 'lucide-react';

export function StatsCounter() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [stats, setStats] = useState({ client: 0, project: 0, rating: 0 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;

    const targetClient = 500;
    const targetProject = 1200;
    const targetRating = 4.9; // We will format this to 1 decimal

    const timer = setInterval(() => {
      currentStep++;
      setStats({
        client: Math.min(Math.floor((targetClient / steps) * currentStep), targetClient),
        project: Math.min(Math.floor((targetProject / steps) * currentStep), targetProject),
        rating: Math.min((targetRating / steps) * currentStep, targetRating)
      });
      if (currentStep >= steps) {
        clearInterval(timer);
        setStats({ client: targetClient, project: targetProject, rating: targetRating });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section className="py-16 bg-blue-600 dark:bg-[#00FF66] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center text-white dark:text-black">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/20 dark:bg-black/10 p-4 rounded-2xl mb-4">
              <Users className="w-8 h-8" />
            </div>
            <div className="text-4xl md:text-5xl font-black mb-2">{stats.client}+</div>
            <div className="text-sm md:text-base font-medium opacity-90">Client</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/20 dark:bg-black/10 p-4 rounded-2xl mb-4">
              <Briefcase className="w-8 h-8" />
            </div>
            <div className="text-4xl md:text-5xl font-black mb-2">{stats.project}+</div>
            <div className="text-sm md:text-base font-medium opacity-90">Project</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/20 dark:bg-black/10 p-4 rounded-2xl mb-4">
              <Star className="w-8 h-8" />
            </div>
            <div className="text-4xl md:text-5xl font-black mb-2">{stats.rating.toFixed(1)}</div>
            <div className="text-sm md:text-base font-medium opacity-90">Rating</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/20 dark:bg-black/10 p-4 rounded-2xl mb-4">
              <Clock className="w-8 h-8" />
            </div>
            <div className="text-4xl md:text-5xl font-black mb-2">24 Jam</div>
            <div className="text-sm md:text-base font-medium opacity-90">Support</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
