/**
 * components/seo/PageSEO.tsx
 * مكون SEO مركزي يُدير جميع metadata لكل صفحة
 * يعمل عبر تحديث document.head مباشرة (React CSR)
 *
 * ⚠️  الدومين يُقرأ من src/config/site.ts — لا تعدّل القيم هنا
 */
import { useEffect } from 'react';
import { SITE_NAME, DEFAULT_OG_IMAGE } from '@/config/site';

export interface PageSEOProps {
  title: string;
  description: string;
  canonical: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: object | object[];
  noindex?: boolean;
}

// ── DOM helpers ──────────────────────────────────────────────────────────────

function upsertMeta(selector: string, attrPair: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    const [k, v] = attrPair.split('=');
    el.setAttribute(k, (v ?? '').replace(/"/g, ''));
    document.head.appendChild(el);
  }
  el.content = value;
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function removePageJsonLd() {
  document.querySelectorAll('script[data-page-schema]').forEach(el => el.remove());
}

function injectJsonLd(data: object | object[]) {
  removePageJsonLd();
  const schemas = Array.isArray(data) ? data : [data];
  schemas.forEach(schema => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page-schema', 'true');
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

// ── Component ────────────────────────────────────────────────────────────────

export default function PageSEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  jsonLd,
  noindex = false,
}: PageSEOProps) {
  useEffect(() => {
    const prevTitle = document.title;

    // Title
    document.title = `${title} | ${SITE_NAME}`;

    // Meta description
    upsertMeta('meta[name="description"]', 'name="description"', description);

    // Robots
    upsertMeta(
      'meta[name="robots"]',
      'name="robots"',
      noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );

    // Canonical
    upsertLink('canonical', canonical);

    // Open Graph
    upsertMeta('meta[property="og:title"]',       'property="og:title"',       ogTitle ?? title);
    upsertMeta('meta[property="og:description"]', 'property="og:description"', ogDescription ?? description);
    upsertMeta('meta[property="og:url"]',         'property="og:url"',         canonical);
    upsertMeta('meta[property="og:image"]',       'property="og:image"',       ogImage);
    upsertMeta('meta[property="og:image:secure_url"]', 'property="og:image:secure_url"', ogImage);
    upsertMeta('meta[property="og:type"]',        'property="og:type"',        ogType);

    // Twitter / X
    upsertMeta('meta[name="twitter:title"]',       'name="twitter:title"',       ogTitle ?? title);
    upsertMeta('meta[name="twitter:description"]', 'name="twitter:description"', ogDescription ?? description);
    upsertMeta('meta[name="twitter:image"]',       'name="twitter:image"',       ogImage);

    // Page-level JSON-LD
    if (jsonLd) injectJsonLd(jsonLd);

    return () => {
      document.title = prevTitle;
      if (jsonLd) removePageJsonLd();
    };
  }, [title, description, canonical, ogTitle, ogDescription, ogImage, ogType, jsonLd, noindex]);

  return null;
}
