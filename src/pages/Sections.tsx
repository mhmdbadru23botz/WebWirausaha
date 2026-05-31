import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Monitor, Presentation, Search, Share2, Smartphone, Target, Star, ChevronDown, Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { WhatsAppModal } from '../components/WhatsAppModal';

// Hero Section
export function Hero() {
  const words = ["Anda butuh sosmed?", "Anda butuh logo?", "Anda butuh jasa desain?"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 dark:bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-blue-700 bg-blue-100 dark:text-[#00FF66] dark:bg-[#00FF66]/10 mb-8 border border-blue-200 dark:border-[#00FF66]/20"
        >
          <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-[#00FF66] mr-2 animate-pulse"></span>
          Dapatkan Respon Cepat untuk Jasa Kelola Sosial Medi
          <motion.span 
            animate={{ opacity: [1, 0] }} 
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="ml-[1px] inline-block w-1.5 h-3.5 bg-blue-700 dark:bg-[#00FF66] align-middle"
          ></motion.span>
        </motion.div>
        
        <div className="h-10 md:h-14 lg:h-16 mb-2 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWord}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-500 dark:text-gray-400"
            >
              {words[currentWord]}
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.h1 
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-2"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-[#00FF66]">
            EDODOE
          </span>
        </motion.h1>

        <motion.h2
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.15 }}
           className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 mt-4 text-gray-900 dark:text-white"
        >
          Strategi Digital Tepat,<br className="hidden md:block"/> Bisnis Makin Pesat.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          Fokus Kami Satu: Profit Maksimal untuk Anda.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            to="/contact" 
            className="inline-flex justify-center items-center px-8 py-4 w-full sm:w-auto text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:text-black dark:bg-[#00FF66] dark:hover:bg-[#00cc52] rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] dark:shadow-[0_0_40px_rgba(0,255,102,0.3)] hover:scale-105"
          >
            Hubungi Kami sekarang!
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link 
            to="/portfolio" 
            className="inline-flex justify-center items-center px-8 py-4 w-full sm:w-auto text-base font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 dark:text-white dark:bg-white/5 dark:hover:bg-white/10 dark:outline dark:outline-1 dark:outline-white/20 rounded-full transition-all backdrop-blur-sm"
          >
            Lihat Portfolio
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 dark:border-white/10 pt-12"
      >
        {[
          { label: "Client Aktif", value: "500+" },
          { label: "Project Selesai", value: "1200+" },
          { label: "Rating Kepuasan", value: "4.9/5" },
          { label: "Support Tim", value: "24/7" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

// WhyUs Section
export function WhyUs() {
  return (
    <section className="py-24 bg-white dark:bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-blue-50 dark:bg-white/5 rounded-3xl border border-blue-100 dark:border-white/10">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Konsultasi Praktis dan Cepat</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Kami dapat melayani konsultasi untuk memenuhi kebutuhan bisnis Anda bersama tim EDODOE yang berpengalaman.
                  </p>
                </div>
                <div className="p-6 bg-emerald-50 dark:bg-[#00FF66]/5 rounded-3xl border border-emerald-100 dark:border-[#00FF66]/20">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Solusi Berbagai Kebutuhan Digital</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Kami menyesuaikan solusi yang kami kembangkan agar sesuai dengan kebutuhan bisnis Anda dan membantu Anda mencapai tujuan digital Anda.
                  </p>
                </div>
                <div className="p-6 bg-indigo-50 dark:bg-indigo-500/5 rounded-3xl border border-indigo-100 dark:border-indigo-500/20 sm:col-span-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Dukungan Konsumen Unlimited</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    Kami selalu memastikan bahwa yang telah kami kerjakan selalu berjalan baik dan Anda dapat menghubungi kapanpun dan dimanapun.
                  </p>
                </div>
             </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold tracking-wider text-blue-600 dark:text-[#00FF66] uppercase mb-3">Kenapa Harus EDODOE?</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              Strategi yg Membantu Bisnis Lebih Mudah Ditemukan, Dipercaya, dan Dipilih Pelanggan
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              EDODOE membantu bisnis Anda lebih mudah ditemukan, dipercaya, dan dipilih pelanggan melalui berbagai channel digital:
            </p>
            
            <ul className="space-y-4">
              {[
                { title: "Landing Page", desc: "Mengubah pengunjung menjadi calon pembeli." },
                { title: "SEO Google & AI", desc: "Membuat bisnis lebih mudah ditemukan." },
                { title: "Google Maps", desc: "Menjangkau pelanggan terdekat." },
                { title: "Iklan Meta & Google", desc: "Mendatangkan calon pelanggan sesuai target." },
                { title: "Media Sosial", desc: "Membuat brand aktif dan dipercaya." },
                { title: "Copywriting", desc: "Membuat pesan promosi lebih menarik dan menjual." }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-[#00FF66] mr-4 shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong className="text-gray-900 dark:text-white">{item.title}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// AboutPreview Section
export function AboutPreview() {
  return (
    <section className="py-24 bg-white dark:bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1"
          >
            <img 
              src="https://b4285852.smushcdn.com/4285852/wp-content/uploads/2026/05/e3a3883b-a0c5-48f9-9aea-002346bea958-1024x1024.png?lossy=2&strip=1&webp=1" 
              alt="Tentang EDODOE" 
              className="rounded-3xl shadow-2xl dark:shadow-[0_0_50px_rgba(37,99,235,0.15)] bg-slate-100 dark:bg-white/5 object-cover w-full"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-2 space-y-6"
          >
            <h2 className="text-sm font-bold tracking-wider text-blue-600 dark:text-[#00FF66] uppercase mb-2">Tentang EDODOE</h2>
            <p className="text-xl text-gray-900 dark:text-white font-medium mb-6">
              Kami bantu bisnis Anda lebih mudah ditemukan, dipercaya, dan dipilih pelanggan melalui:
            </p>
            
            <ul className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-[#00FF66] mr-3 mt-1">✓</span>
                <span><strong>Jasa Iklan Meta</strong> untuk menjangkau calon pembeli di Facebook & Instagram</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-[#00FF66] mr-3 mt-1">✓</span>
                <span><strong>Jasa Iklan Google</strong> agar bisnis muncul saat pelanggan mencari</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-[#00FF66] mr-3 mt-1">✓</span>
                <span><strong>Jasa SEO</strong> untuk traffic jangka panjang</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-[#00FF66] mr-3 mt-1">✓</span>
                <span><strong>Optimasi Google Map</strong> supaya toko lebih mudah dikunjungi</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-[#00FF66] mr-3 mt-1">✓</span>
                <span><strong>Pembuatan Website</strong> yang profesional dan meyakinkan</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-[#00FF66] mr-3 mt-1">✓</span>
                <span><strong>Kelola Sosial Media</strong> agar brand Anda tetap aktif, relevan, dan menarik setiap hari.</span>
              </li>
            </ul>
            
            <div className="mt-8 p-6 bg-blue-50 dark:bg-white/5 rounded-2xl border border-blue-100 dark:border-white/10">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>EDODOE</strong> adalah agensi pemasaran digital resmi di bawah <strong>PT TEKNO TREND TERATAS</strong>. Kami membantu UMKM dan pemilik bisnis agar lebih dikenal, dipercaya, dan mendapatkan pelanggan lewat internet dengan cara yang jelas, aman, dan profesional.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Services Section
export function Services() {
  const [modalState, setModalState] = useState<{isOpen: boolean, title?: string, price?: string}>({isOpen: false});

  const services = [
    { title: "Jasa Pembuatan Website", price: "500.000", desc: "Company profile profesional untuk brand Anda.", icon: <Presentation className="w-6 h-6" /> },
    { title: "Landing Page Bisnis", price: "799.000", desc: "Tingkatkan konversi dengan landing page memukau.", icon: <Monitor className="w-6 h-6" /> },
    { title: "Sistem Toko Online", price: "1.500.000", desc: "E-Commerce terintegrasi payment gateway.", icon: <Smartphone className="w-6 h-6" /> },
    { title: "Aplikasi Custom (Web/App)", price: "5.000.000", desc: "Sistem kasir, ERP, RT RW, Koperasi dll.", icon: <Share2 className="w-6 h-6" /> },
    { title: "SEO Optimization", price: "1.000.000", desc: "Ranking 1 Google untuk kata kunci potensial.", icon: <Search className="w-6 h-6" /> },
    { title: "Performance Ads (Meta/Google)", price: "800.000", desc: "Jangkau pelanggan dengan iklan ter-target.", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gradient-to-b dark:from-[#0a1128] dark:to-[#0d1838] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-gray-400">Layanan Agency Kami</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Solusi digital end-to-end terpercaya.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-xl dark:hover:bg-white/10 transition-all cursor-pointer backdrop-blur-sm flex flex-col"
            >
              <div className="h-14 w-14 rounded-2xl bg-blue-50 dark:bg-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">{service.desc}</p>
              <div className="text-blue-600 dark:text-[#00FF66] font-semibold text-sm mb-6">
                Mulai Rp {service.price}
              </div>
              <button 
                type="button"
                onClick={() => setModalState({ isOpen: true, title: service.title, price: service.price })}
                className="w-full justify-center flex items-center py-3 px-4 rounded-xl font-medium text-sm text-gray-700 bg-gray-100 hover:bg-gray-200 dark:text-gray-300 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2 text-[#25D366]">
                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                 </svg>
                 Tanya via WhatsApp
               </button>
            </motion.div>
          ))}
        </div>
      </div>
      <WhatsAppModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState({ ...modalState, isOpen: false })} 
        serviceTitle={modalState.title} 
        defaultPrice={modalState.price} 
      />
    </section>
  );
}

// Pricing Section
export function Pricing() {
  const [modalState, setModalState] = useState<{isOpen: boolean, title?: string, price?: string}>({isOpen: false});

  const plans = [
    {
      name: "BASIC",
      price: "1.500.000",
      desc: "Cocok untuk UMKM pemula",
      features: ["Landing page 1 halaman", "Responsive Design", "WhatsApp Chat Button", "Domain (.com) gratis 1 tahun", "Hosting 1GB", "Revisi 2x"],
      popular: false
    },
    {
      name: "BUSINESS",
      price: "3.500.000",
      desc: "Cocok untuk perusahaan berkembang",
      features: ["Website hingga 5 halaman", "Premium Custom Design", "Basic SEO Setup", "Optimasi Kecepatan", "Integrasi Sosmed", "Revisi 5x", "Support 1 Bulan"],
      popular: true
    },
    {
      name: "ENTERPRISE",
      price: "15.000.000+",
      desc: "Solusi sistem terintegrasi skala besar",
      features: ["Aplikasi/Sistem Full Custom", "UI/UX Premium Design", "Database & Backend API", "Advanced SEO Setup", "Cloud Deployment VPS", "Priority Support"],
      popular: false
    }
  ];

  return (
     <section className="py-24 bg-white dark:bg-[#0a1128] px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Investasi Digital Anda</h2>
          <p className="text-gray-600 dark:text-gray-400">Pilih paket yang sesuai dengan skala bisnis.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative p-8 rounded-3xl border transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'bg-blue-600 border-blue-600 dark:bg-gradient-to-b dark:from-blue-900/50 dark:to-[#0a1128] dark:border-blue-500 scale-105 z-10 text-white' 
                  : 'bg-white border-gray-200 dark:bg-white/5 dark:border-white/10 text-gray-900 dark:text-white hover:-translate-y-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 bg-gradient-to-r from-emerald-400 to-[#00FF66] text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Paling Populer
                </div>
              )}
              <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-xl font-bold mr-1">Rp</span>
                <span className="text-4xl font-extrabold">{plan.price}</span>
              </div>
              <p className={`text-sm mb-8 ${plan.popular ? 'text-blue-100' : 'text-gray-600 dark:text-gray-400'}`}>{plan.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 ${plan.popular ? 'text-emerald-300' : 'text-blue-500 dark:text-[#00FF66]'}`} />
                    <span className="text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                type="button"
                onClick={() => setModalState({ isOpen: true, title: `Paket ${plan.name}`, price: plan.price })}
                className={`w-full block text-center py-4 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'bg-white text-blue-600 hover:bg-gray-100 dark:bg-[#00FF66] dark:text-black dark:hover:bg-[#00cc52]'
                    : 'bg-blue-50 text-blue-600 hover:bg-blue-100 dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
                }`}
              >
                Tanya via WhatsApp
              </button>
            </motion.div>
          ))}
        </div>
      </div>
      <WhatsAppModal 
        isOpen={modalState.isOpen} 
        onClose={() => setModalState({ ...modalState, isOpen: false })} 
        serviceTitle={modalState.title} 
        defaultPrice={modalState.price} 
      />
    </section>
  );
}

// Team Section
export function Team() {
  const [stats, setStats] = useState({ clients: 0, projects: 0, years: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepTime = Math.abs(Math.floor(duration / steps));
    let currentStep = 0;

    const targetClients = 2000;
    const targetProjects = 4500;
    const targetYears = 8;

    const timer = setInterval(() => {
      currentStep++;
      setStats({
        clients: Math.min(Math.floor((targetClients / steps) * currentStep), targetClients),
        projects: Math.min(Math.floor((targetProjects / steps) * currentStep), targetProjects),
        years: Math.min(Math.floor((targetYears / steps) * currentStep), targetYears)
      });
      if (currentStep >= steps) {
        clearInterval(timer);
        setStats({ clients: targetClients, projects: targetProjects, years: targetYears });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-[#0a1128] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 dark:bg-[#00FF66]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold tracking-wider text-blue-600 dark:text-[#00FF66] uppercase mb-4">Tim EDODOE</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
                Siap Untuk Bekerja Sama<br />Untuk Hasil Yang Maksimal
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Kami dengan bangga memperkenalkan tim EDODOE yg terdiri dari para profesional yang berpengalaman di dunia digital. Dengan pengalaman bertahun-tahun dan berbagai proyek sukses yang telah kami selesaikan, Anda dapat mempercayakan kebutuhan digital bisnis Anda kepada kami.
              </p>
              
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-[#00FF66] mb-2">{stats.clients}+</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Bisnis Aktif</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-[#00FF66] mb-2">{stats.projects}+</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Proyek Sukses</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-[#00FF66] mb-2">{stats.years}+</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Tahun Pengalaman</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="relative h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" alt="Tim EDODOE" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
             <div className="absolute bottom-8 left-8 right-8">
               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center justify-between">
                 <div>
                   <p className="text-white font-medium">Kolaborasi & Kreativitas</p>
                   <p className="text-gray-300 text-sm">Tim solid untuk pertumbuhan bisnis Anda</p>
                 </div>
                 <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                   <Target className="w-6 h-6 text-white" />
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials
export function Testimonials() {
  const testimonials = [
    { name: "Heni Novitasari", role: "CEO TechStart", quote: "Pelayanan sangat luar biasa! Landing page saya selesai dalam 2 hari dan konversi penjualan naik 300% setelah pakai jasa EDODOE.", image: "https://i.pravatar.cc/150?u=a042581f4e29026024d" },
    { name: "Andi Suhandi", role: "Founder LocalBrand", quote: "Timnya sangat solutif. Supportnya beneran unlimited, tanya tengah malam aja masih dibales. Websitenya juga ngebut banget parah.", image: "https://i.pravatar.cc/150?u=a042581f4e29026704d" },
    { name: "Kholik Poibara", role: "Marketing Director", quote: "Awalnya ragu, tapi setelah website e-commerce jadi, wow! Desainnya premium banget dan sangat SEO friendly. Kinerja mantul!", image: "https://i.pravatar.cc/150?u=a04258114e29026702d" }
  ];

  const genericLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
  ];

  return (
     <section className="py-24 bg-gray-50 dark:bg-[#0d1838] border-y border-gray-200 dark:border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Apa yang mereka katakan tentang EDODOE?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              EDODOE telah dipercaya oleh 2000++ bisnis, baik di dalam maupun luar negeri, untuk membangun identitas brand yang lebih kuat, profesional, dan siap bersaing.
            </p>
          </div>
          
          <div className="w-full flex justify-center items-center opacity-50 grayscale dark:opacity-40">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {genericLogos.map((logo, index) => (
                <img key={index} src={logo} alt="Client Logo" className="h-6 md:h-8 object-contain" />
              ))}
            </div>
          </div>
        </div>
        
        {/* Marquee for testimonials */}
        <div className="w-full relative py-8">
           <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 dark:from-[#0d1838] to-transparent z-10 pointer-events-none"></div>
           <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 dark:from-[#0d1838] to-transparent z-10 pointer-events-none"></div>
           
           <motion.div 
             initial={{ x: "0%" }}
             animate={{ x: "-50%" }}
             transition={{ ease: "linear", repeat: Infinity, duration: 40 }}
             className="flex gap-8 px-4 w-max"
           >
             {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testi, i) => (
               <div 
                 key={i}
                 className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-sm flex flex-col hover:-translate-y-2 transition-transform duration-300 w-[350px] shrink-0 whitespace-normal"
               >
                 <div className="flex text-amber-400 dark:text-[#00FF66] mb-6">
                   {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-current" />)}
                 </div>
                 <p className="flex-1 text-gray-700 dark:text-gray-300 mb-8 italic">"{testi.quote}"</p>
                 <div className="flex items-center">
                   <img src={testi.image} alt={testi.name} className="h-12 w-12 rounded-full object-cover shrink-0 ring-2 ring-gray-100 dark:ring-white/10" />
                   <div className="ml-4">
                     <h4 className="font-bold text-gray-900 dark:text-white">{testi.name}</h4>
                     <p className="text-xs text-gray-500 dark:text-gray-400">{testi.role}</p>
                   </div>
                 </div>
               </div>
             ))}
           </motion.div>
        </div>
      </section>
  );
}

// FAQ Section
export function Faq() {
  const faqs = [
    { q: "Berapa lama proses pengerjaan pembuatan website?", a: "Tergantung pada kompleksitas website, umumnya antara 3 hari untuk company profile standar hingga 2-8 minggu untuk toko online atau website custom." },
    { q: "Apakah ada garansi untuk layanan pembuatan website / SEO?", a: "Khusus untuk pembuatan website, kami berikan garansi support error dan bug selama masa layanan. Untuk SEO, kami menggunakan strategi white-hat SEO yang butuh waktu dan kami garansi sesuai dengan standar Google." },
    { q: "Apakah saya perlu menyiapkan materi konten sendiri?", a: "Idealnya materi seperti foto produk dan profil usaha disiapkan oleh Anda. Namun, jika belum ada, kami menyediakan layanan copywriting terpisah yang bisa ditambahkan." },
    { q: "Bagaimana sistem pembayaran untuk jasa EDODOE?", a: "Kami menerapkan sistem pembayaran DP (Down Payment) 50% di awal sebelum proyek dimulai, dan pelunasan 50% setelah website atau layanan selesai dikerjakan sesuai kesepakatan dan siap online." },
    { q: "Apakah website yang dibuat sudah mobile friendly?", a: "Tentu saja! Semua website yang kami buat sudah responsif dan optimal untuk diakses secara responsif dan sempurna melalui smartphone, tablet, maupun desktop komputer." },
    { q: "Apakah ada biaya langganan bulanan atau tahunan?", a: "Hanya terdapat biaya perpanjangan domain dan hosting setiap tahun. Kami selalu transparan di awal mengenai biaya perpanjangan ini (kecuali Anda memilih hosting sendiri)." },
    { q: "Bagaimana jika saya ingin custom desain website di luar paket yang tersedia?", a: "Sangat bisa! Silakan hubungi tim kami untuk konsultasi gratis mengenai spesifikasi fitur atau desain khusus, dan kami akan membuatkan penawaran (quotation) yang sesuai." },
    { q: "Pilihan platform apa saja yang digunakan?", a: "Kami menggunakan teknologi React modern. Atau bisa disesuaikan dengan kebutuhan CMS atau custom sesuai permintaan klien." }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white dark:bg-[#0a1128] px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Pertanyaan Umum (FAQ)</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
               key={i}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden bg-white dark:bg-[#0a1128]/50"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white">{faq.q}</span>
                {openIndex === i ? <Minus className="w-5 h-5 text-gray-500" /> : <Plus className="w-5 h-5 text-gray-500" />}
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 text-gray-600 dark:text-gray-400 bg-white dark:bg-transparent border-t border-gray-100 dark:border-white/5 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
