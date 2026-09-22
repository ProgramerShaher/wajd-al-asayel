import React, { useState, useRef } from 'react';
import { Sun, Sparkles } from 'lucide-react';
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
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-16 bg-[#070709] border-t border-white/5 overflow-hidden text-right"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 sm:mb-3 font-semibold font-sans-clean">
              <Sun size={14} />
              <span>معاينة خامات الديكور والدهان</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold text-[#EDE8DF]">
              تجربة الإضاءة وانعكاس الخامات
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#BDB7AB] leading-relaxed font-sans-clean">
            حرّك المؤشر أو إصبعك لاختبار مظهر الدهان الديكوري، بديل الرخام، وبديل الخشب تحت تأثير درجات الإضاءة المختلفة.
          </p>
        </div>

        {/* Studio Workstation: Swatch Selector, Center Interactive Surface, Material Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Right/First Column in RTL: Finish Selector List (2x2 on mobile, vertical list on desktop) */}
          <div className="lg:col-span-4 flex flex-col gap-2.5 sm:gap-3">
            <span className="text-xs text-[#707075] mb-1 font-semibold font-serif-luxury">
              اختر العينة الفنية لمعاينتها:
            </span>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5 sm:gap-3">
              {SWATCH_FINISHES.map((swatch) => {
                const isSelected = selectedFinish.id === swatch.id;
                return (
                  <button
                    key={swatch.id}
                    onClick={() => setSelectedFinish(swatch)}
                    data-cursor="فحص"
                    className={`text-right p-3 sm:p-4 rounded-xl transition-all duration-300 flex items-center justify-between border active:scale-98 ${
                      isSelected
                        ? 'bg-[#2E241B] border-[#C19A6B] text-[#FFFFFF] shadow-[0_0_22px_rgba(193,154,107,0.35)]'
                        : 'btn-surface-inactive'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 sm:gap-3 truncate">
                      <div
                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[#C19A6B]/40 shadow-inner flex-shrink-0"
                        style={{ backgroundColor: swatch.baseHex }}
                      />
                      <div className="truncate">
                        <h4 className="font-serif-luxury text-sm sm:text-base text-[#F5F5F7] font-medium leading-none mb-1 truncate">
                          {swatch.name}
                        </h4>
                        <span className="text-[10px] sm:text-[11px] text-[#C19A6B] font-sans-clean block truncate">
                          {swatch.category}
                        </span>
                      </div>
                    </div>
                    <span className="hidden sm:inline-block text-[10px] px-2 py-0.5 rounded-full bg-[#322A22] text-[#EDE8DF] border border-[#C19A6B]/25 font-sans-clean flex-shrink-0">
                      {swatch.sheen}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center Column: The Interactive 3D Grazing Light Canvas */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative bezel */}
              <div
                ref={swatchRef}
                onMouseMove={handleLightMove}
                onTouchStart={handleTouchMove}
                onTouchMove={handleTouchMove}
                data-cursor="ضوء"
                className="relative aspect-square w-full max-w-[420px] mx-auto rounded-2xl overflow-hidden border border-[#C19A6B]/30 glass-card shadow-[0_20px_60px_rgba(0,0,0,0.9)] cursor-crosshair preserve-3d touch-none"
                style={{
                  transform: `perspective(800px) rotateX(${(lightPos.y - 50) * -0.15}deg) rotateY(${(lightPos.x - 50) * 0.15}deg)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                {/* Real High-Res Texture Layer */}
                <img
                  src={selectedFinish.imageUrl}
                  alt={selectedFinish.name}
                  className="w-full h-full object-cover select-none pointer-events-none"
                />

                {/* Dynamic Specular Grazing Light Spotlight (Follows Cursor & Touch) */}
                <div
                  className="pointer-events-none absolute inset-0 transition-opacity duration-150"
                  style={{
                    background: `radial-gradient(circle 280px at ${lightPos.x}% ${lightPos.y}%, rgba(255, 235, 195, ${
                      0.5 * selectedFinish.goldReflectance
                    }) 0%, rgba(193, 154, 107, ${0.25 * selectedFinish.goldReflectance}) 40%, rgba(0, 0, 0, 0.6) 80%)`,
                    mixBlendMode: 'color-dodge',
                  }}
                />

                {/* Directional Grazing Shadow Simulation */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-70"
                  style={{
                    background: `linear-gradient(${
                      Math.atan2(lightPos.y - 50, lightPos.x - 50) * (180 / Math.PI) + 90
                    }deg, rgba(0,0,0,0.55) 0%, transparent 60%)`,
                    mixBlendMode: 'multiply',
                  }}
                />

                {/* Floating Light Coordinate Marker */}
                <div
                  className="pointer-events-none absolute w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/60 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center shadow-[0_0_20px_#FFF]"
                  style={{ left: `${lightPos.x}%`, top: `${lightPos.y}%` }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                </div>

                {/* Top Corner Instruction Tag */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 px-2.5 sm:px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-[#C19A6B]/30 text-[10px] text-[#F5F5F7] flex items-center gap-1.5 font-sans-clean">
                  <Sun size={11} className="text-[#C19A6B]" />
                  <span>الضوء: {Math.round(lightPos.x)}°، {Math.round(lightPos.y)}°</span>
                </div>

                {/* Bottom Corner Sheen Stamp */}
                <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/10 text-[10px] text-[#C19A6B] font-sans-clean">
                  {selectedFinish.sheen}
                </div>
              </div>

              <div className="text-center mt-3 text-[11px] sm:text-xs text-[#707075] font-sans-clean">
                مرر إصبعك أو الفأرة لاختبار الانعكاس الديناميكي تحت الإضاءة المائلة
              </div>
            </div>
          </div>

          {/* Left/Third Column: In-Depth Mineral Composition Specs */}
          <div className="lg:col-span-3 p-5 sm:p-6 rounded-2xl glass-card border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-xs text-[#C19A6B] block mb-1.5 sm:mb-2 font-semibold font-sans-clean">
                مواصفات الخامة
              </span>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-[#EDE8DF] font-bold mb-2">
                {selectedFinish.name}
              </h3>
              <p className="text-xs text-[#EDE8DF] leading-relaxed mb-4 sm:mb-6 font-sans-clean">
                {selectedFinish.description}
              </p>

              <div className="space-y-3 sm:space-y-4 border-t border-white/5 pt-3 sm:pt-4 text-xs font-sans-clean">
                <div>
                  <span className="text-[11px] text-[#8C867D] block font-semibold font-sans-clean">
                    طبيعة ومكونات المادة:
                  </span>
                  <p className="text-[#EDE8DF] mt-0.5 text-xs">{selectedFinish.composition}</p>
                </div>

                <div>
                  <span className="text-[11px] text-[#8C867D] block font-semibold font-sans-clean">
                    درجة اللمعان والانعكاس:
                  </span>
                  <div className="flex items-center gap-3 mt-1.5">
                    <div className="flex-1 h-1.5 rounded-full bg-[#1A1A1E] overflow-hidden">
                      <div
                        className="h-full gold-gradient-bg"
                        style={{ width: `${selectedFinish.goldReflectance * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-[#C19A6B] font-mono font-bold">
                      {Math.round(selectedFinish.goldReflectance * 100)}٪
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-[11px] text-[#8C867D] block font-semibold font-sans-clean">
                    أماكن الاستخدام المقترحة:
                  </span>
                  <p className="text-[#EDE8DF] text-xs mt-0.5 leading-relaxed">
                    جدران المجالس والصالات، خلفيات الشاشات، المداخل، والواجهات والحدائق الخارجية.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 pt-4 border-t border-white/5">
              <a
                href="#contact"
                className="w-full text-center block py-2.5 sm:py-3 rounded-full btn-pill-inactive text-xs font-sans-clean font-bold text-[#EDE8DF] transition-all active:scale-98 shadow-md"
              >
                طلب معاينة وتوفير عينات الكتالوج
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
