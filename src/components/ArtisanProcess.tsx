import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, Hammer, CheckCircle2, ChevronLeft, ChevronRight, ShieldCheck, Wrench, ArrowLeft, Sparkles, Maximize2, X } from 'lucide-react';
import { ARTISAN_STEPS } from '../data/studioData';

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
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-12 bg-[#070709] border-t border-white/5 overflow-hidden text-right"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 sm:mb-3 font-semibold font-sans-clean">
              <Hammer size={14} className="text-[#C19A6B]" />
              <span>معاينة مراحل العمل الفعلية</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold text-[#EDE8DF]">
              خطوات تنفيذ العمل من البداية للتسليم
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#BDB7AB] leading-relaxed font-sans-clean">
            خطوات عمل دقيقة ومدروسة تبدأ من المعاينة المجانية وتأسيس الأسطح وحتى التسليم النهائي، لضمان أعلى جودة تدوم لسنوات.
          </p>
        </div>

        {/* Mobile Horizontal Quick Step Bar */}
        <div className="md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar pb-3 mb-4 -mx-4 px-4 snap-x snap-mandatory">
          {ARTISAN_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-sans-clean transition-all active:scale-95 snap-start border ${
                  isActive
                    ? 'bg-[#2E241B] border-[#C19A6B] text-white font-bold shadow-[0_0_15px_rgba(193,154,107,0.35)] ring-1 ring-[#C19A6B]'
                    : 'btn-surface-inactive border-white/10 text-[#A69B8D]'
                }`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  isActive ? 'bg-[#C19A6B] text-black' : 'bg-white/10 text-white'
                }`}>
                  {step.step}
                </span>
                <span className="whitespace-nowrap font-medium">{step.name}</span>
              </button>
            );
          })}
        </div>

        {/* Side-by-Side Dual Workstation: Parts on Right, Big Image on Left */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8 items-start">
          {/* Right Column (Arabic RTL): Interactive Steps / Parts List */}
          <div className="md:col-span-5 flex flex-col gap-3 w-full">
            <div className="flex items-center justify-between pb-1 text-xs text-[#C19A6B] font-semibold font-sans-clean">
              <span>اختر أي جزء لعرض صورته الكبيرة بجانبه:</span>
              <span className="font-mono text-[#8C867D] text-[11px]">
                {activeStepIndex + 1} / {ARTISAN_STEPS.length}
              </span>
            </div>

            {ARTISAN_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`text-right p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden group active:scale-[0.99] cursor-pointer w-full text-right ${
                    isActive
                      ? 'bg-[#261E16] border-[#C19A6B] shadow-[0_10px_30px_rgba(193,154,107,0.28)] ring-1 ring-[#C19A6B]'
                      : 'btn-surface-inactive border-white/10 hover:border-[#C19A6B]/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    {/* Thumbnail & Title */}
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden flex-shrink-0 border border-[#C19A6B]/30 bg-black">
                        <img
                          src={step.image}
                          alt={step.name}
                          className={`w-full h-full object-cover transition-transform duration-500 ${
                            isActive ? 'scale-110' : 'group-hover:scale-105 opacity-70'
                          }`}
                        />
                        <span className="absolute bottom-0 right-0 bg-black/85 px-1.5 py-0.5 rounded-tl-md text-[9px] font-mono text-[#E6C280] font-bold">
                          ٠{step.step}
                        </span>
                      </div>

                      <div className="min-w-0 text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-[11px] font-bold font-sans-clean px-2 py-0.5 rounded-full ${
                            isActive ? 'bg-[#C19A6B] text-black' : 'bg-white/10 text-[#C19A6B]'
                          }`}>
                            المرحلة ٠{step.step}
                          </span>
                          <span className="text-[10px] text-[#A69B8D] font-sans-clean flex items-center gap-1">
                            <Clock size={10} className="text-[#C19A6B]" />
                            <span className="truncate max-w-[120px] sm:max-w-[170px]">{step.duration}</span>
                          </span>
                        </div>
                        <h3 className={`font-serif-luxury text-sm sm:text-base font-semibold leading-snug transition-colors ${
                          isActive ? 'text-white' : 'text-[#EDE8DF]'
                        }`}>
                          {step.name}
                        </h3>
                      </div>
                    </div>

                    {/* Active Visual Indicator */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                      {isActive ? (
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#C19A6B] text-black text-[10px] font-bold font-sans-clean shadow-[0_0_12px_rgba(193,154,107,0.5)]">
                          <span>معروضة</span>
                          <ArrowLeft size={13} className="animate-pulse" />
                        </div>
                      ) : (
                        <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#C19A6B]/20 text-[#8C867D] group-hover:text-[#C19A6B] flex items-center justify-center transition-colors">
                          <ChevronLeft size={14} />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description preview */}
                  <p className="mt-2 text-[11px] sm:text-xs text-[#BDB7AB] font-light font-sans-clean leading-relaxed line-clamp-1 pr-[3.75rem]">
                    {step.description}
                  </p>

                  {/* Active bottom border */}
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

          {/* Left Column (Arabic RTL): The Large Prominent Image Directly Beside The Selected Part */}
          <div className="md:col-span-7 w-full md:sticky md:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="rounded-2xl glass-card border border-[#C19A6B]/40 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] flex flex-col"
              >
                {/* Large Image Viewport */}
                <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] lg:h-[500px] bg-[#0A0A0C] overflow-hidden group">
                  <img
                    src={activeStep.image}
                    alt={activeStep.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/40 pointer-events-none" />

                  {/* Top Badges & Controls */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#C19A6B]/50 text-xs font-bold text-[#E6C280] font-sans-clean flex items-center gap-1.5 shadow-lg">
                        <ShieldCheck size={13} className="text-[#C19A6B]" />
                        <span>صورة المرحلة ٠{activeStep.step}: {activeStep.name}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsFullscreen(true)}
                        className="px-2.5 py-1.5 rounded-lg bg-black/75 hover:bg-[#C19A6B] text-white hover:text-black transition-all flex items-center gap-1.5 text-xs font-sans-clean backdrop-blur-md border border-white/10"
                        title="تكبير الصورة بالحجم الكامل"
                      >
                        <Maximize2 size={13} />
                        <span className="hidden sm:inline">تكبير الصورة</span>
                      </button>

                      {/* Previous / Next buttons */}
                      <div className="flex items-center gap-1 bg-black/75 backdrop-blur-md rounded-lg p-1 border border-white/10">
                        <button
                          type="button"
                          onClick={handlePrevStep}
                          className="p-1 rounded hover:bg-[#C19A6B]/30 hover:text-[#C19A6B] text-white/80 transition-colors"
                          title="المرحلة السابقة"
                        >
                          <ChevronRight size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={handleNextStep}
                          className="p-1 rounded hover:bg-[#C19A6B]/30 hover:text-[#C19A6B] text-white/80 transition-colors"
                          title="المرحلة التالية"
                        >
                          <ChevronLeft size={16} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Image Overlay Description */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10">
                    <div className="p-3 sm:p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/10 text-right">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs text-[#C19A6B] font-bold font-sans-clean">
                          تفاصيل تنفيذ المرحلة:
                        </span>
                        <span className="text-[11px] text-[#A69B8D] font-sans-clean">
                          {activeStep.duration}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#EDE8DF] font-sans-clean leading-relaxed">
                        {activeStep.detail}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Information & Materials Bar */}
                <div className="p-4 sm:p-5 bg-[#120F0C] border-t border-[#C19A6B]/25">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 text-xs text-[#C19A6B] font-semibold font-sans-clean mb-1">
                        <Wrench size={13} />
                        <span>المواد والعدد المستخدمة:</span>
                      </div>
                      <p className="text-xs text-[#D5CEC2] font-sans-clean font-medium">
                        {activeStep.materials}
                      </p>
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

      {/* Fullscreen Lightbox Modal for the Large Image */}
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
                <span className="px-3 py-1 rounded-full bg-[#C19A6B] text-black font-bold text-xs font-mono">
                  المرحلة ٠{activeStep.step}
                </span>
                <span className="font-serif-luxury text-base sm:text-xl font-bold text-[#EDE8DF]">
                  {activeStep.name}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsFullscreen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-[#C19A6B] text-white hover:text-black transition-colors"
                title="إغلاق"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center max-w-6xl mx-auto w-full relative">
              <img
                src={activeStep.image}
                alt={activeStep.name}
                className="max-h-[82vh] max-w-full object-contain rounded-xl border border-[#C19A6B]/40 shadow-2xl"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}


