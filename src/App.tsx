import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

// ── صفحات الخدمات المستقلة (Lazy loaded for performance)
const DahanatPage = lazy(() => import('@/pages/services/DahanatPage'));
const DikuratPage = lazy(() => import('@/pages/services/DikuratPage'));
const AwazelPage = lazy(() => import('@/pages/services/AwazelPage'));
const DahanatWaDikuratPage = lazy(() => import('@/pages/services/DahanatWaDikuratPage'));

// ── Fallback بسيط أثناء تحميل الصفحة
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-[#C19A6B] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// ── Layout مشترك يُطبَّق على جميع الصفحات
function AppLayout({ children }: { children: React.ReactNode }) {
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
        {/* High-End Entrance Preloader — فقط في الصفحة الرئيسية */}
        <Preloader onComplete={() => setPreloaderComplete(true)} />

        {/* Tactile Ambient Canvas */}
        <NoiseCanvas />

        {/* Fluid Custom Cursor */}
        <CustomCursor />

        {/* Floating Glassmorphic Nav */}
        <Navbar />

        {/* محتوى الصفحة */}
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>

        {/* Footer */}
        <Footer />

        {/* Floating Buttons */}
        <FloatingGalleryButton />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />

          {/* ══ صفحات الخدمات المستقلة للتصدر في البحث ══ */}
          {/* /dakhanat — استهداف "دهانات" و"دهانات الدمام" */}
          <Route path="/dakhanat" element={<DahanatPage />} />

          {/* /dikurat — استهداف "ديكورات" و"ديكورات الدمام" */}
          <Route path="/dikurat" element={<DikuratPage />} />

          {/* /awazel — استهداف "عوازل" و"عوازل مائية الدمام" */}
          <Route path="/awazel" element={<AwazelPage />} />

          {/* /dakhanat-wa-dikurat — استهداف "دهانات وديكورات الدمام" */}
          <Route path="/dakhanat-wa-dikurat" element={<DahanatWaDikuratPage />} />

          {/* Fallback — أي مسار غير معروف يعود للرئيسية */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
