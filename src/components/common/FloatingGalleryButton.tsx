import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Images } from 'lucide-react';
import ProfessionalGallery from '@/components/features/ProfessionalGallery';

export default function FloatingGalleryButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] left-3.5 xs:left-4 sm:bottom-24 sm:left-6 z-50 flex items-center gap-2.5 sm:gap-3">
        {/* Tooltip / Speech bubble */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1511]/95 border border-[#C19A6B]/40 text-[#EDE8DF] text-xs font-sans-clean font-semibold shadow-xl backdrop-blur-md"
              dir="rtl"
            >
              <span className="w-2 h-2 rounded-full bg-[#C19A6B] animate-pulse" />
              <span>معرض أعمالنا</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating Action Button */}
        <button
          id="floating-gallery-btn"
          aria-label="فتح معرض الأعمال"
          onClick={() => setIsGalleryOpen(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#9B784B] via-[#C19A6B] to-[#E6C280] text-black shadow-[0_10px_30px_rgba(193,154,107,0.45)] hover:shadow-[0_12px_40px_rgba(193,154,107,0.65)] hover:scale-110 active:scale-95 transition-all duration-300"
        >
          {/* Radar pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-[#C19A6B] opacity-40 animate-ping pointer-events-none" />

          {/* Outer glowing border */}
          <span className="absolute inset-0 rounded-full border-2 border-white/30 pointer-events-none" />

          {/* Gallery Icon */}
          <Images className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 drop-shadow-md transition-transform group-hover:scale-110 duration-200" />
        </button>
      </div>

      <ProfessionalGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </>
  );
}
