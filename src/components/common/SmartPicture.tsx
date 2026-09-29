import React from 'react';
import manifestData from '../../data/media-manifest.json';

// Type assertion to let TypeScript know the structure
const manifest = manifestData as Record<string, any>;

interface SmartPictureProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * SmartPicture: يقرأ من media-manifest.json لتقديم صور AVIF و WebP بجميع المقاسات
 */
export default function SmartPicture({ src, alt, className, ...props }: SmartPictureProps) {
  // Extract base name from src (e.g., "/images/decor.webp" -> "decor")
  const fileName = src.split('/').pop() || '';
  const baseName = fileName.split('.')[0];
  const mediaInfo = manifest[baseName];

  // If no manifest info (e.g., external image or not processed), return standard img
  if (!mediaInfo) {
    return <img src={src} alt={alt} className={className} {...props} />;
  }

  // Generate srcSet strings
  let avifSrcSet = '';
  let webpSrcSet = '';

  if (mediaInfo.variants && mediaInfo.variants.length > 0) {
    avifSrcSet = mediaInfo.variants.map((v: any) => `${v.avif} ${v.width}w`).join(', ');
    webpSrcSet = mediaInfo.variants.map((v: any) => `${v.webp} ${v.width}w`).join(', ');
    
    // Add original full size
    avifSrcSet += `, ${mediaInfo.avif} ${mediaInfo.width}w`;
    webpSrcSet += `, ${mediaInfo.webp} ${mediaInfo.width}w`;
  } else {
    avifSrcSet = `${mediaInfo.avif} ${mediaInfo.width}w`;
    webpSrcSet = `${mediaInfo.webp} ${mediaInfo.width}w`;
  }

  // The sizes attribute tells the browser roughly how wide the image will be on screen
  // Defaulting to 100vw for mobile, 50vw for tablets, 33vw for desktops.
  const sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

  return (
    <picture className="w-full h-full block">
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={mediaInfo.webp}
        alt={alt}
        className={className}
        width={mediaInfo.width}
        height={mediaInfo.height}
        style={{
          background: `url(${mediaInfo.blurDataURL}) center/cover no-repeat`,
          ...props.style
        }}
        {...props}
      />
    </picture>
  );
}
