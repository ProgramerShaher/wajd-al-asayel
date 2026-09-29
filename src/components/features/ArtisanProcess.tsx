import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Hammer, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck, Wrench, Sparkles, Maximize2, X } from 'lucide-react';
import { ARTISAN_STEPS } from '@/data/studioData';

export default function ArtisanProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const activeStep = ARTISAN_STEPS[activeStepIndex];

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % ARTISAN_STEPS.length);
  };

  const handlePrevStep = () => {
    setActiveStepIndex((prev) => (prev - 1 + ARTISAN_STEPS.length) % ARTISAN_STEPS.length);
  };

  return (
    <section
      id="process"
      className="relative w-full py-10 sm:py-14 md:py-20 px-3.5 sm:px-6 md:px-12 lg:px-16 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] overflow-hidden text-right transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-5 mb-6 sm:mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 font-semibold font-sans-clean">
              <Hammer size={13} className="text-[#C19A6B]" />
              <span>معاينة مراحل العمل الفعلية</span>
            </div>
            <h2 className="font-serif-luxury text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
              خطوات تنفيذ العمل من <span className="text-[#C19A6B]">البداية للتسليم</span>
            </h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans-clean">
            خطوات عمل دقيقة تبدأ من المعاينة المجانية وحتى التسليم النهائي لضمان أعلى جودة.
          </p>
        </div>

        {/* ===== MOBILE LAYOUT ===== */}
        <div className="md:hidden flex flex-col gap-4">

          {/* Step Selector - horizontal pill tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 -mx-3.5 px-3.5 snap-x">
            {ARTISAN_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex-shrink-0 snap-start flex items-center gap-2 px-3 py-1.5 xs:py-2 rounded-full text-xs font-sans-clean transition-all border ${
                    isActive
                      ? 'bg-[#C19A6B] text-black font-bold border-[#C19A6B] shadow-[0_0_12px_rgba(193,154,107,0.4)]'
                      : 'bg-[var(--bg-surface)] border-[var(--border-light)] text-[var(--text-muted)]'
                  }`}
                >
                  <span className={`w-4.5 h-4.5 rounded-full text-[10px] font-bold flex items-center justify-center ${
                    isActive ? 'bg-black/20 text-black' : 'bg-[var(--bg-elevated)] text-[var(--text-secondary)]'
                  }`}>
                    {step.step}
                  </span>
                  <span className="whitespace-nowrap">{step.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Step Image + Info - Mobile */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-[var(--bg-surface)] border border-[#C19A6B]/40 overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] overflow-hidden group flex">
                {activeStep.images.map((img, i) => (
                  <img key={i}
                    src={img}
                    alt={`${activeStep.name} - مقاول دهانات الشرقية وبديل رخام`}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${activeStep.images.length > 1 ? 'w-1/2 border-r border-[#C19A6B]/20' : ''}`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

                {/* Top Controls */}
                <div className="absolute top-2.5 left-2.5 right-2.5 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#38BDF8]/40 text-[10px] font-bold text-[#38BDF8] font-sans-clean flex items-center gap-1">
                    <ShieldCheck size={11} />
                    <span>المرحلة {activeStep.step}: {activeStep.name}</span>
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setIsFullscreen(true)}
                      className="p-1.5 rounded-lg bg-black/75 hover:bg-[#38BDF8] text-white hover:text-black transition-all backdrop-blur-md border border-white/10"
                      aria-label="تكبير الصورة"
                    >
                      <Maximize2 size={12} />
                    </button>
                    <div className="flex items-center gap-0.5 bg-black/75 backdrop-blur-md rounded-lg p-0.5 border border-white/10">
                      <button onClick={handlePrevStep} className="p-1 rounded hover:bg-[#38BDF8]/30 text-white/80 transition-colors" aria-label="المرحلة السابقة">
                        <ChevronRight size={14} />
                      </button>
                      <button onClick={handleNextStep} className="p-1 rounded hover:bg-[#38BDF8]/30 text-white/80 transition-colors" aria-label="المرحلة التالية">
                        <ChevronLeft size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-2.5 sm:p-3 z-10">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-right">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-[10px] text-[#38BDF8] font-bold font-sans-clean">تفاصيل المرحلة:</span>
                      <span className="text-[10px] text-[var(--text-muted)] font-sans-clean flex items-center gap-1">
                        <Clock size={9} />
                        {activeStep.duration}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/85 font-sans-clean leading-relaxed line-clamp-2">{activeStep.detail}</p>
                  </div>
                </div>
              </div>

              {/* Materials bar */}
              <div className="p-3 sm:p-3.5 bg-[var(--bg-surface)] border-t border-[#C19A6B]/25 flex items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex-1 text-right min-w-0">
                  <div className="flex items-center gap-1 text-[10px] text-[#C19A6B] font-semibold font-sans-clean mb-0.5">
                    <Wrench size={11} />
                    <span>المواد المستخدمة:</span>
                  </div>
                  <p className="text-[10px] text-[var(--text-secondary)] font-sans-clean truncate">{activeStep.materials}</p>
                </div>
                <a
                  href="#contact"
                  className="flex-shrink-0 px-3 py-1.5 sm:py-2 rounded-full gold-gradient-bg text-black text-[10px] font-bold font-sans-clean flex items-center gap-1 shadow-sm"
                >
                  <Sparkles size={10} />
                  <span>طلب تنفيذ</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Steps quick list - Mobile */}
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
            {ARTISAN_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-right p-2.5 sm:p-3 rounded-xl border transition-all duration-300 flex items-center gap-2.5 ${
                    isActive
                      ? 'bg-[var(--bg-elevated)] border-[#C19A6B] shadow-[0_4px_16px_rgba(193,154,107,0.2)] ring-1 ring-[#C19A6B]'
                      : 'bg-[var(--bg-surface)] border-[var(--border-light)] hover:border-[#C19A6B]/40'
                  }`}
                >
                  <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-[#C19A6B]/30">
                    <img src={step.images[0]} alt={step.name} loading="lazy" className="w-full h-full object-cover" decoding="async" />
                    <span className="absolute bottom-0 right-0 bg-black/85 px-1 py-0.5 text-[8px] font-mono text-[#E6C280] font-bold">{step.step}</span>
                  </div>
                  <div className="min-w-0 flex-1 text-right">
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full font-sans-clean ${
                      isActive ? 'bg-[#C19A6B] text-black' : 'bg-[var(--bg-elevated)] text-[#C19A6B]'
                    }`}>
                      مرحلة {step.step}
                    </span>
                    <p className="font-serif-luxury text-xs text-[var(--text-primary)] font-semibold leading-tight mt-0.5 line-clamp-2">{step.name}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT ===== */}
        <div className="hidden md:grid grid-cols-12 gap-6 lg:gap-8 items-start">

          {/* Right column: Step list */}
          <div className="col-span-5 flex flex-col gap-2.5">
            <div className="flex items-center justify-between pb-1 text-xs text-[#C19A6B] font-semibold font-sans-clean">
              <span>اختر مرحلة لعرض صورتها:</span>
              <span className="font-mono text-[var(--text-muted)] text-[11px]">{activeStepIndex + 1} / {ARTISAN_STEPS.length}</span>
            </div>

            {ARTISAN_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-right p-3.5 rounded-2xl border transition-all duration-300 relative overflow-hidden group w-full ${
                    isActive
                      ? 'bg-[var(--bg-elevated)] border-[#C19A6B] shadow-[0_8px_24px_rgba(193,154,107,0.2)] ring-1 ring-[#C19A6B]'
                      : 'bg-[var(--bg-surface)] border-[var(--border-light)] hover:border-[#C19A6B]/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-[#C19A6B]/30">
                        <img src={step.images[0]}
                          alt={`${step.name} ديكورات الدمام`}
                          loading="lazy"
                          className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-105 opacity-75'}`} decoding="async" />
                        <span className="absolute bottom-0 right-0 bg-black/85 px-1 py-0.5 text-[9px] font-mono text-[#E6C280] font-bold">٠{step.step}</span>
                      </div>
                      <div className="min-w-0 text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[10px] font-bold font-sans-clean px-2 py-0.5 rounded-full ${
                            isActive ? 'bg-[#C19A6B] text-black' : 'bg-[var(--bg-elevated)] text-[#C19A6B]'
                          }`}>المرحلة ٠{step.step}</span>
                          <span className="text-[10px] text-[var(--text-muted)] font-sans-clean flex items-center gap-0.5">
                            <Clock size={9} className="text-[#C19A6B]" />
                            <span className="truncate max-w-[110px]">{step.duration}</span>
                          </span>
                        </div>
                        <h3 className={`font-serif-luxury text-sm font-semibold leading-snug ${
                          isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                        }`}>{step.name}</h3>
                        <p className="mt-1 text-[11px] text-[var(--text-muted)] font-sans-clean leading-relaxed line-clamp-1">{step.description}</p>
                      </div>
                    </div>

                    {isActive && (
                      <div className="flex-shrink-0">
                        <div className="px-2 py-1 rounded-full bg-[#C19A6B] text-black text-[10px] font-bold font-sans-clean shadow-[0_0_10px_rgba(193,154,107,0.4)]">
                          ◀ معروضة
                        </div>
                      </div>
                    )}
                  </div>

                  {isActive && (
                    <motion.div
                      layoutId="active-step-bar"
                      className="absolute bottom-0 left-0 right-0 h-[2.5px] gold-gradient-bg"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Left column: Large image */}
          <div className="col-span-7 md:sticky md:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="rounded-2xl bg-[var(--bg-surface)] border border-[#C19A6B]/40 overflow-hidden shadow-xl flex flex-col"
              >
                <div className="relative w-full h-[320px] sm:h-[420px] lg:h-[480px] bg-[var(--bg-elevated)] overflow-hidden group flex">
                  {activeStep.images.map((img, i) => (
                    <img key={i}
                      src={img}
                      alt={`${activeStep.name} - مقاول دهانات وديكور الشرقية`}
                      loading="lazy"
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${activeStep.images.length > 1 ? 'w-1/2 border-r border-[#C19A6B]/20' : ''}`}
                      decoding="async"
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35 pointer-events-none" />

                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#38BDF8]/40 text-xs font-bold text-[#38BDF8] font-sans-clean flex items-center gap-1.5">
                      <ShieldCheck size={13} />
                      <span>صورة المرحلة ٠{activeStep.step}: {activeStep.name}</span>
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsFullscreen(true)}
                        className="px-2.5 py-1.5 rounded-lg bg-black/75 hover:bg-[#38BDF8] text-white hover:text-black transition-all flex items-center gap-1.5 text-xs font-sans-clean backdrop-blur-md border border-white/10"
                      >
                        <Maximize2 size={13} />
                        <span>تكبير</span>
                      </button>
                      <div className="flex items-center gap-1 bg-black/75 backdrop-blur-md rounded-lg p-1 border border-white/10">
                        <button onClick={handlePrevStep} className="p-1 rounded hover:bg-[#38BDF8]/30 hover:text-[#38BDF8] text-white/80 transition-colors">
                          <ChevronRight size={16} />
                        </button>
                        <button onClick={handleNextStep} className="p-1 rounded hover:bg-[#38BDF8]/30 hover:text-[#38BDF8] text-white/80 transition-colors">
                          <ChevronLeft size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="p-3.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-right">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs text-[#38BDF8] font-bold font-sans-clean">تفاصيل تنفيذ المرحلة:</span>
                        <span className="text-[11px] text-[var(--text-muted)] font-sans-clean">{activeStep.duration}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-white/90 font-sans-clean leading-relaxed">{activeStep.detail}</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-5 bg-[var(--bg-surface)] border-t border-[#C19A6B]/25">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 text-xs text-[#C19A6B] font-semibold font-sans-clean mb-1">
                        <Wrench size={13} />
                        <span>المواد والعدد المستخدمة:</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] font-sans-clean font-medium">{activeStep.materials}</p>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full gold-gradient-bg text-[#050505] font-bold text-xs font-sans-clean transition-all active:scale-95 shadow-[0_0_15px_rgba(193,154,107,0.3)] flex-shrink-0"
                    >
                      <Sparkles size={13} />
                      <span>طلب تنفيذ هذه المرحلة</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex flex-col p-4 sm:p-6"
            onClick={() => setIsFullscreen(false)}
          >
            <div className="flex items-center justify-between text-white pb-4 max-w-6xl mx-auto w-full">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#C19A6B] text-black font-bold text-xs font-mono">المرحلة ٠{activeStep.step}</span>
                <span className="font-serif-luxury text-base sm:text-xl font-bold text-white/90">{activeStep.name}</span>
              </div>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#C19A6B] text-white hover:text-black transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 flex gap-4 items-center justify-center max-w-6xl mx-auto w-full">
              {activeStep.images.map((img, i) => (
                <img key={i}
                  src={img}
                  alt={activeStep.name}
                  loading="lazy"
                  className="max-h-[82vh] max-w-full object-contain rounded-xl border border-[#C19A6B]/40 shadow-2xl flex-1" decoding="async" />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
