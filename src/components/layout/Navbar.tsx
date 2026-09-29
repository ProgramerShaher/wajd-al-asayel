import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Menu, X, Phone, MessageCircle, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '@/context/ThemeContext';

interface NavbarProps {
  onOpenSampleKit?: () => void;
}

export default function Navbar({ onOpenSampleKit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize and auto-play audio on first interaction
  useEffect(() => {
    const audio = new Audio('/audio/sheila.mp3');
    audio.loop = true;
    audioRef.current = audio;

    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().then(() => {
          setIsPlayingAudio(true);
        }).catch(() => { });
      }
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
      }
    };
  }, []);

  const toggleAmbientSound = () => {
    if (!audioRef.current) return;

    if (!isPlayingAudio) {
      audioRef.current.play().then(() => {
        setIsPlayingAudio(true);
      }).catch((e) => console.warn('Audio play prevented:', e));
    } else {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    }
  };

  // Magnetic hover effect handler
  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate3d(${x * 0.28}px, ${y * 0.28}px, 0)`;
  };

  const handleMagneticLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'translate3d(0, 0, 0)';
  };

  const navLinks = [
    { name: 'خدماتنا', href: '#services' },
    { name: 'معرض أعمالنا', href: '#portfolio' },
    { name: 'أنواع التشطيبات', href: '#inspector' },
    { name: 'خطوات العمل', href: '#process' },
    { name: 'عن المؤسسة', href: '#manifesto' },
    { name: 'اتصل بنا', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-nav-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-2.5 sm:py-3 md:py-4 px-2.5 sm:px-4 md:px-8 lg:px-10 flex justify-center ${
          scrolled ? 'translate-y-0' : 'translate-y-0.5 sm:translate-y-1'
        }`}
      >
        <nav
          className={`w-full max-w-7xl mx-auto flex items-center justify-between p-1.5 sm:p-2 rounded-full transition-all duration-500 glass-nav ${
            scrolled ? 'shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]' : ''
          }`}
        >
          {/* Atelier Monogram & Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2 sm:gap-3 group min-w-0"
            data-cursor="الرئيسية"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 flex items-center justify-center flex-shrink-0">
              <img
                src="/wa-logo.png"
                alt="شعار وجد الأصايل"
                className="w-full h-full object-contain transition-transform duration-700 group-hover:rotate-12"
                loading="eager"
              />
            </div>
            <div className="flex items-center text-right truncate">
              <span className="font-serif-luxury text-lg xs:text-xl sm:text-2xl md:text-3xl font-black tracking-wide leading-normal pb-1 pt-0.5 bg-gradient-to-r from-[#FFF0D4] via-[#E6C280] to-[#C19A6B] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(230,194,128,0.35)] group-hover:scale-105 transition-transform duration-300 select-none whitespace-nowrap">
                وجد الأصايل
              </span>
            </div>
          </a>

          {/* Desktop Links with Magnetic Hover */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseMove={handleMagneticMove}
                onMouseLeave={handleMagneticLeave}
                data-cursor="انتقال"
                className="relative p-2 text-xs font-sans-clean font-medium text-[var(--text-secondary)] hover:text-[#C19A6B] transition-colors duration-200 rounded-full hover:bg-[var(--bg-elevated)]/60"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
            {/* Location & Experience Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-elevated)] border border-[#C19A6B]/30 text-[11px] text-[var(--text-secondary)] font-sans-clean font-light">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C19A6B] animate-pulse" />
              <span>الدمام والخبر • خبرة +٣٠ سنة</span>
            </div>

            {/* Direct Call Button */}
            <a
              id="nav-call-btn"
              href="tel:0536402106"
              data-cursor="اتصال"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-sans-clean font-bold gold-gradient-bg text-[#050505] shadow-[0_0_15px_rgba(193,154,107,0.35)] hover:shadow-[0_0_25px_rgba(193,154,107,0.5)] active:scale-95 transition-all"
            >
              <Phone size={13} className="text-[#050505]" />
              <span dir="ltr">0536402106</span>
            </a>

            {/* Theme Toggle Button (Dark / Light Mode) */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              data-cursor={isDark ? 'نهاري' : 'ليلي'}
              aria-label={isDark ? 'التبديل إلى الوضع النهاري' : 'التبديل إلى الوضع الليلي'}
              title={isDark ? 'التبديل إلى الوضع النهاري الفاخر' : 'التبديل إلى الوضع الليلي الملكي'}
              className="p-1.5 sm:p-2 rounded-full btn-pill-inactive transition-all duration-300 flex items-center justify-center active:scale-95 text-[#C19A6B] hover:text-[#38BDF8]"
            >
              {isDark ? (
                <Sun size={15} className="text-[#FFAE42] transition-transform duration-500 hover:rotate-90" />
              ) : (
                <Moon size={15} className="text-[#38BDF8] transition-transform duration-500 hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-full btn-pill-inactive transition-all flex items-center justify-center active:scale-95"
              aria-label="فتح القائمة"
            >
              {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-3 sm:inset-x-4 top-16 sm:top-20 z-40 lg:hidden glass-nav rounded-2xl p-4 sm:p-5 border border-[#C19A6B]/35 shadow-2xl text-right max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain"
          >
            <div className="flex flex-col gap-2.5 sm:gap-3">
              <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-white/10">
                <span className="text-xs font-serif-luxury text-[#C19A6B] font-bold">
                  وجد الأصايل • الدمام والخبر
                </span>
                {/* Mobile Theme Switch Button */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="px-2.5 sm:px-3 py-1 rounded-full btn-pill-inactive text-[11px] sm:text-xs flex items-center gap-1.5"
                >
                  {isDark ? <Sun size={12} className="text-[#FFAE42]" /> : <Moon size={12} className="text-[#38BDF8]" />}
                  <span>{isDark ? 'الوضع النهاري' : 'الوضع الليلي'}</span>
                </button>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif-luxury text-base sm:text-lg text-[var(--text-primary)] hover:text-[#C19A6B] transition-colors py-1.5 flex items-center justify-between border-b border-[var(--border-subtle)]"
                >
                  <span>{link.name}</span>
                  <span className="text-[#C19A6B] text-xs">←</span>
                </a>
              ))}

              <div className="pt-2 sm:pt-3 mt-1 flex flex-col gap-2">
                <a
                  href="tel:0536402106"
                  className="w-full text-center py-2.5 sm:py-3 rounded-full gold-gradient-bg text-[#050505] text-xs font-bold font-sans-clean shadow-lg flex items-center justify-center gap-2"
                >
                  <Phone size={14} />
                  <span>اتصال مباشر: 0536402106</span>
                </a>

                <a
                  href="https://wa.me/966536402106"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-full btn-pill-inactive text-xs font-semibold font-sans-clean flex items-center justify-center gap-2"
                >
                  <MessageCircle size={15} className="text-[#25D366]" />
                  <span>مراسلة فورية عبر واتساب</span>
                </a>

                <a
                  href="https://vt.tiktok.com/ZSqwspsQj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2 rounded-full bg-[var(--bg-elevated)] border border-[#C19A6B]/30 text-[var(--text-secondary)] text-[11px] font-sans-clean flex items-center justify-center gap-2 hover:border-[#C19A6B]"
                >
                  <span>شاهد أعمالنا على تيك توك (TikTok)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



