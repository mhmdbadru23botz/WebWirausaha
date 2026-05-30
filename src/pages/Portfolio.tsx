import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Portfolio() {
  const [filter, setFilter] = useState('Semua');
  const categories = ['Semua', 'Website', 'Web App', 'E-Commerce', 'Company Profile'];

  const projects = [
    { title: "Bank Digital Dashboard", category: "Web App", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
    { title: "Fashion Store Pro", category: "E-Commerce", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
    { title: "TechCorp Profile", category: "Company Profile", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" },
    { title: "Startup Landing", category: "Website", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
    { title: "KopiLokal Shop", category: "E-Commerce", image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800" },
    { title: "Sistem HRD / Absensi", category: "Web App", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800" },
  ];

  const clientImages = [
    "https://b4285852.smushcdn.com/4285852/wp-content/uploads/2026/02/img-portfolio-baksomerconcakkar-600x600-1.jpg?lossy=2&strip=1&webp=1&size=382x0",
    "https://b4285852.smushcdn.com/4285852/wp-content/uploads/2026/02/img-portfolio-glozcar-600x600-1.jpg?lossy=2&strip=1&webp=1&size=382x0",
    "https://b4285852.smushcdn.com/4285852/wp-content/uploads/2026/02/img-portfolio-chiangkong-600x600-1.jpg?lossy=2&strip=1&webp=1&size=382x0",
    "https://b4285852.smushcdn.com/4285852/wp-content/uploads/2026/02/img-portfolio-desainlogam-600x600-1.jpg?lossy=2&strip=1&webp=1&size=382x0",
    "https://b4285852.smushcdn.com/4285852/wp-content/uploads/2026/02/img-portfolio-rumahpembiayaan-600x600-1.jpg?lossy=2&strip=1&webp=1&size=382x0",
    "https://b4285852.smushcdn.com/4285852/wp-content/uploads/2026/02/img-portfolio-sdmoptimal-600x600-1.jpg?lossy=2&strip=1&webp=1&size=382x0"
  ];

  const filtered = filter === 'Semua' ? projects : projects.filter(p => p.category === filter);
  
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        // if reached the end, snap back to start
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full min-h-screen border-t-0 p-0 overflow-hidden">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">Telah Dipercaya Lebih 2000++ Usaha UMKM & Menengah</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Setelah berbagai pengalaman yang telah kami kerjakan, Web Wirausaha telah di percaya oleh pengusaha UMKM untuk mengerjakan berbagai kebutuhan bisnis mereka menjadi lebih luas.
        </p>
      </div>

      {/* Auto / Draggable Carousel for Portfolio Images */}
      <div className="relative mb-24 max-w-5xl mx-auto">
        <button 
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbars no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {clientImages.map((imgSrc, idx) => (
            <motion.div 
              key={idx}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] aspect-square rounded-3xl overflow-hidden shrink-0 snap-center shadow-xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <img src={imgSrc} alt={`Portfolio ${idx + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
          {/* Duplicate images for a seamless feel if scrolled to the end */}
          {clientImages.map((imgSrc, idx) => (
            <motion.div 
              key={`dup-${idx}`}
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] aspect-square rounded-3xl overflow-hidden shrink-0 snap-center shadow-xl border border-gray-100 dark:border-white/10 bg-gray-50 dark:bg-white/5"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <img src={imgSrc} alt={`Portfolio ${idx + 1}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>

        <button 
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-white/80 dark:bg-black/80 hover:bg-white dark:hover:bg-black text-gray-800 dark:text-white p-3 rounded-full shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="text-center mb-16 mt-16 pt-16 border-t border-gray-200 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Karya Project Lainnya</h2>
        <p className="text-gray-600 dark:text-gray-400">Jejak digital yang telah kami bangun untuk mensupport industri.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat, i) => (
          <button 
            key={i} 
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === cat 
                ? 'bg-blue-600 text-white dark:bg-[#00FF66] dark:text-black shadow-md' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-300 dark:hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((proj, i) => (
          <motion.div 
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            key={proj.title}
            className="group relative rounded-3xl overflow-hidden aspect-video bg-gray-100 dark:bg-white/5 cursor-pointer shadow-sm hover:shadow-xl transition-all"
          >
            <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-emerald-400 dark:text-[#00FF66] text-sm font-medium mb-1 drop-shadow-md">{proj.category}</span>
              <div className="flex justify-between items-center">
                 <h3 className="text-white text-xl font-bold drop-shadow-md">{proj.title}</h3>
                 <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/40 transition-colors">
                    <ExternalLink size={18} />
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
