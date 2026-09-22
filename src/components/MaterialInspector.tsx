import React, { useState, useRef } from 'react';
import { Sun, Sparkles, ZoomIn } from 'lucide-react';
import { SWATCH_FINISHES } from '../data/studioData';
import { SwatchFinish } from '../types';

export default function MaterialInspector() {
  const [selectedFinish, setSelectedFinish] = useState<SwatchFinish>(SWATCH_FINISHES[0]);
  const [lightPos, setLightPos] = useState({ x: 50, y: 50 });
  const swatchRef = useRef<HTMLDivElement | null>(null);

  const handleLightMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!swatchRef.current) return;
    const rect = swatchRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setLightPos({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!swatchRef.current || !e.touches[0]) return;
    const rect = swatchRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((touch.clientY - rect.top) / rect.height) * 100));
    setLightPos({ x, y });
  };

  return (
    <section
      id="inspector"
      className="relative w-full py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-16 bg-[var(--bg-secondary)] border-t border-[var(--border-subtle)] overflow-hidden text-right transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="mb-6 sm:mb-10 text-right">
          <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 font-semibold font-sans-clean">
            <Sun size={13} />
            <span>معاينة خامات الديكور والدهان</span>
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight">
            تجربة الإضاءة وانعكاس <span className="text-[#C19A6B]">الخامات</span>
          </h2>
          <p className="mt-2 max-w-lg text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed font-sans-clean">
            حرّك المؤشر أو إصبعك لاختبار مظهر الدهان الديكوري، بديل الرخام، وبديل الخشب تحت تأثير الإضاءة.
          </p>
        </div>

        {/* === MOBILE LAYOUT: stacked === */}
        <div className="flex flex-col gap-4 lg:hidden">

          {/* Interactive Swatch Canvas - Mobile: full width, smaller */}
          <div
            ref={swatchRef}
            onMouseMove={handleLightMove}
            onTouchStart={handleTouchMove}
            onTouchMove={handleTouchMove}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[#C19A6B]/30 shadow-xl cursor-crosshair touch-none"
          >
            <img
              src={selectedFinish.imageUrl}
              alt={selectedFinish.name}
              className="w-full h-full object-cover select-none pointer-events-none"
            />
            {/* Specular light */}
            <div
              className="pointer-events-none absolute inset-0 transition-opacity duration-150"
              style={{
                background: `radial-gradient(circle 200px at ${lightPos.x}% ${lightPos.y}%, rgba(255, 235, 195, ${0.45 * selectedFinish.goldReflectance}) 0%, rgba(193, 154, 107, ${0.2 * selectedFinish.goldReflectance}) 40%, rgba(0, 0, 0, 0.5) 80%)`,
                mixBlendMode: 'color-dodge',
              }}
            />
            {/* Shadow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background: `linear-gradient(${Math.atan2(lightPos.y - 50, lightPos.x - 50) * (180 / Math.PI) + 90}deg, rgba(0,0,0,0.5) 0%, transparent 60%)`,
                mixBlendMode: 'multiply',
              }}
            />
            {/* Cursor dot */}
            <div
              className="pointer-events-none absolute w-7 h-7 rounded-full border-2 border-white/80 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-[0_0_15px_#FFF] will-change-transform"
              style={{ left: `${lightPos.x}%`, top: `${lightPos.y}%` }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
            </div>

            {/* Info badges */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-[#C19A6B]/30 text-[10px] text-white flex items-center gap-1.5 font-sans-clean">
              <Sun size={10} className="text-[#C19A6B]" />
              <span>{selectedFinish.name}</span>
            </div>
            <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[10px] text-[#C19A6B] font-sans-clean">
              {selectedFinish.sheen}
            </div>
          </div>

          <p className="text-center text-[10px] text-[var(--text-muted)] font-sans-clean">
            مرر إصبعك على الصورة لاختبار الانعكاس الديناميكي
          </p>

          {/* Swatches - horizontal scroll on mobile */}
          <div className="flex flex-row gap-2.5 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 snap-x snap-mandatory">
            {SWATCH_FINISHES.map((swatch) => {
              const isSelected = selectedFinish.id === swatch.id;
              return (
                <button
                  key={swatch.id}
                  onClick={() => setSelectedFinish(swatch)}
                  className={`flex-shrink-0 snap-start flex items-center gap-2.5 p-3 rounded-xl border transition-all duration-300 w-[200px] text-right ${
                    isSelected
                      ? 'bg-[var(--bg-elevated)] border-[#C19A6B] shadow-[0_0_16px_rgba(193,154,107,0.3)] ring-1 ring-[#C19A6B]/50'
                      : 'bg-[var(--bg-surface)] border-[var(--border-light)] hover:border-[#C19A6B]/50'
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-full border-2 border-[#C19A6B]/40 flex-shrink-0"
                    style={{ backgroundColor: swatch.baseHex }}
                  />
                  <div className="min-w-0 text-right">
                    <span className="font-serif-luxury text-xs text-[var(--text-primary)] font-bold block leading-tight truncate">
                      {swatch.name}
                    </span>
                    <span className="text-[10px] text-[#C19A6B] font-sans-clean">
                      {swatch.sheen}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Specs card - mobile */}
          <div className="p-4 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)] shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-[#C19A6B] font-semibold font-sans-clean">مواصفات الخامة</span>
              <div
                className="w-5 h-5 rounded-full border border-[#C19A6B]/50"
                style={{ backgroundColor: selectedFinish.baseHex }}
              />
            </div>
            <h3 className="font-serif-luxury text-lg text-[var(--text-primary)] font-bold mb-1">{selectedFinish.name}</h3>
            <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed mb-3 font-sans-clean">{selectedFinish.description}</p>

            <div className="space-y-2.5 border-t border-[var(--border-subtle)] pt-3 text-xs font-sans-clean">
              <div>
                <span className="text-[10px] text-[var(--text-muted)] font-semibold block mb-0.5">درجة اللمعان:</span>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 rounded-full bg-[var(--bg-elevated)] overflow-hidden">
                    <div className="h-full gold-gradient-bg transition-all duration-500" style={{ width: `${selectedFinish.goldReflectance * 100}%` }} />
                  </div>
                  <span className="text-[#C19A6B] font-mono font-bold text-[11px]">{Math.round(selectedFinish.goldReflectance * 100)}٪</span>
                </div>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)]">{selectedFinish.composition}</p>
            </div>

            <a
              href="#contact"
              className="mt-3 w-full text-center block py-2 rounded-full btn-pill-inactive text-xs font-sans-clean font-bold transition-all active:scale-95"
            >
              طلب معاينة وعينات الكتالوج
            </a>
          </div>
        </div>

        {/* === DESKTOP LAYOUT: 3-column grid === */}
        <div className="hidden lg:grid grid-cols-12 gap-6 xl:gap-8 items-center">

          {/* Left: Swatches list */}
          <div className="col-span-4 flex flex-col gap-2.5">
            <span className="text-sm text-[#C19A6B] font-semibold font-serif-luxury mb-1">اختر العينة الفنية:</span>
            {SWATCH_FINISHES.map((swatch) => {
              const isSelected = selectedFinish.id === swatch.id;
              return (
                <button
                  key={swatch.id}
                  onClick={() => setSelectedFinish(swatch)}
                  className={`text-right p-3.5 rounded-xl transition-all duration-300 flex flex-col gap-2 border cursor-pointer w-full ${
                    isSelected
                      ? 'bg-[var(--bg-elevated)] border-[#C19A6B] shadow-[0_0_20px_rgba(193,154,107,0.3)] ring-1 ring-[#C19A6B]/60'
                      : 'bg-[var(--bg-surface)] border-[var(--border-light)] hover:border-[#C19A6B]/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full border-2 border-[#C19A6B]/50 flex-shrink-0"
                      style={{ backgroundColor: swatch.baseHex }}
                    />
                    <div className="flex-1 min-w-0 text-right">
                      <h4 className="font-serif-luxury text-sm text-[var(--text-primary)] font-bold leading-tight">{swatch.name}</h4>
                      <span className="text-[11px] text-[#C19A6B] font-sans-clean block mt-0.5">{swatch.category}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-[#C19A6B]/15 text-[11px] font-sans-clean">
                    <span className="px-2 py-0.5 rounded-full bg-[var(--bg-elevated)] text-[var(--text-secondary)] border border-[var(--border-light)] text-[10px]">
                      {swatch.sheen}
                    </span>
                    <span className="text-[var(--text-muted)]">انعكاس: {Math.round(swatch.goldReflectance * 100)}%</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Center: Interactive swatch canvas */}
          <div className="col-span-5">
            <div className="relative group">
              <div
                ref={swatchRef}
                onMouseMove={handleLightMove}
                onTouchStart={handleTouchMove}
                onTouchMove={handleTouchMove}
                className="relative aspect-square w-full max-w-[400px] mx-auto rounded-2xl overflow-hidden border border-[#C19A6B]/30 bg-[var(--bg-surface)] shadow-[0_20px_60px_rgba(0,0,0,0.4)] cursor-crosshair touch-none"
              >
                <img
                  src={selectedFinish.imageUrl}
                  alt={selectedFinish.name}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-150"
                  style={{
                    background: `radial-gradient(circle 280px at ${lightPos.x}% ${lightPos.y}%, rgba(255, 235, 195, ${0.5 * selectedFinish.goldReflectance}) 0%, rgba(193, 154, 107, ${0.25 * selectedFinish.goldReflectance}) 40%, rgba(0, 0, 0, 0.6) 80%)`,
                    mixBlendMode: 'color-dodge',
                  }}
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    background: `linear-gradient(${Math.atan2(lightPos.y - 50, lightPos.x - 50) * (180 / Math.PI) + 90}deg, rgba(0,0,0,0.55) 0%, transparent 60%)`,
                    mixBlendMode: 'multiply',
                  }}
                />
                <div
                  className="pointer-events-none absolute w-8 h-8 rounded-full border-2 border-white/80 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-[0_0_20px_#FFF] will-change-transform"
                  style={{ left: `${lightPos.x}%`, top: `${lightPos.y}%` }}
                >
                  <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#FFF]" />
                </div>
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#C19A6B]/30 text-[10px] text-white flex items-center gap-1.5 font-sans-clean">
                  <Sun size={11} className="text-[#C19A6B]" />
                  <span>الضوء: {Math.round(lightPos.x)}°، {Math.round(lightPos.y)}°</span>
                </div>
                <div className="absolute bottom-3.5 left-3.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-[10px] text-[#C19A6B] font-sans-clean">
                  {selectedFinish.sheen}
                </div>
              </div>
              <div className="text-center mt-2.5 text-xs text-[var(--text-muted)] font-sans-clean">
                مرر الفأرة لاختبار الانعكاس الديناميكي تحت الإضاءة المائلة
              </div>
            </div>
          </div>

          {/* Right: Specs panel */}
          <div className="col-span-3 p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-light)] shadow-[var(--card-shadow)] flex flex-col justify-between h-full">
            <div>
              <span className="text-xs text-[#C19A6B] block mb-1.5 font-semibold font-sans-clean">مواصفات الخامة</span>
              <h3 className="font-serif-luxury text-xl text-[var(--text-primary)] font-bold mb-2">{selectedFinish.name}</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-4 font-sans-clean">{selectedFinish.description}</p>

              <div className="space-y-3.5 border-t border-[var(--border-subtle)] pt-3.5 text-xs font-sans-clean">
                <div>
                  <span className="text-[11px] text-[var(--text-muted)] block font-semibold mb-0.5">طبيعة المادة:</span>
                  <p className="text-[var(--text-primary)]">{selectedFinish.composition}</p>
                </div>
                <div>
                  <span className="text-[11px] text-[var(--text-muted)] block font-semibold mb-1">درجة اللمعان والانعكاس:</span>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-[var(--bg-elevated)] overflow-hidden">
                      <div className="h-full gold-gradient-bg transition-all duration-500" style={{ width: `${selectedFinish.goldReflectance * 100}%` }} />
                    </div>
                    <span className="text-xs text-[#C19A6B] font-mono font-bold">{Math.round(selectedFinish.goldReflectance * 100)}٪</span>
                  </div>
                </div>
                <div>
                  <span className="text-[11px] text-[var(--text-muted)] block font-semibold mb-0.5">أماكن الاستخدام:</span>
                  <p className="text-[var(--text-secondary)] leading-relaxed">جدران المجالس والصالات، خلفيات الشاشات، المداخل، والواجهات الخارجية.</p>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-[var(--border-subtle)]">
              <a
                href="#contact"
                className="w-full text-center block py-2.5 rounded-full btn-pill-inactive text-xs font-sans-clean font-bold transition-all active:scale-95 shadow-sm"
              >
                طلب معاينة وعينات الكتالوج
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
