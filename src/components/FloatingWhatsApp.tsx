import { motion } from 'framer-motion';

export function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/62811452160?text=Halo%20WebWirausaha,%20saya%20ingin%20konsultasi.";
  
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-transparent rounded-full hover:scale-110 transition-transform duration-300"
      aria-label="Chat WhatsApp"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute inset-0 bg-[#25D366] rounded-full opacity-40 blur-sm"
      />
      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="WhatsApp" className="w-14 h-14 relative z-10" />
    </motion.a>
  );
}
