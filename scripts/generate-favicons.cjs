/**
 * scripts/generate-favicons.cjs
 * ====================================================================
 * سكربت توليد حزمة الأيقونات القياسية لجميع المنصات والأنظمة:
 * (Favicon, Apple Touch Icon, Android Chrome, PWA Maskable, Windows Tiles)
 * ====================================================================
 * التشغيل: node scripts/generate-favicons.cjs
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SOURCE_IMAGE = path.join(PUBLIC_DIR, 'wa-logo.png');
const SVG_SOURCE = path.join(PUBLIC_DIR, 'wa-logo.svg');

// مصفوفة الأيقونات القياسية المطلوبة عالمياً
const ICON_SPECS = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'icon-192x192.png', size: 192 },
  { name: 'icon-512x512.png', size: 512 },
];

async function generateIcons() {
  console.log('='.repeat(70));
  console.log('🎨 بدء توليد حزمة الأيقونات الرسمية لجميع المنصات (Favicons & PWA Icons)');
  console.log('='.repeat(70));

  if (!fs.existsSync(SOURCE_IMAGE)) {
    console.error(`❌ الملف المصدر غير موجود: ${SOURCE_IMAGE}`);
    process.exit(1);
  }

  const sourceBuffer = fs.readFileSync(SOURCE_IMAGE);

  // 1. توليد أيقونات PNG القياسية
  for (const spec of ICON_SPECS) {
    const outputPath = path.join(PUBLIC_DIR, spec.name);
    await sharp(sourceBuffer)
      .resize(spec.size, spec.size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9, adaptiveFiltering: true })
      .toFile(outputPath);
    console.log(`   ✅ تم إنشاء: ${spec.name} (${spec.size}x${spec.size}px)`);
  }

  // 2. توليد أيقونة Maskable للأندرويد (تتضمن Safe Zone بنسبة 10% إلى 15% حواف لحمايتها من القص)
  const maskablePath = path.join(PUBLIC_DIR, 'icon-maskable-512x512.png');
  const innerIconSize = Math.round(512 * 0.8); // 80% من الحجم الكلي لمنطقة الأمان (Safe Zone)
  
  const resizedInner = await sharp(sourceBuffer)
    .resize(innerIconSize, innerIconSize, { fit: 'contain', background: { r: 5, g: 5, b: 5, alpha: 1 } })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 5, g: 5, b: 5, alpha: 1 } // خلفية داكنة ملكية تتطابق مع هوية الموقع
    }
  })
    .composite([{ input: resizedInner, gravity: 'center' }])
    .png({ compressionLevel: 9 })
    .toFile(maskablePath);

  console.log(`   ✅ تم إنشاء: icon-maskable-512x512.png (512x512px مع Safe Zone)`);

  // 3. إنشاء favicon.ico (نسخة 48x48 أو 32x32 متوافقة مع المتصفحات الكلاسيكية)
  const icoPath = path.join(PUBLIC_DIR, 'favicon.ico');
  await sharp(sourceBuffer)
    .resize(32, 32)
    .toFile(icoPath);
  console.log(`   ✅ تم إنشاء: favicon.ico (Legacy Fallback)`);

  // 4. التأكد من وجود favicon.svg
  const svgFavicon = path.join(PUBLIC_DIR, 'favicon.svg');
  if (fs.existsSync(SVG_SOURCE) && !fs.existsSync(svgFavicon)) {
    fs.copyFileSync(SVG_SOURCE, svgFavicon);
    console.log(`   ✅ تم نسخ: favicon.svg (Vector Favicon)`);
  }

  console.log('='.repeat(70));
  console.log('🎉 اكتمل توليد جميع الأيقونات بنجاح 100% وبأعلى كفاءة ضغط!');
  console.log('='.repeat(70));
}

generateIcons().catch(console.error);
