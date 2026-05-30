import React from 'react';
import { motion } from 'framer-motion';

export function PageLoader() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] bg-white dark:bg-[#0a1128] flex items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <motion.div
           className="w-16 h-16 border-4 border-gray-200 dark:border-white/10 border-t-blue-600 dark:border-t-[#00FF66] rounded-full"
           animate={{ rotate: 360 }}
           transition={{ ease: "linear", repeat: Infinity, duration: 1 }}
        />
        <motion.p
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
           className="mt-6 text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400 uppercase"
        >
          Memuat...
        </motion.p>
      </div>
    </motion.div>
  );
}
