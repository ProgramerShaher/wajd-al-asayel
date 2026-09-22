import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, MapPin, CheckCircle2, ArrowDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

// 3 Unsplash images for the slideshow
const SLIDESHOW_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80',
    label: 'تصميم داخلي فاخر',
  },
  {
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80',
    label: 'صالة معيشة حديثة',
  },
  {
    url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80',
    label: 'ديكور أنيق وعصري',
  },
];

export default function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const { isDark } = useTheme();

  // Run slideshow: 5s per image looping
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden text-white"
      style={{ background: '#0a0806' }}
    >
      {/* ── BACKGROUND MEDIA ─────────────────────────── */}
      <div className="absolute inset-0 w-full h-full">

        {/* SLIDESHOW LAYER */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`slide-${slideIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: 'linear' }}
              src={SLIDESHOW_IMAGES[slideIndex].url}
              alt={SLIDESHOW_IMAGES[slideIndex].label}
              className="w-full h-full object-cover origin-center"
              style={{ filter: 'brightness(0.7) saturate(1.15)' }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Always-on dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(193,154,107,0.06)_0%,transparent_70%)] pointer-events-none" />
      </div>

      {/* ── CONTENT ──────────────────────────────────── */}
      <div className="relative z-10 min-h-[88vh] flex flex-col justify-between pt-20 sm:pt-28 pb-6 sm:pb-10 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto w-full">

        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-white/10 pb-3 text-[10px] sm:text-xs text-white/55 font-sans-clean"
        >
          <div className="flex items-center gap-2">
            <MapPin size={11} className="text-[#C19A6B] flex-shrink-0" />
            <span>الدمام • الخبر • الظهران • المنطقة الشرقية</span>
          </div>
          <div className="flex items-center gap-2 text-[#C19A6B] font-semibold">
            <CheckCircle2 size={11} />
            <span>خبرة أكثر من ٣٠ سنة في الدهانات والديكورات</span>
          </div>
        </motion.div>

        {/* Center hero content */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-6 sm:py-10">

          {/* Badge */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C19A6B]/40 bg-black/50 backdrop-blur-md shadow-lg"
          >
            <Sparkles size={11} className="text-[#C19A6B] animate-pulse flex-shrink-0" />
            <span className="text-[11px] sm:text-sm text-white/85 font-medium font-sans-clean">
              معلم دهانات • ديكورات • جبس بورد • سواتر
            </span>
          </motion.div>

          {/* Brand name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            className="font-display-luxury font-bold leading-normal text-[14vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] select-none"
            style={{
              backgroundImage: 'linear-gradient(180deg, #FFFFFF 0%, #F5E6C8 45%, #C19A6B 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              paddingBottom: '0.3em',
            }}
          >
            وجد الأصايل
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-lg md:text-xl text-white/80 font-serif-luxury leading-relaxed px-2"
          >
            تنفيذ أعمال الدهانات والديكورات الداخلية، بديل الخشب والرخام، الجبس بورد والأسقف، والسواتر والمظلات بأعلى مستويات الجودة.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-2 text-[11px] sm:text-sm text-white/45 font-sans-clean"
          >
            معاينة مجانية • التزام تام بالمواعيد • جودة مضمونة
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-6 flex items-center justify-center gap-3"
          >
            <a
              href="tel:0536402106"
              aria-label="اتصال"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full gold-gradient-bg flex items-center justify-center shadow-[0_0_24px_rgba(193,154,107,0.5)] hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Phone size={19} className="text-[#050505]" />
            </a>

            <a
              href="https://wa.me/966536402106"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساب"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] flex items-center justify-center shadow-[0_0_24px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
          </motion.div>

          {/* Slideshow mini indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-5 flex items-center gap-2"
          >
            {/* Image dots */}
            {SLIDESHOW_IMAGES.map((_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-500 ${
                  slideIndex === i
                    ? 'w-6 h-2 bg-[#C19A6B] shadow-[0_0_8px_rgba(193,154,107,0.7)]'
                    : 'w-2 h-2 bg-white/25'
                }`}
              />
            ))}
          </motion.div>

          {/* Bottom thumbnail strip — compact cards */}
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
              className="mt-5 flex items-center gap-2 justify-center"
            >
              {SLIDESHOW_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className={`relative rounded-lg overflow-hidden transition-all duration-500 border-2 ${
                    slideIndex === i
                      ? 'border-[#C19A6B] w-16 h-10 sm:w-20 sm:h-14 opacity-100 scale-110 shadow-[0_0_12px_rgba(193,154,107,0.5)]'
                      : 'border-white/20 w-12 h-8 sm:w-14 sm:h-10 opacity-50 scale-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.label}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-white/10 text-[10px] sm:text-xs text-white/55 font-sans-clean"
        >
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
            <span className="text-[#C19A6B] font-semibold">تخصصاتنا:</span>
            <span>دهانات داخلية وخارجية</span>
            <span className="text-white/30">•</span>
            <span>بديل خشب وبديل رخام</span>
            <span className="text-white/30">•</span>
            <span>جبس بورد وأسقف</span>
            <span className="text-white/30">•</span>
            <span>سواتر ومظلات</span>
          </div>
          <a
            href="#services"
            className="group flex items-center gap-2 text-[#C19A6B] hover:text-white transition-colors"
          >
            <span>استعراض الخدمات</span>
            <div className="w-6 h-6 rounded-full border border-[#C19A6B]/50 flex items-center justify-center group-hover:border-[#C19A6B] group-hover:bg-[#C19A6B]/10 transition-all">
              <ArrowDown size={10} className="text-[#C19A6B]" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
