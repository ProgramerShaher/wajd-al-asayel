import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, ChevronLeft, ZoomIn, Grid3X3, Images } from 'lucide-react';

// ── كل الصور الحقيقية مع أوصافها ─────────────────────────────────────
interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  description: string;
  tag: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'g1',
    src: '/images/IMG-20260921-WA0007.jpg',
    title: 'وحدة تلفاز مودرن',
    description: 'تصميم أبيض وأسود احترافي مع خطوط عمودية وأرفف وإضاءة ليد ذهبية دافئة',
    tag: 'وحدات التلفاز',
  },
  {
    id: 'g2',
    src: '/images/IMG-20260921-WA0008.jpg',
    title: 'وحدة تلفاز — زاوية أخرى',
    description: 'الإضاءة الذهبية تعكس انعكاساً جميلاً على الأرضية الرمادية اللامعة',
    tag: 'وحدات التلفاز',
  },
  {
    id: 'g3',
    src: '/images/IMG-20260921-WA0018.jpg',
    title: 'صالة جلوس بكريستال مضاء',
    description: 'بانوهات كريستال مضاءة من الخلف بليد ذهبي دافئ مع أريكة بيج أنيقة',
    tag: 'ديكور فاخر',
  },
  {
    id: 'g4',
    src: '/images/IMG-20260921-WA0019.jpg',
    title: 'سقف خلية النحل المضاء',
    description: 'تصميم سقف جبس هندسي سداسي بإطار مستطيل وإضاءة ليد ذهبية محيطية',
    tag: 'أسقف جبس',
  },
  {
    id: 'g5',
    src: '/images/IMG-20260921-WA0015.jpg',
    title: 'جدار تلفاز بديل رخام روز',
    description: 'خلفية بديل رخام روز بيج مع إطار بيضاوي وإضاءة سبوت مركزية',
    tag: 'بديل الرخام',
  },
  {
    id: 'g6',
    src: '/images/IMG-20260921-WA0017.jpg',
    title: 'جدار رخام روز — زاوية جانبية',
    description: 'النسيج الطبيعي لألواح بديل الرخام الروز مع الكونسول الخشبي الداكن',
    tag: 'بديل الرخام',
  },
  {
    id: 'g7',
    src: '/images/IMG-20260921-WA0011.jpg',
    title: 'جدار بديل الخشب العمودي',
    description: 'شرائح بديل خشب جوزي بني داكن بترتيب عمودي متناسق مع إضاءة سبوت',
    tag: 'بديل الخشب',
  },
  {
    id: 'g8',
    src: '/images/IMG-20260921-WA0010.jpg',
    title: 'صالة تشطيب متكامل',
    description: 'سقف جبس مستعار بليد وأعمدة بديل خشب بني داكن وأرضية بيضاء لامعة',
    tag: 'تشطيب متكامل',
  },
  {
    id: 'g9',
    src: '/images/IMG-20260921-WA0012.jpg',
    title: 'صالة واسعة قيد التجهيز',
    description: 'مرحلة تشطيب صالة رئيسية واسعة مع تركيب بديل الخشب على الأعمدة',
    tag: 'تشطيب متكامل',
  },
  {
    id: 'g10',
    src: '/images/IMG-20260921-WA0004.jpg',
    title: 'صالة استقبال مكتملة',
    description: 'أرضية رخام أبيض لامعة مع بانوهات ديكور وقوسين وإضاءة سبوت لايت',
    tag: 'تشطيب متكامل',
  },
  {
    id: 'g11',
    src: '/images/IMG-20260921-WA0005.jpg',
    title: 'وحدة تلفاز بانوهات بيضاء',
    description: 'بانوهات أبيض لامع مع رفوف مفتوحة بديل خشب وتلفاز بشاشة كبيرة',
    tag: 'وحدات التلفاز',
  },
  {
    id: 'g12',
    src: '/images/IMG-20260921-WA0022.jpg',
    title: 'سقف خلية النحل مكتمل',
    description: 'الشكل السداسي المضاء بليد ذهبي دافئ بعد اكتمال التشطيب والدهان',
    tag: 'أسقف جبس',
  },
  {
    id: 'g13',
    src: '/images/IMG-20260921-WA0003.jpg',
    title: 'مرحلة تركيب الجبس بورد',
    description: 'ألواح جبس بورد خضراء مقاومة للرطوبة أثناء التركيب في مجرى السلم',
    tag: 'أسقف جبس',
  },
  {
    id: 'g14',
    src: '/images/IMG-20260921-WA0006.jpg',
    title: 'وحدة تلفاز قيد الإنشاء',
    description: 'هيكل وحدة التلفاز بالبانوهات والرفوف قبل التشطيب النهائي',
    tag: 'وحدات التلفاز',
  },
  {
    id: 'g15',
    src: '/images/IMG-20260921-WA0009.jpg',
    title: 'صالة جبس بانوهات — مرحلة التنفيذ',
    description: 'الصالة الرئيسية بعد تركيب بانوهات الجبس والإضاءة قبل الدهان',
    tag: 'تشطيب متكامل',
  },
  {
    id: 'g16',
    src: '/images/IMG-20260921-WA0014.jpg',
    title: 'جدار تلفاز مختلط خشب وبانوهات',
    description: 'مزيج من بانوهات الجبس الأبيض وبانوهات بديل خشب بني مع إضاءة خطية',
    tag: 'وحدات التلفاز',
  },
  {
    id: 'g17',
    src: '/images/IMG-20260921-WA0016.jpg',
    title: 'مدخل مع مرآة دائرية كبيرة',
    description: 'مرآة دائرية كبيرة مع جدار بانوهات رمادي ومدخل سلم مزخرف',
    tag: 'ديكور فاخر',
  },
  {
    id: 'g18',
    src: '/images/IMG-20260921-WA0024.jpg',
    title: 'سقف جبس هندسي متقدم',
    description: 'تصميم سقف جبس بأطر وأشكال هندسية متداخلة معقدة قبل التشطيب',
    tag: 'أسقف جبس',
  },
  {
    id: 'g19',
    src: '/images/IMG-20260921-WA0025.jpg',
    title: 'سقف جبس كلاسيكي معين',
    description: 'تصميم كلاسيكي بأشكال معين متداخلة في سقف الجبس بورد',
    tag: 'أسقف جبس',
  },
];

const ALL_TAGS = ['الكل', 'وحدات التلفاز', 'ديكور فاخر', 'أسقف جبس', 'بديل الرخام', 'بديل الخشب', 'تشطيب متكامل'];

// ── نافذة عرض كاملة ───────────────────────────────────────────────────
function LightboxModal({
  photos,
  startIndex,
  onClose,
}: {
  photos: GalleryPhoto[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % photos.length), [photos.length]);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) next(); // Swiped left -> next
    if (distance < -50) prev(); // Swiped right -> prev
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaX > 20 || e.deltaY > 20) { next(); }
    else if (e.deltaX < -20 || e.deltaY < -20) { prev(); }
  };

  // keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') next();
      if (e.key === 'ArrowRight') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, next, prev]);

  const photo = photos[current];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/92 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Card container */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        className="relative w-[92vw] max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl touch-pan-y"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={photo.src}
            alt={photo.title}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-h-[70vh] object-cover"
          />
        </AnimatePresence>

        {/* Caption overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-5 py-5">
          <span className="inline-block px-2 py-0.5 text-[10px] bg-[#C19A6B]/30 border border-[#C19A6B]/50 rounded-full text-[#C19A6B] mb-2 font-sans-clean">
            {photo.tag}
          </span>
          <h3 className="text-white font-bold text-lg sm:text-xl font-display-luxury leading-tight">
            {photo.title}
          </h3>
          <p className="text-white/70 text-sm mt-1 font-sans-clean">{photo.description}</p>
          <p className="text-white/35 text-xs mt-2 font-sans-clean">
            {current + 1} / {photos.length}
          </p>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 left-3 w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/80 hover:border-white/50 transition-all"
        >
          <X size={16} />
        </button>

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#C19A6B]/80 hover:border-[#C19A6B] transition-all"
        >
          <ChevronRight size={18} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-[#C19A6B]/80 hover:border-[#C19A6B] transition-all"
        >
          <ChevronLeft size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
}

// ── بطاقة الصورة ──────────────────────────────────────────────────────
function PhotoCard({
  photo,
  index,
  onClick,
}: {
  photo: GalleryPhoto;
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  // Alternating slight tilt for each card
  const tiltDir = index % 2 === 0 ? 0.8 : -0.8;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06 }}
      className="relative cursor-pointer group"
      style={{
        // Slight polygon clip for angled look
        transform: hovered ? `rotate(0deg) scale(1.03)` : `rotate(${tiltDir * 0.6}deg)`,
        transition: 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      {/* Card with angled corners via clip-path */}
      <div
        className="relative overflow-hidden bg-[#111] rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.45)]"
        style={{
          clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
          border: hovered ? '1.5px solid rgba(193,154,107,0.7)' : '1.5px solid rgba(255,255,255,0.08)',
          transition: 'border 0.3s',
        }}
      >
        {/* Image */}
        <img
          src={photo.src}
          alt={photo.title}
          loading="lazy"
          className="w-full h-48 sm:h-52 object-cover transition-transform duration-700"
          style={{
            transform: hovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />

        {/* Zoom icon */}
        <div
          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300"
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? 'scale(1)' : 'scale(0.6)' }}
        >
          <ZoomIn size={13} className="text-[#C19A6B]" />
        </div>

        {/* Floating bottom caption */}
        <div
          className="absolute bottom-0 left-0 right-0 transition-all duration-400"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)',
            transform: hovered ? 'translateY(0)' : 'translateY(30%)',
            opacity: hovered ? 1 : 0.7,
            transition: 'transform 0.38s ease, opacity 0.38s ease',
            padding: '32px 12px 12px',
          }}
        >
          <span className="block text-[10px] text-[#C19A6B] font-semibold font-sans-clean mb-0.5 uppercase tracking-wider">
            {photo.tag}
          </span>
          <span className="block text-white font-bold text-sm leading-snug font-display-luxury">
            {photo.title}
          </span>
          <span
            className="block text-white/65 text-[11px] mt-1 font-sans-clean leading-relaxed line-clamp-2"
            style={{ opacity: hovered ? 1 : 0, transition: 'opacity 0.3s 0.1s' }}
          >
            {photo.description}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ── المعرض الاحترافي الكامل ────────────────────────────────────────────
export default function ProfessionalGallery({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [tag, setTag] = useState('الكل');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = tag === 'الكل' ? GALLERY_PHOTOS : GALLERY_PHOTOS.filter((p) => p.tag === tag);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxIndex === null) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, lightboxIndex]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[900] bg-[#06050a]/97 backdrop-blur-sm"
            dir="rtl"
          >
            <div 
              className="absolute inset-0 overflow-y-auto overscroll-y-contain pb-10" 
              style={{ WebkitOverflowScrolling: 'touch' }}
              data-lenis-prevent="true"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 bg-[#06050a]/95 backdrop-blur-md border-b border-white/[0.07] px-4 sm:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#C19A6B]/15 border border-[#C19A6B]/30 flex items-center justify-center">
                    <Images size={17} className="text-[#C19A6B]" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-base sm:text-lg font-display-luxury leading-none">
                      معرض أعمالنا
                    </h2>
                    <p className="text-white/40 text-[11px] font-sans-clean mt-0.5">
                      {filtered.length} صورة من مشاريع حقيقية منجزة
                    </p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
                >
                  <X size={17} />
                </button>
              </div>

              {/* Filter tabs */}
              <div className="px-4 sm:px-8 py-4 overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
                <div className="flex items-center gap-2 min-w-max">
                  {ALL_TAGS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTag(t)}
                      className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-sans-clean font-medium transition-all duration-300 whitespace-nowrap ${
                        tag === t
                          ? 'bg-[#C19A6B] text-[#050505] shadow-[0_0_14px_rgba(193,154,107,0.4)]'
                          : 'bg-white/[0.06] text-white/60 border border-white/10 hover:bg-white/10 hover:text-white/90'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Photo grid */}
              <div className="px-4 sm:px-8 pb-12">
                <motion.div
                  key={tag}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
                >
                  {filtered.map((photo, i) => (
                    <PhotoCard
                      key={photo.id}
                      photo={photo}
                      index={i}
                      onClick={() => setLightboxIndex(i)}
                    />
                  ))}
                </motion.div>

                {filtered.length === 0 && (
                  <div className="text-center py-20 text-white/30 font-sans-clean">
                    لا توجد صور في هذا التصنيف
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <LightboxModal
            photos={filtered}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
