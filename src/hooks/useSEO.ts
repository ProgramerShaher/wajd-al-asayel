/**
 * hooks/useSEO.ts
 * Hook لتحديث meta tags ديناميكياً لكل صفحة
 * يعمل على مستوى client-side لتحسين السيو عند التنقل
 */
import { useEffect } from 'react';

interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  keywords?: string;
  ogImage?: string;
  jsonLd?: object;
}

export function useSEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = 'https://wajd-al-asayel.vercel.app/images/IMG-20260921-WA0008.webp',
  jsonLd,
}: SEOMeta) {
  useEffect(() => {
    // تحديث العنوان
    document.title = title;

    // تحديث الوصف
    setMeta('name', 'description', description);

    // تحديث الكلمات المفتاحية
    if (keywords) setMeta('name', 'keywords', keywords);

    // تحديث Canonical
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (link) {
      link.href = canonical;
    } else {
      link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonical;
      document.head.appendChild(link);
    }

    // Open Graph
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:image', ogImage);

    // Twitter
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // JSON-LD
    if (jsonLd) {
      const existing = document.querySelector('script[data-page-schema]');
      if (existing) existing.remove();
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-page-schema', 'true');
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      // Reset to home defaults on unmount
      document.title = 'ديكورات ودهانات الدمام | مؤسسة وجد الأصايل';
    };
  }, [title, description, canonical, keywords, ogImage, jsonLd]);
}

function setMeta(attr: 'name' | 'property', value: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${value}"]`);
  if (el) {
    el.content = content;
  } else {
    el = document.createElement('meta');
    el.setAttribute(attr, value);
    el.content = content;
    document.head.appendChild(el);
  }
}
