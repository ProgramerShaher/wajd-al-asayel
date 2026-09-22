import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, MapPin, Maximize2, X, Compass, ArrowUpRight, Image as ImageIcon, ZoomIn } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/studioData';
import { PortfolioItem } from '../types';

export default function SpotlightGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);
  const [activeImageTab, setActiveImageTab] = useState<'main' | 'detail'>('main');
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const categories = ['الكل', 'دهانات داخلية', 'بديل خشب ورخام', 'جبس بورد', 'سواتر ومظلات', 'تشطيب فلل'];

  const filteredItems = selectedCategory === 'الكل'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === selectedCategory);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModalItem(null);
      }
    };
    if (activeModalItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalItem]);

  // Reset image tab when opening modal
  const handleOpenModal = (item: PortfolioItem) => {
    setActiveImageTab('main');
    setActiveModalItem(item);
  };

  // Mouse spotlight tracker across the entire grid
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!galleryRef.current) return;
    const rect = galleryRef.current.getBoundingClientRect();
    setSpotlightPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="portfolio"
      ref={galleryRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-16 bg-[#050505] border-t border-white/5 overflow-hidden text-right"
    >
      {/* THE MOUSE SPOTLIGHT OVERLAY: Radial golden glow lighting up the dark grid */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 480px at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(193, 154, 107, 0.12) 0%, rgba(193, 154, 107, 0.03) 45%, transparent 75%)`,
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-6 mb-8 sm:mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-2 sm:mb-3 font-semibold font-sans-clean">
              <Sparkles size={13} />
              <span>أعمال منفذة في الدمام والخبر</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl font-bold text-[#EDE8DF]">
              معرض أعمال وجد الأصايل
            </h2>
          </div>

          {/* Category Filter Pills (Fluid Horizontal Thumb-Swipe on Mobile) */}
          <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                data-cursor="تصفية"
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-sans-clean transition-all duration-300 flex-shrink-0 active:scale-95 ${
                  selectedCategory === cat
                    ? 'gold-gradient-bg text-[#050505] font-bold shadow-[0_0_20px_rgba(193,154,107,0.4)] scale-[1.02]'
                    : 'btn-pill-inactive hover:scale-[1.02]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SPOTLIGHT BENTO GRID: Proportional, flawless mobile image ratios */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-8">
          {filteredItems.map((item, index) => {
            const colClass = item.colSpan || (index % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4');

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className={`${colClass} group relative rounded-2xl overflow-hidden glass-card border border-white/10 hover:border-[#C19A6B]/50 transition-all duration-500 flex flex-col justify-end h-[390px] sm:h-[450px] md:h-auto md:min-h-[480px] cursor-pointer`}
                onClick={() => handleOpenModal(item)}
                data-cursor="عرض"
              >
                {/* Background Image with Slow Zoom on Hover */}
                <div className="absolute inset-0 overflow-hidden bg-[#0A0A0C]">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/45 to-black/20" />
                </div>

                {/* Top Corner Metadata */}
                <div className="relative z-10 p-4 sm:p-6 flex justify-between items-start">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050505]/75 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs text-[#E6C280] font-sans-clean">
                    <MapPin size={11} className="text-[#C19A6B]" />
                    <span>{item.location}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#050505]/75 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#A0A0A5] group-hover:text-[#F5F5F7] group-hover:border-[#C19A6B] transition-colors">
                    <Maximize2 size={13} />
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-5 sm:p-6 md:p-8 mt-auto flex flex-col justify-end">
                  <div className="text-[11px] sm:text-xs text-[#C19A6B] mb-1.5 font-medium font-serif-luxury">
                    {item.category} • {item.year}
                  </div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#F5F5F7] font-normal leading-tight mb-2 group-hover:text-[#C19A6B] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#D0D0D6] font-light mb-3 line-clamp-2 font-sans-clean leading-relaxed">
                    {item.technique}
                  </p>

                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs text-[#A0A0A5] font-sans-clean">
                    <span>{item.dimensions}</span>
                    <span className="flex items-center gap-1 text-[#C19A6B] group-hover:underline font-semibold">
                      تفاصيل العمل والتشطيب <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* COMPACT & PROPORTIONATE ARCHIVAL INSPECTION MODAL */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveModalItem(null)}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[86vh] overflow-y-auto rounded-2xl glass-card-gold border border-[#C19A6B]/30 shadow-2xl p-4 sm:p-7 md:p-8 bg-[#09090C] text-right"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Elegant Corner Close Button */}
              <button
                onClick={() => setActiveModalItem(null)}
                data-cursor="إغلاق"
                className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full btn-pill-inactive transition-all z-20 flex items-center justify-center active:scale-95"
                aria-label="إغلاق النافذة"
              >
                <X size={18} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
                {/* Media Column (compact proportioned frame) */}
                <div className="md:col-span-6 flex flex-col gap-3">
                  <div className="relative h-48 xs:h-56 sm:h-64 md:h-72 w-full rounded-xl overflow-hidden border border-white/10 bg-[#050505]">
                    <img
                      src={
                        activeImageTab === 'detail' && activeModalItem.detailImageUrl
                          ? activeModalItem.detailImageUrl
                          : activeModalItem.imageUrl
                      }
                      alt={activeModalItem.title}
                      className="w-full h-full object-cover transition-opacity duration-300"
                    />

                    {/* Active view badge */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/10 text-[10px] text-[#E6C280] font-sans-clean flex items-center gap-1.5">
                      {activeImageTab === 'detail' ? <ZoomIn size={11} /> : <ImageIcon size={11} />}
                      <span>{activeImageTab === 'detail' ? 'ملمس ميكروسكوبي مقرب' : 'المشهد المعماري العام'}</span>
                    </div>
                  </div>

                  {/* Thumbnail Switcher (if detail photo exists) */}
                  {activeModalItem.detailImageUrl && (
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveImageTab('main')}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-sans-clean transition-all active:scale-95 ${
                          activeImageTab === 'main'
                            ? 'border-[#C19A6B] bg-[#C19A6B]/25 text-[#FFFFFF] font-semibold shadow-[0_0_12px_rgba(193,154,107,0.3)]'
                            : 'btn-pill-inactive'
                        }`}
                      >
                        <ImageIcon size={12} />
                        <span>الصورة المعمارية</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setActiveImageTab('detail')}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border text-xs font-sans-clean transition-all active:scale-95 ${
                          activeImageTab === 'detail'
                            ? 'border-[#C19A6B] bg-[#C19A6B]/25 text-[#FFFFFF] font-semibold shadow-[0_0_12px_rgba(193,154,107,0.3)]'
                            : 'btn-pill-inactive'
                        }`}
                      >
                        <ZoomIn size={12} />
                        <span>تفاصيل الملمس الحرفي</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Information Column (refined hierarchy) */}
                <div className="md:col-span-6 flex flex-col justify-between">
                  <div>
                    {/* Header Eyebrow */}
                    <div className="flex items-center gap-2 text-xs text-[#C19A6B] mb-1.5 font-serif-luxury">
                      <Compass size={13} />
                      <span>{activeModalItem.category} • عام {activeModalItem.year}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif-luxury text-xl sm:text-2xl md:text-3xl text-[#F5F5F7] font-normal leading-tight mb-3">
                      {activeModalItem.title}
                    </h2>

                    {/* Specifications List */}
                    <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-xs font-sans-clean bg-[#121216]/60 rounded-xl p-3 sm:p-3.5 border border-white/5">
                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-[#707075] font-serif-luxury">الموقع الجغرافي:</span>
                        <span className="text-[#F5F5F7] font-medium">{activeModalItem.location}</span>
                      </div>
                      <div className="flex justify-between items-center py-1 border-b border-white/5">
                        <span className="text-[#707075] font-serif-luxury">التقنية الفنية:</span>
                        <span className="text-[#F5F5F7] text-left max-w-[190px] truncate">{activeModalItem.technique}</span>
                      </div>
                      <div className="flex justify-between items-center py-1">
                        <span className="text-[#707075] font-serif-luxury">المساحة المنفذة:</span>
                        <span className="text-[#F5F5F7] font-medium">{activeModalItem.dimensions}</span>
                      </div>
                    </div>

                    {/* Project Note */}
                    <div className="mb-3 sm:mb-4">
                      <h4 className="text-[11px] text-[#C19A6B] mb-1 font-semibold font-sans-clean">
                        ملاحظات التنفيذ والمواد:
                      </h4>
                      <p className="text-xs sm:text-sm text-[#EDE8DF] font-sans-clean leading-relaxed line-clamp-3">
                        {activeModalItem.curatorNotes}
                      </p>
                    </div>
                  </div>

                  {/* Action Link Button */}
                  <div className="pt-2 sm:pt-3 border-t border-white/10 flex items-center gap-3">
                    <a
                      href="#contact"
                      onClick={() => setActiveModalItem(null)}
                      className="w-full text-center py-2.5 sm:py-3 px-5 rounded-full gold-gradient-bg text-[#050505] text-xs font-bold font-sans-clean shadow-md hover:scale-[1.02] active:scale-98 transition-all"
                    >
                      طلب معاينة وعرض سعر لعمل مماثل
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
