/**
 * LazyImage - مكون الصور الذكي لموقع وجد الأصايل
 * ===================================================
 * معايير Core Web Vitals العالمية المطبقة:
 *  - CLS = 0.00 (عبر حاوية Aspect Ratio ثابتة)
 *  - LCP تحسين (fetchpriority=high للصور الأولى)
 *  - Lazy Loading ديناميكي بـ IntersectionObserver
 *  - حالة Skeleton أثناء التحميل لمنع الانزياح
 *  - SEO: alt نصي وصفي دائم ومطلوب
 */

import React, { useRef, useState, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  title?: string;
  onClick?: () => void;
  objectFit?: 'cover' | 'contain' | 'fill';
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  aspectRatio = '4/5',
  className = '',
  containerClassName = '',
  priority = false,
  title,
  onClick,
  objectFit = 'cover',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px', threshold: 0.01 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-neutral-900 ${containerClassName}`}
      style={{ aspectRatio }}
      onClick={onClick}
    >
      {/* Skeleton Loader */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-neutral-800 via-neutral-900 to-neutral-800 animate-pulse"
          aria-hidden="true"
        />
      )}

      {/* الصورة الفعلية */}
      {isInView && !hasError && (
        <img
          src={src}
          alt={alt}
          title={title}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'low'}
          onLoad={() => setIsLoaded(true)}
          onError={() => { setIsLoaded(true); setHasError(true); }}
          className={[
            'w-full h-full transition-all duration-700',
            objectFit === 'cover' ? 'object-cover' : objectFit === 'contain' ? 'object-contain' : 'object-fill',
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105',
            className,
          ].join(' ')}
        />
      )}

      {/* حالة الخطأ */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-neutral-600 text-sm">
          ⚠ تعذّر تحميل الصورة
        </div>
      )}
    </div>
  );
};

export default LazyImage;
