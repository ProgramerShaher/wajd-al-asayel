import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Phone, MapPin, CheckCircle2, ArrowDown, Eye, Sun, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface ArchitecturalScene {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  lightingType: string;
  details: string;
}

const ARCHITECTURAL_SCENES: ArchitecturalScene[] = [
  {
    id: 'villa-modern-salon',
    name: 'صالة فيلا مودرن',
    category: 'جبس بورد وإنارة ليد مخفية 3000K',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=2400&auto=format&fit=crop',
    lightingType: 'إضاءة دافئة معمارية 3000K',
    details: 'أسقف جبس مستعارة بإنارة مخفية، تكسيات جدارية خشبية، ومساحات مفتوحة فخمة',
  },
  {
    id: 'majlis-wood-marble',
    name: 'مجلس ملكي فخم',
    category: 'بديل الرخام وبديل الخشب وإضاءة خطية',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=2400&auto=format&fit=crop',
    lightingType: 'إضاءة ليد مخفية ذهبية',
    details: 'خلفية شاشة بديل رخام عروق ذهبية مع شرائح بديل خشب وإضاءات سبوت لايت',
  },
  {
    id: 'reception-classic-modern',
    name: 'صالون استقبال حديث',
    category: 'بانوهات فوم ودهانات ناعمة معمارية',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=2400&auto=format&fit=crop',
    lightingType: 'إضاءة سينمائية ليلية',
    details: 'دهانات جوتن أصلية هادئة، إطارات فوم كلاسيكية، وثريات مسائية راقية',
  },
];

type LightMood = 'warm-gold' | 'soft-luxe' | 'twilight';

export default function HeroSection() {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [is3DActive, setIs3DActive] = useState(true);
  const [lightMood, setLightMood] = useState<LightMood>('warm-gold');
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentScene = ARCHITECTURAL_SCENES[activeSceneIndex];

  // 3D Perspective interactive tilt handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Cycle through 3D villa scenes
  const nextScene = () => {
    setActiveSceneIndex((prev) => (prev + 1) % ARCHITECTURAL_SCENES.length);
  };

  // Toggle ambient light mood
  const cycleLightMood = () => {
    setLightMood((prev) => {
      if (prev === 'warm-gold') return 'soft-luxe';
      if (prev === 'soft-luxe') return 'twilight';
      return 'warm-gold';
    });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 md:px-16 overflow-hidden bg-[#050505] selection:bg-[#C19A6B]/30"
    >
      {/* 3D LUXURY ARCHITECTURAL INTERIOR SHOWCASE BACKGROUND */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        {/* Continuous 3D Camera Orbit Container */}
        <div
          style={{
            transform: `perspective(1200px) rotateX(${tilt.y * 0.8}deg) rotateY(${tilt.x * 0.8}deg) translateZ(0)`,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="relative w-full h-full preserve-3d"
        >
          {/* Main 3D Moving Architecture Layer */}
          <div
            className={`absolute inset-[-4%] w-[108%] h-[108%] bg-cover bg-center transition-all duration-1000 ${
              is3DActive ? 'animate-camera-3d' : ''
            }`}
            style={{
              backgroundImage: `url(${currentScene.imageUrl})`,
              filter:
                lightMood === 'warm-gold'
                  ? 'brightness(0.92) contrast(1.08) saturate(1.15)'
                  : lightMood === 'soft-luxe'
                  ? 'brightness(1.02) contrast(1.04) saturate(1.05)'
                  : 'brightness(0.78) contrast(1.15) saturate(1.25)',
            }}
          />

          {/* Dynamic 3D Architectural Lighting Overlays */}
          {/* Layer 1: Ceiling Gypsum Hidden LED Cove Lighting (Warm Golden Glow 3000K) */}
          <div
            className={`absolute top-0 left-0 right-0 h-[40%] bg-gradient-to-b ${
              lightMood === 'warm-gold'
                ? 'from-[#FFAE42]/25 via-[#C19A6B]/15 to-transparent'
                : lightMood === 'soft-luxe'
                ? 'from-[#FFF0D4]/20 via-[#E6C280]/10 to-transparent'
                : 'from-[#D99A45]/30 via-[#7A4B1A]/20 to-transparent'
            } pointer-events-none animate-ambient-pulse`}
          />

          {/* Layer 2: Moving 3D Light Sweep across the Wall Panels & Ceilings */}
          <div className="absolute inset-0 w-[60%] h-full bg-gradient-to-r from-transparent via-[#FFE8B8]/12 to-transparent pointer-events-none animate-light-sweep" />

          {/* Layer 3: Spotlights & Wall Wash Accent Lights */}
          <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#E6C280]/15 rounded-full blur-[100px] pointer-events-none animate-ambient-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#C19A6B]/10 rounded-full blur-[120px] pointer-events-none" />

          {/* Floating Warm Golden Micro-particles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
            <span className="absolute top-[20%] right-[30%] w-1.5 h-1.5 rounded-full bg-[#FFE2A4] blur-[1px] animate-ping duration-[3500ms]" />
            <span className="absolute top-[45%] left-[25%] w-2 h-2 rounded-full bg-[#E6C280] blur-[1px] animate-pulse duration-[4200ms]" />
            <span className="absolute top-[70%] right-[15%] w-1 h-1 rounded-full bg-[#FFF0D4] blur-[0.5px] animate-ping duration-[5000ms]" />
          </div>
        </div>

        {/* Multi-layered luxury depth masks: preserves legibility while keeping 3D house decor clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/75 via-[#050505]/40 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,154,107,0.06)_0%,rgba(5,5,5,0.45)_70%,#050505_100%)]" />
      </div>

      {/* Top Editorial Bar: Location & Experience */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-2.5 sm:gap-4 border-b border-white/5 pb-4 sm:pb-6 text-[11px] sm:text-xs text-[#EDE8DF] font-sans-clean text-center sm:text-right"
      >
        <div className="flex items-center gap-2">
          <MapPin size={13} className="text-[#C19A6B] flex-shrink-0" />
          <span>الدمام • الخبر • الظهران • المنطقة الشرقية</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-[#C19A6B] font-semibold">
          <CheckCircle2 size={13} />
          <span>خبرة في تنفيذ الدهانات والديكورات أكثر من ٣٠ سنة</span>
        </div>
      </motion.div>

      {/* Hero Centerpiece: Giant Brand Typography with 3D Depth */}
      <div className="relative z-10 my-auto w-full max-w-7xl mx-auto py-8 sm:py-12 md:py-16">
        <motion.div
          style={{
            transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transition: 'transform 0.25s ease-out',
          }}
          className="relative flex flex-col items-center text-center preserve-3d"
        >
          {/* Badge: 3D Showcase Indicator */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4 sm:mb-6 flex items-center gap-2 px-4 sm:px-6 py-1.5 rounded-full border border-[#C19A6B]/40 bg-[#1A1612]/85 backdrop-blur-md max-w-[94vw] shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <Sparkles size={12} className="text-[#C19A6B] flex-shrink-0 animate-pulse" />
            <span className="text-xs sm:text-sm text-[#EDE8DF] font-medium font-sans-clean truncate">
              معلم دهانات وديكورات وجبس بورد وسواتر
            </span>
          </motion.div>

          {/* GIANT DISPLAY TYPOGRAPHY: Floating with 3D Depth */}
          <div className="relative w-full overflow-hidden select-none py-1 sm:py-2">
            <div className="relative mx-auto">
              <div className="relative flex items-center justify-center">
                <h1
                  className="font-display-luxury text-5xl sm:text-7xl md:text-[9vw] lg:text-[10vw] leading-[1.08] tracking-tight font-bold text-center px-1"
                  style={{
                    backgroundImage: `linear-gradient(180deg, #FFFFFF 0%, #F5E6C8 40%, #C19A6B 100%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 0 50px rgba(193,154,107,0.3)',
                  }}
                >
                  وجد الأصايل
                </h1>
              </div>

              {/* Glowing Outline under-shadow */}
              <div
                aria-hidden="true"
                className="absolute inset-0 font-display-luxury text-5xl sm:text-7xl md:text-[9vw] lg:text-[10vw] leading-[1.08] tracking-tight font-bold text-center pointer-events-none opacity-20 blur-md text-[#C19A6B] px-1"
              >
                وجد الأصايل
              </div>
            </div>
          </div>

          {/* Subtitle in Arabic */}
          <div className="text-xs sm:text-base font-sans-clean font-semibold tracking-wide text-[#C19A6B] mt-2">
            الدمام • الخبر • تنفيذ وتشطيب الفلل والقصور والشقق والمحلات
          </div>

          {/* Direct Scope Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 sm:mt-7 max-w-3xl mx-auto px-2"
          >
            <p className="font-serif-luxury text-lg sm:text-2xl md:text-3xl text-[#EDE8DF] font-normal leading-relaxed">
              تنفيذ كافة أعمال الدهانات الداخلية والخارجية، بديل الخشب والرخام، الفوم، الجبس بورد، والسواتر والمظلات بأعلى دقة وسرعة في الإنجاز.
            </p>
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-[#BDB7AB] font-sans-clean">
              معاينة فورية ورفع مقاسات مجاناً مع التزام تام بجودة المواد والمواعيد
            </p>
          </motion.div>

          {/* Quick Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 sm:mt-9 flex flex-col items-center gap-4 w-full max-w-md sm:max-w-none px-2"
          >
            {/* Quick Iconic Action Dock */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 py-2">
              {/* Direct Phone Call Icon */}
              <a
                id="hero-call-now-btn"
                href="tel:0536402106"
                data-cursor="اتصال"
                aria-label="اتصال هاتفي مباشر"
                title="اتصال هاتفي مباشر"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full gold-gradient-bg text-[#050505] flex items-center justify-center shadow-[0_0_25px_rgba(193,154,107,0.45)] hover:shadow-[0_0_35px_rgba(193,154,107,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Phone size={22} className="text-[#050505]" />
              </a>

              {/* WhatsApp Chat Icon */}
              <a
                id="hero-whatsapp-btn"
                href="https://wa.me/966536402106"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="واتساب"
                aria-label="مراسلة واتساب"
                title="مراسلة واتساب"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.45)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>

              {/* TikTok Portfolio Icon */}
              <a
                id="hero-tiktok-btn"
                href="https://vt.tiktok.com/ZSqwspsQj/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="تيك توك"
                aria-label="حساب تيك توك"
                title="تيك توك"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#111113] border border-white/20 text-white flex items-center justify-center shadow-[0_0_20px_rgba(254,44,85,0.25)] hover:shadow-[0_0_35px_rgba(254,44,85,0.55)] hover:border-[#FE2C55] hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.86-4.49V8.58a8.31 8.31 0 0 0 4.91 1.62V6.69z" />
                </svg>
              </a>
            </div>

            {/* 3D Showcase & Lighting Controls Dock */}
            <div className="flex flex-wrap justify-center items-center gap-2 pt-2 text-[10px] sm:text-[11px] font-sans-clean">
              {/* Scene Switcher */}
              <button
                type="button"
                onClick={nextScene}
                data-cursor="تبديل المشهد"
                className="flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full btn-pill-inactive transition-all active:scale-95 shadow-sm"
                title="استعراض زوايا وديكورات الفيلا"
              >
                <Eye size={12} className="text-[#C19A6B]" />
                <span>المشهد: {currentScene.name}</span>
                <span className="text-[#C19A6B] mr-1">({activeSceneIndex + 1}/3 ⟵)</span>
              </button>

              {/* Lighting Mood Switcher */}
              <button
                type="button"
                onClick={cycleLightMood}
                data-cursor="الإضاءة"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full btn-pill-inactive transition-all active:scale-95 shadow-sm"
                title="تغيير نمط الإضاءة المعمارية"
              >
                <Sun size={12} className="text-[#C19A6B]" />
                <span>
                  {lightMood === 'warm-gold'
                    ? 'إضاءة دافئة 3000K'
                    : lightMood === 'soft-luxe'
                    ? 'إضاءة نهارية راقية'
                    : 'إضاءة ليلية سينمائية'}
                </span>
              </button>

              {/* 3D Motion Toggle */}
              <button
                type="button"
                onClick={() => setIs3DActive(!is3DActive)}
                data-cursor="حركة 3D"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full btn-pill-inactive transition-all active:scale-95 shadow-sm"
                title={is3DActive ? 'إيقاف حركة الكاميرا ثلاثية الأبعاد' : 'تشغيل حركة الكاميرا ثلاثية الأبعاد'}
              >
                <Compass size={12} className={`text-[#C19A6B] ${is3DActive ? 'animate-spin' : ''}`} style={{ animationDuration: '10s' }} />
                <span>{is3DActive ? 'حركة 3D: نشطة' : 'حركة 3D: متوقفة'}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Editorial Anchor */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.8 }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-white/5 text-xs text-[#EDE8DF] font-sans-clean text-center md:text-right"
      >
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 sm:gap-4">
          <span className="text-[#C19A6B] font-semibold">تخصصاتنا:</span>
          <span>دهانات داخلية وخارجية</span>
          <span className="text-white/20">•</span>
          <span>بديل خشب وبديل رخام وفوم</span>
          <span className="text-white/20">•</span>
          <span>جبس بورد وأسقف معلقة</span>
          <span className="text-white/20">•</span>
          <span>سواتر ومظلات</span>
        </div>

        {/* Scroll Pill with Gold Dash SVG Line */}
        <a
          href="#services"
          data-cursor="خدماتنا"
          className="group flex items-center gap-2.5 sm:gap-3 text-xs text-[#C19A6B] hover:text-[#EDE8DF] transition-colors font-sans-clean"
        >
          <span>استعراض كافة الخدمات</span>
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C19A6B]/30 flex items-center justify-center group-hover:border-[#C19A6B] transition-colors">
            <svg width="24" height="24" viewBox="0 0 40 40" className="absolute inset-0">
              <circle cx="20" cy="20" r="17" fill="none" stroke="#C19A6B" strokeWidth="1" className="animate-gold-dash" />
            </svg>
            <ArrowDown size={11} className="text-[#C19A6B] transition-transform group-hover:translate-y-0.5" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}

