import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenSampleKit?: () => void;
}

export default function Navbar({ onOpenSampleKit }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio ambient tone synthesis
  const toggleAmbientSound = () => {
    if (!isPlayingAudio) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 3);
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        const freqs = [73.42, 110.00, 174.61, 261.63];
        freqs.forEach((freq) => {
          const osc = ctx.createOscillator();
          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.value = 380;

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, ctx.currentTime);
          osc.connect(filter);
          filter.connect(masterGain);
          osc.start();
        });

        setIsPlayingAudio(true);
      } catch (e) {
        console.warn('Audio context initialization prevented:', e);
      }
    } else {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1);
        setTimeout(() => {
          audioCtxRef.current?.close();
          setIsPlayingAudio(false);
        }, 1100);
      } else {
        setIsPlayingAudio(false);
      }
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 py-3 md:py-5 px-3 md:px-10 flex justify-center ${
          scrolled ? 'translate-y-0' : 'translate-y-1'
        }`}
      >
        <nav
          className={`w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
            scrolled
              ? 'glass-nav shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] border-[#C19A6B]/35'
              : 'bg-[#0E0D0C]/85 backdrop-blur-md border border-[#C19A6B]/25'
          }`}
        >
          {/* Atelier Monogram & Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 sm:gap-3 group"
            data-cursor="الرئيسية"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0">
              <svg width="36" height="36" viewBox="0 0 100 100" fill="none" className="transition-transform duration-700 group-hover:rotate-45">
                <circle cx="50" cy="50" r="44" stroke="#C19A6B" strokeWidth="1.2" strokeOpacity="0.4" />
                <circle cx="50" cy="50" r="36" stroke="#C19A6B" strokeWidth="1.8" className="animate-gold-dash" />
                <text
                  x="50"
                  y="58"
                  textAnchor="middle"
                  fill="#C19A6B"
                  fontFamily="Amiri, serif"
                  fontSize="28"
                  fontWeight="bold"
                >
                  وا
                </text>
              </svg>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-serif-luxury text-base sm:text-lg font-bold text-[#F5F5F7] group-hover:text-[#C19A6B] transition-colors leading-tight">
                وجد الأصايل
              </span>
              <span className="text-[10px] sm:text-[11px] text-[#C19A6B] font-sans-clean leading-tight">
                دهانات • ديكورات • جبس بورد • سواتر
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
                className="relative px-3 py-1.5 text-xs font-sans-clean font-medium text-[#EDE8DF] hover:text-[#C19A6B] transition-colors duration-200 rounded-full hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Location & Experience Badge */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#201C18] border border-[#C19A6B]/30 text-[11px] text-[#EDE8DF] font-sans-clean font-light">
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

            {/* Direct WhatsApp Button */}
            <a
              id="nav-whatsapp-btn"
              href="https://wa.me/966536402106"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="واتساب"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-sans-clean font-semibold btn-pill-inactive shadow-sm active:scale-95 transition-all text-[#25D366]"
              title="مراسلة عبر واتساب"
            >
              <MessageCircle size={14} className="text-[#25D366]" />
              <span className="hidden md:inline text-[#EDE8DF]">واتساب</span>
            </a>

            {/* Ambient Sound Toggle */}
            <button
              id="ambient-sound-toggle"
              onClick={toggleAmbientSound}
              data-cursor={isPlayingAudio ? 'كتم' : 'صوت'}
              aria-label="تبديل الموسيقى المحيطية"
              className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center active:scale-95 ${
                isPlayingAudio
                  ? 'gold-gradient-bg text-[#050505] shadow-[0_0_15px_rgba(193,154,107,0.4)]'
                  : 'btn-pill-inactive'
              }`}
            >
              {isPlayingAudio ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            {/* Mobile Hamburger */}
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-full btn-pill-inactive transition-all flex items-center justify-center active:scale-95"
              aria-label="فتح القائمة"
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
            className="fixed inset-x-4 top-20 z-40 lg:hidden glass-nav rounded-2xl p-5 border border-[#C19A6B]/35 shadow-2xl text-right bg-[#100E0C]/95"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-serif-luxury text-[#C19A6B]">
                  وجد الأصايل • الدمام والخبر
                </span>
                <span className="text-[11px] text-[#EDE8DF] font-sans-clean">
                  خبرة أكثر من ٣٠ سنة
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif-luxury text-lg text-[#F5F5F7] hover:text-[#C19A6B] transition-colors py-1.5 flex items-center justify-between border-b border-white/5"
                >
                  <span>{link.name}</span>
                  <span className="text-[#C19A6B] text-xs">←</span>
                </a>
              ))}

              <div className="pt-3 mt-1 flex flex-col gap-2.5">
                <a
                  href="tel:0536402106"
                  className="w-full text-center py-3 rounded-full gold-gradient-bg text-[#050505] text-xs font-bold font-sans-clean shadow-lg flex items-center justify-center gap-2"
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
                  className="w-full text-center py-2 rounded-full bg-[#181512] border border-[#C19A6B]/30 text-[#EDE8DF] text-[11px] font-sans-clean flex items-center justify-center gap-2 hover:border-[#C19A6B]"
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
