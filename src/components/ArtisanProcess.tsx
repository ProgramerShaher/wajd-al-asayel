import { useState } from 'react';
import { motion } from 'motion/react';
import { Clock, Hammer } from 'lucide-react';
import { ARTISAN_STEPS } from '../data/studioData';

export default function ArtisanProcess() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section
      id="process"
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-16 bg-[#070709] border-t border-white/5 overflow-hidden text-right"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 sm:mb-3 font-semibold font-sans-clean">
              <Hammer size={14} />
              <span>مراحل العمل باحترافية</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold text-[#EDE8DF]">
              خطوات تنفيذ العمل من البداية للتسليم
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#BDB7AB] leading-relaxed font-sans-clean">
            خطوات عمل دقيقة ومدروسة تبدأ من المعاينة المجانية وتأسيس الأسطح وحتى التسليم النهائي، لضمان أعلى جودة تدوم لسنوات.
          </p>
        </div>

        {/* Mobile Horizontal Quick Step Tabs (visible on mobile only) */}
        <div className="flex sm:hidden items-center gap-2 overflow-x-auto no-scrollbar py-1 mb-6 -mx-4 px-4">
          {ARTISAN_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-sans-clean transition-all active:scale-95 ${
                  isActive
                    ? 'gold-gradient-bg text-[#050505] font-bold shadow-[0_0_15px_rgba(193,154,107,0.3)]'
                    : 'btn-pill-inactive'
                }`}
              >
                <span className="font-mono font-bold">٠{step.step}</span>
                <span className="whitespace-nowrap">{step.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Progressive Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Step Selection Column (Desktop & Tablet) */}
          <div className="hidden sm:flex lg:col-span-5 flex-col gap-3 sm:gap-4">
            {ARTISAN_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  data-cursor="مرحلة"
                  className={`text-right p-4 sm:p-5 md:p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group active:scale-99 ${
                    isActive
                      ? 'bg-[#2E241B] border-[#C19A6B] shadow-[0_10px_35px_rgba(193,154,107,0.25)]'
                      : 'btn-surface-inactive'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="font-display-luxury text-xl sm:text-2xl text-[#C19A6B] font-bold">
                      المرحلة ٠{step.step}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-[#EDE8DF] flex items-center gap-1 font-sans-clean">
                      <Clock size={11} className="text-[#C19A6B]" /> {step.duration}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-lg sm:text-xl md:text-2xl text-[#F5F5F7] font-normal mb-1">
                    {step.name}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-[#D5CEC2] font-light line-clamp-2 font-sans-clean">
                    {step.description}
                  </p>

                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="active-step-bar"
                      className="absolute bottom-0 left-0 right-0 h-[2px] gold-gradient-bg"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Showcase */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-8 md:p-10 rounded-2xl glass-card border border-white/10 relative overflow-hidden"
            >
              {/* Media Preview */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden mb-5 sm:mb-8 border border-white/10 bg-[#0A0A0C]">
                <img
                  src={ARTISAN_STEPS[activeStepIndex].image}
                  alt={ARTISAN_STEPS[activeStepIndex].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex justify-between items-end">
                  <span className="text-[10px] sm:text-[11px] text-[#E6C280] bg-black/85 px-3 py-1 rounded-full backdrop-blur-md font-sans-clean font-semibold">
                    إشراف مباشر وخبرة +٣٠ سنة
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#EDE8DF] font-sans-clean">
                    {ARTISAN_STEPS[activeStepIndex].duration}
                  </span>
                </div>
              </div>

              {/* Textual Deep-Dive */}
              <div>
                <span className="text-xs text-[#C19A6B] block mb-1.5 sm:mb-2 font-semibold font-sans-clean">
                  تفاصيل تنفيذ المرحلة
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl text-[#EDE8DF] font-bold mb-3 sm:mb-4">
                  {ARTISAN_STEPS[activeStepIndex].name}
                </h3>

                <p className="text-sm sm:text-base text-[#EDE8DF] font-sans-clean leading-relaxed mb-4 sm:mb-6">
                  {ARTISAN_STEPS[activeStepIndex].detail}
                </p>

                <div className="pt-4 sm:pt-6 border-t border-white/10">
                  <span className="text-[11px] sm:text-xs text-[#8C867D] block mb-1 font-semibold font-sans-clean">
                    المواد والأدوات المستخدمة:
                  </span>
                  <p className="text-xs sm:text-sm text-[#C19A6B] font-bold font-sans-clean">
                    {ARTISAN_STEPS[activeStepIndex].materials}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
