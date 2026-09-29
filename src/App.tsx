import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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

// ── صفحات مستقلة (lazy loaded)
const DikuratPage = lazy(() => import('@/pages/DikuratPage'));
const DahanatPage = lazy(() => import('@/pages/DahanatPage'));
const AmalPage = lazy(() => import('@/pages/AmalPage'));

// ── Loader
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-8 h-8 border-2 border-[#C19A6B] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// ── Scroll to top عند تغيير الصفحة
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// ── Layout مشترك
function AppLayout({ children }: { children: React.ReactNode }) {
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
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] overflow-x-hidden selection:bg-[#38BDF8]/30 transition-colors duration-500">
        <Preloader onComplete={() => {}} />
        <NoiseCanvas />
        <CustomCursor />
        <Navbar />
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>
        <Footer />
        <FloatingGalleryButton />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout>
        <Routes>
          {/* الصفحة الرئيسية */}
          <Route path="/" element={<Home />} />

          {/* ── صفحات الخدمات المستقلة ── */}
          {/* /dikurat  — ديكورات الدمام */}
          <Route path="/dikurat" element={<DikuratPage />} />

          {/* /dakhanat — دهانات الدمام */}
          <Route path="/dakhanat" element={<DahanatPage />} />

          {/* /amal — معرض الأعمال الكامل */}
          <Route path="/amal" element={<AmalPage />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
