import { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight, Sparkles, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data/studioData';
import { ServiceItem } from '../types';

interface ServicesHorizontalProps {
  onSelectServiceForSample?: (service: ServiceItem) => void;
}

export default function ServicesHorizontal({ onSelectServiceForSample }: ServicesHorizontalProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // Safely scroll ONLY within the horizontal container, never moving the page/window
  const scrollToService = useCallback((index: number) => {
    setActiveIndex(index);
    const cardEl = cardRefs.current[index];
    const container = scrollContainerRef.current;
    if (cardEl && container) {
      const containerRect = container.getBoundingClientRect();
      const cardRect = cardEl.getBoundingClientRect();
      const delta = (cardRect.left + cardRect.width / 2) - (containerRect.left + containerRect.width / 2);
      container.scrollBy({
        left: delta,
        behavior: 'smooth',
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

  // Track if the services section is currently in the viewport
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Only active when at least 20% of the section is visible on screen
      }
    );

    observer.observe(sectionEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 7-second automatic sliding that resets whenever activeIndex changes (e.g. user clicks or scrolls)
  useEffect(() => {
    if (!isInView) return;

    const timer = setTimeout(() => {
      handleNext();
    }, 7000);

    return () => clearTimeout(timer);
  }, [isInView, activeIndex, handleNext]);

  // Track manual scrolling to keep dots synced
  const handleContainerScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;

    let closestIdx = 0;
    let minDiff = Infinity;

    cardRefs.current.forEach((card, idx) => {
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const cardCenter = cardRect.left + cardRect.width / 2;
      const diff = Math.abs(cardCenter - containerCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    setActiveIndex(closestIdx);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-10 sm:py-14 md:py-20 bg-[var(--bg-primary)] overflow-hidden border-t border-[var(--border-subtle)] transition-colors duration-300"
    >
      {/* Background Accent Ambient Radial Glow */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#C19A6B]/5 rounded-full blur-[120px] sm:blur-[160px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 mb-8 sm:mb-12">
        {/* Top Header Row with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-8 text-right">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 sm:mb-3 font-semibold font-sans-clean">
              <Sparkles size={13} />
              <span>خدماتنا المعتمدة بالدمام والخبر</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)]">
              خدمات الدهانات والديكورات
            </h2>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
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
                  : 'w-3 sm:w-4 bg-[var(--border-light)] hover:bg-[#C19A6B]/40'
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
        onScroll={handleContainerScroll}
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
            className={`flex-none w-[86vw] sm:w-[480px] md:w-[540px] snap-center rounded-2xl bg-[var(--bg-surface)] transition-all duration-500 overflow-hidden flex flex-col justify-between group border shadow-[var(--card-shadow)] ${
              activeIndex === index
                ? 'border-[#C19A6B] shadow-[0_0_30px_rgba(193,154,107,0.25)]'
                : 'border-[var(--border-light)] hover:border-[#C19A6B]/40'
            }`}
          >
            {/* Top Media Container with Luxury Tilt Feel */}
            <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-elevated)]">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              {/* Number and Category Badge */}
              <div className="absolute top-4 right-4 left-4 sm:top-5 sm:right-5 sm:left-5 flex justify-between items-center">
                <span className="font-display-luxury text-2xl sm:text-3xl text-[#38BDF8] font-bold">
                  {service.number}
                </span>
                <span className="px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#38BDF8]/30 text-[11px] sm:text-xs text-[#38BDF8] font-sans-clean shadow-sm">
                  {service.category}
                </span>
              </div>

              {/* Specimen Tag */}
              <div className="absolute bottom-3 right-4 sm:bottom-4 sm:right-5 text-[10px] sm:text-xs text-[#A0A0A5] font-mono">
                رمز الخدمة: <span className="text-[#38BDF8] font-bold">{service.sampleCode}</span>
              </div>
            </div>

            {/* Bottom Content Body */}
            <div className="p-5 sm:p-7 flex flex-col justify-between flex-grow">
              <div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[var(--text-primary)] font-normal leading-tight mb-1.5 group-hover:text-[#38BDF8] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-serif-luxury text-xs sm:text-sm md:text-base text-[#C19A6B] italic mb-3 sm:mb-4">
                  &ldquo;{service.tagline}&rdquo;
                </p>
                <p className="text-[11px] sm:text-xs text-[var(--text-secondary)] leading-relaxed mb-4 sm:mb-6 font-light font-sans-clean">
                  {service.description}
                </p>

                {/* Key Material Chips */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-[11px] sm:text-xs text-[var(--text-muted)] block mb-2 font-semibold font-sans-clean">
                    المواد والتقنيات المستخدمة:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.materials.map((mat) => (
                      <span
                        key={mat}
                        className="text-xs px-2.5 py-1 rounded-md bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-light)] font-sans-clean"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Architectural Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-[var(--text-primary)] font-sans-clean">
                      <Check size={12} className="text-[#C19A6B] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => onSelectServiceForSample && onSelectServiceForSample(service)}
                  className="inline-flex items-center gap-2 text-xs text-[#C19A6B] hover:text-[var(--text-primary)] transition-colors duration-300 font-sans-clean font-bold"
                >
                  <Sparkles size={13} />
                  <span>طلب معاينة واستشارة مجانية</span>
                </a>
                <span className="text-[10px] text-[var(--text-muted)] font-sans-clean">
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
