import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import NoiseCanvas from './components/NoiseCanvas';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import ServicesHorizontal from './components/ServicesHorizontal';
import MaterialInspector from './components/MaterialInspector';
import SpotlightGallery from './components/SpotlightGallery';
import ArtisanProcess from './components/ArtisanProcess';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

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
    <div className="relative min-h-screen bg-[#050505] text-[#F5F5F7] overflow-x-hidden selection:bg-[#C19A6B]/30 selection:text-[#F5F5F7]">
      {/* High-End Entrance Preloader */}
      <Preloader onComplete={() => setPreloaderComplete(true)} />

      {/* Tactile Ambient Canvas: Grain & Gold Dust Particles */}
      <NoiseCanvas />

      {/* Fluid Custom Cursor with Magnetic Ring & Context Badges */}
      <CustomCursor />

      {/* Floating Glassmorphic Nav with Magnetic Hover & Sound Toggle */}
      <Navbar />

      {/* Main Luxury Experience */}
      <main id="main-content" className="relative z-20">
        {/* 01. Hero Section with Video-Masked Typography */}
        <HeroSection />

        {/* 02. The Atelier Manifesto (Asymmetric Editorial Bento Grid) */}
        <ManifestoSection />

        {/* 03. Haute Services Horizontal Showcase */}
        <ServicesHorizontal />

        {/* 04. Tactile Light & Swatch Inspector */}
        <MaterialInspector />

        {/* 05. The Private Archive (Interactive Spotlight Grid) */}
        <SpotlightGallery />

        {/* 06. The 5-Stage Artisan Alchemy */}
        <ArtisanProcess />

        {/* 07. Private Client Inquiry (Floating Labels with Gold Glow) */}
        <ContactSection />
      </main>

      {/* Luxury Footer with World Clocks & Colophon */}
      <Footer />

      {/* Persistent Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
