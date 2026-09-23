import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1800; // ms
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextProgress = Math.min(100, Math.round((currentStep / steps) * 100));
      setProgress(nextProgress);

      if (nextProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 700);
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-50 flex flex-col justify-between bg-[#050505] p-8 md:p-16 select-none pointer-events-auto"
        >
          {/* Top atelier brand stamp */}
          <div className="flex items-center justify-between text-xs tracking-[0.2em] text-[#C19A6B]/90 font-serif-luxury">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C19A6B] animate-ping" />
              جود الأصايل • معلم دهانات وديكورات وجبس بورد وسواتر
            </span>
            <span className="hidden sm:inline">الدمام • الخبر • خبرة أكثر من ٣٠ سنة</span>
          </div>

          {/* Central Counter & Typography Reveal */}
          <div className="my-auto max-w-4xl mx-auto w-full text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              {/* Monogram */}
              <div className="relative mb-6">
                <svg width="70" height="70" viewBox="0 0 100 100" fill="none" className="mx-auto">
                  <circle cx="50" cy="50" r="46" stroke="#C19A6B" strokeWidth="0.8" strokeOpacity="0.4" />
                  <circle cx="50" cy="50" r="38" stroke="#C19A6B" strokeWidth="1.2" className="animate-gold-dash" />
                  <text
                    x="50"
                    y="58"
                    textAnchor="middle"
                    fill="#C19A6B"
                    fontFamily="Amiri, serif"
                    fontSize="26"
                    letterSpacing="1"
                    fontWeight="bold"
                  >
                    وا
                  </text>
                </svg>
              </div>

              {/* Progress Numbers */}
              <div className="overflow-hidden">
                <span className="font-display-luxury text-7xl md:text-9xl tracking-tight text-[#F5F5F7] font-light">
                  {progress}
                  <span className="text-2xl md:text-3xl text-[#C19A6B] mr-2 font-serif-luxury italic">٪</span>
                </span>
              </div>

              <p className="mt-4 text-xs md:text-sm tracking-[0.1em] text-[#EDE8DF] font-light font-sans-clean">
                جاري تجهيز معرض الأعمال والتشطيبات • الدمام والخبر
              </p>
            </motion.div>
          </div>

          {/* Bottom Loading Hairline Bar */}
          <div className="w-full max-w-xl mx-auto">
            <div className="h-[1px] w-full bg-[#1A1A1E] relative overflow-hidden">
              <motion.div
                className="absolute top-0 right-0 h-full gold-gradient-bg"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>
            <div className="flex justify-between items-center text-[10px] tracking-wider text-[#A09D96] mt-3 font-sans-clean">
              <span>خبرة تتجاوز ٣٠ سنة</span>
              <span>دقة والتزام في المواعيد</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
