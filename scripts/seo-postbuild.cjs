#!/usr/bin/env node
/**
 * =============================================================================
 * scripts/seo-postbuild.cjs
 * SEO Post-Build Script — وجد الأصايل للديكورات والدهانات
 * =============================================================================
 * يقوم هذا السكريبت بعد كل build بـ:
 * 1. نسخ index.html لكل مسار (للأقسام المهمة)
 * 2. تحديث lastmod في sitemap.xml تلقائياً
 * 3. التحقق من وجود جميع ملفات SEO الأساسية
 * =============================================================================
 */

const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const TODAY = new Date().toISOString().split('T')[0];

console.log('\n🚀 SEO Post-Build Script — وجد الأصايل');
console.log('═'.repeat(50));

// ── 1. تحقق من وجود dist/index.html
const distIndexPath = path.join(DIST_DIR, 'index.html');
if (!fs.existsSync(distIndexPath)) {
  console.error('❌ dist/index.html غير موجود! تأكد من تشغيل `npm run build` أولاً.');
  process.exit(1);
}
console.log('✅ dist/index.html موجود');

// ── 2. تحديث تاريخ lastmod في sitemap.xml
const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  // تحديث كل تواريخ lastmod إلى اليوم
  sitemapContent = sitemapContent.replace(
    /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g,
    `<lastmod>${TODAY}</lastmod>`
  );
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf-8');

  // نسخ sitemap المحدَّث إلى dist
  fs.copyFileSync(sitemapPath, path.join(DIST_DIR, 'sitemap.xml'));
  console.log(`✅ sitemap.xml محدَّث بتاريخ: ${TODAY}`);
}

// ── 3. التحقق من وجود ملفات SEO الأساسية في dist
const requiredFiles = [
  'robots.txt',
  'sitemap.xml',
  'site.webmanifest',
];

let allGood = true;
for (const file of requiredFiles) {
  const filePath = path.join(DIST_DIR, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} — موجود`);
  } else {
    // محاولة النسخ من public
    const srcPath = path.join(PUBLIC_DIR, file);
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, filePath);
      console.log(`📋 ${file} — تم نسخه من public/`);
    } else {
      console.warn(`⚠️  ${file} — غير موجود في dist/ أو public/`);
      allGood = false;
    }
  }
}

// ── 4. التحقق من ملفات التحقق لـ Google Search Console
const gscFiles = fs.readdirSync(PUBLIC_DIR).filter(f => f.startsWith('google') && f.endsWith('.html'));
for (const gscFile of gscFiles) {
  const srcPath = path.join(PUBLIC_DIR, gscFile);
  const destPath = path.join(DIST_DIR, gscFile);
  if (!fs.existsSync(destPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log(`📋 ${gscFile} — تم نسخه (Google Search Console)`);
  } else {
    console.log(`✅ ${gscFile} — موجود (Google Search Console)`);
  }
}

// ── 5. إضافة Open Graph image fallback check
const ogImagePath = path.join(DIST_DIR, 'images', 'IMG-20260921-WA0008.webp');
if (fs.existsSync(ogImagePath)) {
  console.log('✅ Open Graph image — موجودة');
} else {
  console.warn('⚠️  Open Graph image (IMG-20260921-WA0008.webp) — غير موجودة في dist/images/');
}

console.log('\n' + '═'.repeat(50));
if (allGood) {
  console.log('✅ اكتملت عملية SEO Post-Build بنجاح!');
  console.log(`📅 التاريخ: ${TODAY}`);
  console.log('🌐 الموقع جاهز للنشر على: https://wajd-al-asayel.vercel.app');
} else {
  console.warn('⚠️  اكتملت العملية مع بعض التحذيرات — راجع الرسائل أعلاه');
}
console.log('═'.repeat(50) + '\n');
