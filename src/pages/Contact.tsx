import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    whatsapp: '',
    layanan: 'Jasa Pembuatan Landing Page',
    pesan: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleKirimWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo EDODOE, saya ${formData.nama} ingin konsultasi.%0A%0AEmail: ${formData.email}%0AWhatsApp: ${formData.whatsapp}%0ALayanan: ${formData.layanan}%0A%0A*Pesan:*%0A${formData.pesan}`;
    const url = `https://wa.me/62811452160?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 w-full max-w-7xl mx-auto flex-1 text-gray-900 dark:text-white">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hubungi Kami</h1>
        <p className="text-gray-600 dark:text-gray-400">Berkolaborasi bersama membangun inovasi digital. Siap 24 Jam.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1 space-y-8"
        >
          <div className="bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 p-8 rounded-3xl h-full">
             <h3 className="text-2xl font-bold mb-6">Info Kontak</h3>
             
             <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-[#00FF66] rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">WhatsApp / Telepon</p>
                    <p className="font-bold">+62 811-452-160</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-[#00FF66] rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email Utama</p>
                    <p className="font-bold">eddoyepe@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-[#00FF66] rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Headquarters</p>
                    <p className="font-bold leading-relaxed">Jl. Jendral Sudirman No. 45<br/>Kawasan SCBD, Jakarta Selatan<br/>Indonesia 12190</p>
                  </div>
                </div>
             </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-10 lg:p-12 shadow-sm dark:shadow-none"
        >
          <h3 className="text-2xl font-bold mb-6">Form Konsultasi</h3>
          <form onSubmit={handleKirimWhatsApp} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Nama Lengkap *</label>
                <input required type="text" name="nama" value={formData.nama} onChange={handleChange} className="w-full bg-gray-50 dark:bg-[#0a1128]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#00FF66]/50 transition-shadow" placeholder="Masukkan nama..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 dark:bg-[#0a1128]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#00FF66]/50 transition-shadow" placeholder="Masukkan email..." />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">WhatsApp / Telp *</label>
                <input required type="tel" name="whatsapp" value={formData.whatsapp} onChange={handleChange} className="w-full bg-gray-50 dark:bg-[#0a1128]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#00FF66]/50 transition-shadow" placeholder="08..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Layanan yang Dibutuhkan</label>
                <select name="layanan" value={formData.layanan} onChange={handleChange} className="w-full bg-gray-50 dark:bg-[#0a1128]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#00FF66]/50 appearance-none">
                  <option>Jasa Pembuatan Landing Page</option>
                  <option>Jasa Website Spesialis Company Profile</option>
                  <option>Jasa Website UMKM & Toko Online</option>
                  <option>Aplikasi Kasir / POS / RT RW</option>
                  <option>SEO Optimization</option>
                  <option>Digital Marketing (Meta/Google Ads)</option>
                  <option>Social Media Management</option>
                  <option>Lainnya</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2">Pesan & Detail Kebutuhan *</label>
              <textarea required rows={5} name="pesan" value={formData.pesan} onChange={handleChange} className="w-full bg-gray-50 dark:bg-[#0a1128]/50 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#00FF66]/50 transition-shadow resize-none" placeholder="Ceritakan brief project Anda..."></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white dark:bg-[#00FF66] dark:hover:bg-[#00cc52] dark:text-black font-bold py-4 rounded-xl transition-all shadow-md dark:shadow-[0_0_20px_rgba(0,255,102,0.2)]"
            >
              Kirim Pesan via WhatsApp
            </button>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
              Anda akan diarahkan ke WhatsApp untuk mengirim pesan ini secara langsung.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
