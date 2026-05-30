import { Outlet, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from '../FloatingWhatsApp';
import { FloatingContact } from '../FloatingContact';
import { ThemeProvider } from '../ThemeProvider';
import { PageLoader } from './PageLoader';
import { AnimatePresence } from 'framer-motion';

export function RootLayout() {
  const { pathname } = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsTransitioning(true);
    const timeout = setTimeout(() => {
      setIsTransitioning(false);
    }, 400); // 400ms fake delay for smooth transition loader
    
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="agency-theme">
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a1128] text-gray-900 dark:text-white font-sans transition-colors duration-300">
        <Navbar />
        <AnimatePresence>
          {isTransitioning && <PageLoader />}
        </AnimatePresence>
        <main className={`flex-grow flex flex-col transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
        <FloatingContact />
      </div>
    </ThemeProvider>
  );
}
