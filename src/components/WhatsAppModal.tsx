import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
  defaultPrice?: string;
}

export function WhatsAppModal({ isOpen, onClose, serviceTitle = '', defaultPrice = '' }: WhatsAppModalProps) {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    nohp: '',
    harga: defaultPrice || ''
  });

  // Update harga when defaultPrice changes (e.g. user selects different services)
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, harga: defaultPrice }));
  }, [defaultPrice]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nama || !formData.nohp) return;

    let text = `Halo WebWirausaha,%0A`;
    if (serviceTitle) {
      text += `Saya tertarik dengan layanan: *${serviceTitle}*%0A%0A`;
    } else {
      text += `Saya ingin konsultasi lebih lanjut.%0A%0A`;
    }
    
    text += `*Data Diri:*%0A`;
    text += `- Nama: ${formData.nama}%0A`;
    text += `- No HP: ${formData.nohp}%0A`;
    
    if (formData.email) {
      text += `- Email: ${formData.email}%0A`;
    }
    if (formData.harga) {
      text += `- Harga/Budget: ${formData.harga}%0A`;
    }

    const whatsappUrl = `https://wa.me/62811452160?text=${text}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.95, y: 20 }} 
            className="relative bg-white dark:bg-[#0d1838] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-white/10"
          >
            <div className="px-6 py-5 border-b border-gray-100 dark:border-white/10 flex justify-between items-center bg-gray-50/50 dark:bg-black/20">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Isi Data Konsultasi</h3>
              <button type="button" onClick={onClose} className="p-2 bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 rounded-full transition-colors">
                <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              {serviceTitle && (
                <div className="bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 p-3 rounded-xl text-sm mb-2 border border-blue-100 dark:border-blue-800/30">
                  Layanan yang dipilih: <strong className="font-bold">{serviceTitle}</strong>
                </div>
              )}
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Nama <span className="text-red-500">*</span></label>
                <input 
                  type="text" 
                  required 
                  value={formData.nama}
                  onChange={(e) => setFormData({...formData, nama: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#00FF66] bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none transition-shadow"
                  placeholder="Masukkan nama lengkap Anda"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">No WhatsApp <span className="text-red-500">*</span></label>
                <input 
                  type="tel" 
                  required 
                  value={formData.nohp}
                  onChange={(e) => setFormData({...formData, nohp: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#00FF66] bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none transition-shadow"
                  placeholder="0812xxxxxx"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Email <span className="text-gray-400 font-normal text-xs ml-1">(Opsional)</span></label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#00FF66] bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none transition-shadow"
                  placeholder="email@anda.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1.5">Harga / Budget <span className="text-gray-400 font-normal text-xs ml-1">(Opsional)</span></label>
                <input 
                  type="text" 
                  value={formData.harga}
                  onChange={(e) => setFormData({...formData, harga: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#00FF66] bg-white dark:bg-gray-800 text-gray-900 dark:text-white outline-none transition-shadow"
                  placeholder="Misal: 5.000.000"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex justify-center items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Kirim Pesan via WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
