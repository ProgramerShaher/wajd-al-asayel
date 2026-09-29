/**
 * OptimizedVideo.tsx - مكون الفيديو عالي الكفاءة لموقع وجد الأصايل
 * ====================================================================
 * معايير الأداء والـ Core Web Vitals المطبقة:
 *  1. Smart Autoplay/Pause: تشغيل الفيديو تلقائياً فقط عند ظهوره على الشاشة
 *     وإيقافه عند التمرير بعيداً لحفظ استهلاك المعالج وبطارية الهاتف والباندويث.
 *  2. Dual Next-Gen Formats: دعم WebM (VP9/AV1) كخيار أول و MP4 (H.264) كـ Fallback.
 *  3. CLS Prevention: نسبة أبعاد محددة ثابتة (aspect-ratio).
 *  4. Preload Control: preload="metadata" أو "none" لتقليل حجم البيانات الأولي.
 * ====================================================================
 */

import React, { useRef, useEffect, useState } from 'react';

export interface OptimizedVideoProps {
  src: string;              // مسار MP4 الأساسي
  webmSrc?: string;         // مسار WebM إن وجد
  poster?: string;          // صورة الغلاف الأولية (تظهر قبل التشغيل لمنع الـ CLS)
  aspectRatio?: string;     // مثال: '16/9' أو '9/16' أو '4/3'
  autoPlayOnScroll?: boolean;
  loop?: boolean;
  muted?: boolean;
  playsInline?: boolean;
  className?: string;
  containerClassName?: string;
  title?: string;
}

export default function OptimizedVideo({
  src,
  webmSrc,
  poster,
  aspectRatio = '16/9',
  autoPlayOnScroll = true,
  loop = true,
  muted = true,
  playsInline = true,
  className = '',
  containerClassName = '',
  title = 'فيديو أعمال دهانات وديكورات وجد الأصايل بالدمام',
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // التحكم الذكي في التشغيل والإيقاف بناءً على الرؤية
  useEffect(() => {
    if (!autoPlayOnScroll) return;

    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video
            .play()
            .then(() => setIsPlaying(true))
            .catch(() => {
              // المتصفحات قد تمنع التشغيل التلقائي إذا لم يكن muted
              setIsPlaying(false);
            });
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.3 } // يبدأ التشغيل عند ظهور 30% من الفيديو
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
      if (video) video.pause();
    };
  }, [autoPlayOnScroll]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-black/90 rounded-2xl shadow-xl ${containerClassName}`}
      style={{ aspectRatio, maxWidth: '100%' }}
    >
      {/* Fallback Poster & Shimmer Placeholder */}
      {poster && !isLoaded && (
        <img src={poster}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-105 transition-opacity duration-500"
          loading="lazy" decoding="async" />
      )}

      {/* Video Element with Dual Sources */}
      <video
        ref={videoRef}
        poster={poster}
        title={title}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload="metadata"
        onLoadedData={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded || !poster ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      >
        {/* WebM Source: ضغط أعلى بنسبة 35% لمتصفحات Chrome و Edge الحديثة */}
        {webmSrc && <source src={webmSrc} type="video/webm" />}

        {/* MP4 H.264 Fallback: يعمل على 100% من جميع الأجهزة القديمة والحديثة */}
        <source src={src} type="video/mp4" />

        <span>متصفحك لا يدعم تشغيل الفيديو المباشر.</span>
      </video>

      {/* Subtle indicator for muted state if auto-playing */}
      {autoPlayOnScroll && isPlaying && (
        <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-[#EDE8DF] font-sans-clean flex items-center gap-1.5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
          <span>تشغيل فوري</span>
        </div>
      )}
    </div>
  );
}
