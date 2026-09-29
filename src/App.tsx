import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from '@/components/common/Preloader';
import CustomCursor from '@/components/common/CustomCursor';
import NoiseCanvas from '@/components/common/NoiseCanvas';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';
import FloatingGalleryButton from '@/components/common/FloatingGalleryButton';
import { ThemeProvider } from '@/context/ThemeContext';
import Home from '@/pages/Home';

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Initialize Lenis butter-smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden selection:bg-[#38BDF8]/30 transition-colors duration-500">
        {/* High-End Entrance Preloader */}
        <Preloader onComplete={() => setPreloaderComplete(true)} />

        {/* Tactile Ambient Canvas: Grain & Gold Dust Particles */}
        <NoiseCanvas />

        {/* Fluid Custom Cursor with Magnetic Ring & Context Badges */}
        <CustomCursor />

        {/* Floating Glassmorphic Nav with Magnetic Hover & Sound Toggle */}
        <Navbar />

        {/* Main Luxury Experience Page */}
        <Home />

        {/* Luxury Footer with World Clocks & Colophon */}
        <Footer />

        {/* Persistent Floating Gallery Action Button */}
        <FloatingGalleryButton />

        {/* Persistent Floating WhatsApp Action Button */}
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}

