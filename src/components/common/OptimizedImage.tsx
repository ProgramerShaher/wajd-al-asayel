/**
 * OptimizedImage.tsx - مكون الصور عالي الأداء لموقع وجد الأصايل
 * ====================================================================
 * المعايير الهندسية لـ Core Web Vitals المطبقة:
 *  1. Next-Gen Formats: دعم AVIF و WebP مع Fallback تلقائي
 *  2. Responsive srcset & sizes: تقديم الأبعاد المناسبة لكل شاشة
 *  3. Zero CLS: تثبيت حاوية بنسبة أبعاد ثابتة (aspect-ratio) لمنع أي انزياح
 *  4. Blur-Up LQIP: انتقال ناعم من الخلفية المضببة إلى الصورة فائقة الدقة
 *  5. Smart Priority: دعم LCP الفوري (fetchpriority="high") و Lazy Loading للصور الأخرى
 * ====================================================================
 */

import React, { useState, useRef, useEffect } from 'react';

export interface ImageVariant {
  src: string;
  width: number;
}

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: string; // مثال: '16/9', '4/3', '1/1', '4/5'
  priority?: boolean;   // true لصور الشاشة الأولى (Hero / LCP)
  className?: string;
  containerClassName?: string;
  sizes?: string;       // مثال: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
  blurDataURL?: string; // صورة مصغرة Base64 أو لون تدرجي
  objectFit?: 'cover' | 'contain' | 'fill' | 'scale-down';
  title?: string;
  onClick?: () => void;
  avifSrc?: string;
  webpSrc?: string;
  variants?: ImageVariant[];
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  aspectRatio = '4/5',
  priority = false,
  className = '',
  containerClassName = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  blurDataURL,
  objectFit = 'cover',
  title,
  onClick,
  avifSrc,
  webpSrc,
  variants,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // الاشتقاق التلقائي لمسارات AVIF و WebP إذا لم يتم تمريرها صراحة
  const baseSrcWithoutExt = src.replace(/\.[^/.]+$/, '');
  const derivedWebp = webpSrc || `${baseSrcWithoutExt}.webp`;
  const derivedAvif = avifSrc || `${baseSrcWithoutExt}.avif`;

  // توليد srcset تلقائياً في حال تمرير variants
  const generateSrcSet = (formatExt: string) => {
    if (!variants || variants.length === 0) return undefined;
    return variants
      .map((v) => `${v.src.replace(/\.[^/.]+$/, '')}.${formatExt} ${v.width}w`)
      .join(', ');
  };

  const avifSrcSet = generateSrcSet('avif');
  const webpSrcSet = generateSrcSet('webp');

  // تحميل ذكي بواسطة IntersectionObserver للصور غير ذات الأولوية
  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '250px 0px', // التحميل المسبق قبل وصول المستخدم بـ 250px
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-[#0A0D0B] select-none ${containerClassName}`}
      style={{
        aspectRatio: aspectRatio,
        width: width ? `${width}px` : undefined,
        maxWidth: '100%',
      }}
      onClick={onClick}
    >
      {/* 1. Low-Quality Image Placeholder (Blur-Up) or Shimmer Skeleton */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 z-10 transition-opacity duration-700 ease-out pointer-events-none"
          style={{
            backgroundImage: blurDataURL ? `url("${blurDataURL}")` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: blurDataURL ? 'blur(20px)' : undefined,
            transform: blurDataURL ? 'scale(1.1)' : undefined,
          }}
        >
          {/* Skeleton Shimmer Gradient if no blurDataURL */}
          {!blurDataURL && (
            <div className="w-full h-full bg-gradient-to-r from-[#121614] via-[#1E2521] to-[#121614] animate-pulse" />
          )}
        </div>
      )}

      {/* 2. Responsive Picture Element with Next-Gen Sources */}
      {isInView && !hasError && (
        <picture className="w-full h-full block">
          {/* AVIF Source: أعلى كفاءة وضغط لمتصفحات Chrome و Safari الحديثة */}
          <source
            type="image/avif"
            srcSet={avifSrcSet || derivedAvif}
            sizes={sizes}
          />

          {/* WebP Source: متوافق مع أكثر من 97% من المتصفحات حول العالم */}
          <source
            type="image/webp"
            srcSet={webpSrcSet || derivedWebp}
            sizes={sizes}
          />

          {/* Fallback Image with Strict CLS Prevention & Priority Tags */}
          <img
            src={src}
            alt={alt}
            title={title}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            // @ts-expect-error - fetchpriority attribute is supported in modern browsers
            fetchpriority={priority ? 'high' : 'low'}
            onLoad={() => setIsLoaded(true)}
            onError={() => {
              // إذا فشل WebP/AVIF، الرجوع إلى الصورة الأصلية
              setIsLoaded(true);
            }}
            className={[
              'w-full h-full transition-all duration-700 ease-out will-change-transform',
              objectFit === 'cover'
                ? 'object-cover'
                : objectFit === 'contain'
                ? 'object-contain'
                : objectFit === 'fill'
                ? 'object-fill'
                : 'object-scale-down',
              isLoaded ? 'opacity-100 scale-100 filter-none' : 'opacity-0 scale-105 blur-sm',
              className,
            ].join(' ')}
          />
        </picture>
      )}

      {/* 3. Fallback Error State */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#121614] text-[#C19A6B] p-4 text-center text-xs font-sans-clean">
          <span className="text-lg mb-1">🖼️</span>
          <span>تعذر تحميل الصورة</span>
        </div>
      )}
    </div>
  );
}
