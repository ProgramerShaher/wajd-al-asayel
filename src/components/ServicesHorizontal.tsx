import { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Check, Play, Pause } from 'lucide-react';
import { SERVICES_DATA } from '../data/studioData';
import { ServiceItem } from '../types';

interface ServicesHorizontalProps {
  onSelectServiceForSample?: (service: ServiceItem) => void;
}

export default function ServicesHorizontal({ onSelectServiceForSample }: ServicesHorizontalProps) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Scroll to active index smoothly
  const scrollToService = useCallback((index: number) => {
    setActiveIndex(index);
    const cardEl = cardRefs.current[index];
    if (cardEl && scrollContainerRef.current) {
      cardEl.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % SERVICES_DATA.length;
    scrollToService(nextIndex);
  }, [activeIndex, scrollToService]);

  const handlePrev = useCallback(() => {
    const prevIndex = (activeIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length;
    scrollToService(prevIndex);
  }, [activeIndex, scrollToService]);

  // 5-second automatic navigation timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  return (
    <section
      id="services"
      className="relative w-full py-20 sm:py-28 md:py-36 bg-[#050505] overflow-hidden border-t border-white/5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Background Accent Ambient Radial Glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#C19A6B]/5 rounded-full blur-[120px] sm:blur-[160px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 mb-8 sm:mb-12">
        {/* Top Header Row with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 text-right">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 sm:mb-3 font-semibold font-sans-clean">
              <Sparkles size={13} />
              <span>خدماتنا المعتمدة بالدمام والخبر</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold text-[#EDE8DF]">
              خدمات الدهانات والديكورات
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between sm:justify-end gap-3 sm:gap-4">
            {/* Auto-Slide Indicator & Pause Toggle */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181512] border border-[#C19A6B]/25 text-[11px] text-[#EDE8DF] font-sans-clean">
              <button
                type="button"
                onClick={() => setIsPaused(!isPaused)}
                className="text-[#C19A6B] hover:text-white transition-colors"
                title={isPaused ? 'استئناف التنقل التلقائي' : 'إيقاف مؤقت'}
              >
                {isPaused ? <Play size={12} /> : <Pause size={12} />}
              </button>
              <span className="w-1.5 h-1.5 rounded-full bg-[#C19A6B] animate-pulse" />
              <span>{isPaused ? 'التنقل التلقائي متوقف' : 'تقليب تلقائي كل ٥ ثوانٍ'}</span>
            </div>

            {/* Manual Arrow Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                id="service-scroll-prev"
                onClick={handlePrev}
                aria-label="الخدمة السابقة"
                data-cursor="السابق"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full btn-pill-inactive flex items-center justify-center active:scale-95 shadow-md hover:scale-105 transition-all"
              >
                <ArrowRight size={16} />
              </button>
              <button
                id="service-scroll-next"
                onClick={handleNext}
                aria-label="الخدمة التالية"
                data-cursor="التالي"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full btn-pill-inactive flex items-center justify-center active:scale-95 shadow-md hover:scale-105 transition-all"
              >
                <ArrowLeft size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic 5-Second Progress Bar & Step Dots */}
        <div className="mt-4 flex items-center gap-2">
          {SERVICES_DATA.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => scrollToService(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                activeIndex === idx
                  ? 'w-10 sm:w-14 gold-gradient-bg shadow-[0_0_10px_rgba(193,154,107,0.5)]'
                  : 'w-3 sm:w-4 bg-white/20 hover:bg-white/40'
              }`}
              title={service.title}
              aria-label={`الانتقال إلى ${service.title}`}
            />
          ))}
        </div>
      </div>

      {/* HORIZONTAL SCROLL CAROUSEL CONTAINER */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth flex gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-16 pb-6 sm:pb-8 cursor-grab active:cursor-grabbing text-right snap-x snap-mandatory"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            data-cursor="فحص"
            className={`flex-none w-[86vw] sm:w-[480px] md:w-[540px] snap-center rounded-2xl glass-card transition-all duration-500 overflow-hidden flex flex-col justify-between group ${
              activeIndex === index
                ? 'border border-[#C19A6B] shadow-[0_0_30px_rgba(193,154,107,0.25)]'
                : 'border border-white/10 hover:border-[#C19A6B]/40'
            }`}
          >
            {/* Top Media Container with Luxury Tilt Feel */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0A0C]">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/30" />

              {/* Number and Category Badge */}
              <div className="absolute top-4 right-4 left-4 sm:top-5 sm:right-5 sm:left-5 flex justify-between items-center">
                <span className="font-display-luxury text-2xl sm:text-3xl text-[#C19A6B] font-bold">
                  {service.number}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#050505]/75 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs text-[#E6C280] font-sans-clean">
                  {service.category}
                </span>
              </div>

              {/* Specimen Tag */}
              <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-5 text-[10px] sm:text-xs text-[#A0A0A5] font-mono">
                رمز الخدمة: <span className="text-[#C19A6B] font-bold">{service.sampleCode}</span>
              </div>
            </div>

            {/* Bottom Content Body */}
            <div className="p-5 sm:p-7 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#F5F5F7] font-normal leading-tight mb-1.5 group-hover:text-[#C19A6B] transition-colors">
                  {service.title}
                </h3>
                <p className="font-serif-luxury text-xs sm:text-sm md:text-base text-[#C19A6B]/90 italic mb-3 sm:mb-4">
                  &ldquo;{service.tagline}&rdquo;
                </p>
                <p className="text-[11px] sm:text-xs text-[#A0A0A5] leading-relaxed mb-4 sm:mb-6 font-light font-sans-clean">
                  {service.description}
                </p>

                {/* Key Material Chips */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-[11px] sm:text-xs text-[#8C867D] block mb-2 font-semibold font-sans-clean">
                    المواد والتقنيات المستخدمة:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.materials.map((mat) => (
                      <span
                        key={mat}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#25211D] text-[#EDE8DF] border border-[#C19A6B]/30 font-sans-clean"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architectural Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[#EDE8DF] font-sans-clean">
                      <Check size={12} className="text-[#C19A6B] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => onSelectServiceForSample && onSelectServiceForSample(service)}
                  className="inline-flex items-center gap-2 text-xs text-[#C19A6B] hover:text-[#FFFFFF] transition-colors duration-300 font-sans-clean font-bold"
                >
                  <Sparkles size={13} />
                  <span>طلب معاينة واستشارة مجانية</span>
                </a>
                <span className="text-[10px] text-[#A0988A] font-sans-clean">
                  معاينة موقع بالدمام والخبر
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
