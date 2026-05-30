import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const articles = [
    { title: "Tips Digital Marketing 2026 yang Wajib UMKM Tahu", category: "Marketing", date: "24 Mei 2026", author: "Muhamad Badru W.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { title: "Mengapa Website Lebih Penting Daripada Sosial Media?", category: "Website", date: "20 Mei 2026", author: "Siti Fadilla", image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800" },
    { title: "Cara Meningkatkan Penjualan dengan SEO Lokal", category: "SEO", date: "15 Mei 2026", author: "Rachmat Rifky", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800" },
    { title: "Pentingnya UI/UX Clean Design untuk Startup", category: "UI/UX", date: "10 Mei 2026", author: "Galuh", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800" },
  ];

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-screen">
       <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Blog & Artikel</h1>
        <p className="text-gray-600 dark:text-gray-400">Insight dan tips terbaik seputar dunia digital dan pengembangan bisnis.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {articles.map((article, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="group flex flex-col xl:flex-row bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-3xl overflow-hidden hover:shadow-xl dark:hover:bg-white/10 transition-all cursor-pointer"
          >
            <div className="h-48 xl:h-auto xl:w-1/2 overflow-hidden shrink-0">
               <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-6 xl:p-8 flex flex-col justify-center flex-1">
              <span className="text-xs font-bold text-blue-600 dark:text-[#00FF66] uppercase tracking-wider mb-2">{article.category}</span>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors">
                {article.title}
              </h3>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-6 mt-auto">
                <span className="flex items-center"><Calendar size={14} className="mr-1" /> {article.date}</span>
                <span className="flex items-center"><User size={14} className="mr-1" /> {article.author}</span>
              </div>
              <div className="flex items-center text-blue-600 dark:text-white font-medium text-sm group-hover:text-blue-700 dark:group-hover:text-[#00FF66] transition-colors">
                Baca Selengkapnya <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
