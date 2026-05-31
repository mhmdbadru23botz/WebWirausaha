import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="pt-24 pb-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">Lebih Dekat dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-[#00FF66]">EDODOE</span></h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Kami bantu bisnis Anda lebih mudah ditemukan, dipercaya, dan dipilih pelanggan melalui strategi terintegrasi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
           <motion.img 
             initial={{ opacity: 0, x: -30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.2 }}
             src="https://b4285852.smushcdn.com/4285852/wp-content/uploads/2026/05/e3a3883b-a0c5-48f9-9aea-002346bea958-1024x1024.png?lossy=2&strip=1&webp=1" 
             alt="Tim EDODOE" 
             className="rounded-3xl shadow-2xl dark:shadow-[0_0_50px_rgba(37,99,235,0.15)] bg-slate-100 dark:bg-white/5 object-cover w-full aspect-square md:aspect-auto"
           />
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ delay: 0.3 }}
             className="space-y-6"
           >
             <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Layanan Unggulan Kami</h2>
             <ul className="space-y-4 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <span className="text-[#00FF66] mr-2">✓</span>
                  <span><strong>Jasa Iklan Meta</strong> untuk menjangkau calon pembeli di Facebook & Instagram</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00FF66] mr-2">✓</span>
                  <span><strong>Jasa Iklan Google</strong> agar bisnis muncul saat pelanggan mencari</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00FF66] mr-2">✓</span>
                  <span><strong>Jasa SEO</strong> untuk traffic jangka panjang</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00FF66] mr-2">✓</span>
                  <span><strong>Optimasi Google Map</strong> supaya toko lebih mudah dikunjungi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00FF66] mr-2">✓</span>
                  <span><strong>Pembuatan Website</strong> yang profesional dan meyakinkan</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00FF66] mr-2">✓</span>
                  <span><strong>Kelola Sosial Media</strong> agar brand Anda tetap aktif, relevan, dan menarik setiap hari</span>
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
    </div>
  );
}
