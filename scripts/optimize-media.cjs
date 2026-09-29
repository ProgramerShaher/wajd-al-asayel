/**
 * scripts/optimize-media.cjs
 * ====================================================================
 * سكربت متقدم لمعالجة وتوليد وسائط الجيل التالي (Next-Gen Multi-Variant Pipeline)
 * لموقع مؤسسة وجد الأصايل - دهانات وديكورات وعوازل الدمام
 * ====================================================================
 * الميزات الهندسية المطبقة:
 *  1. إنشاء نسخ AVIF فائقة الضغط (بجودة 62% لمتصفحات Chrome / Safari).
 *  2. إنشاء نسخ WebP واسعة التوافق (بجودة 80%).
 *  3. توليد مقاسات متعددة متجاوبة (Responsive Breakpoints: 400w, 800w, 1200w, 1920w).
 *  4. توليد صور مصغرة مضببة (LQIP - Low Quality Image Placeholders) بتنسيق Base64
 *     وحفظها في ملف media-manifest.json لاستدعاء Blur-Up فوري بدون أي طلب شبكة إضافي.
 *  5. استخراج أبعاد الصور الأصلية (width, height, aspect-ratio) لتغذية كود الـ CLS.
 * ====================================================================
 * التشغيل: node scripts/optimize-media.cjs
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const MANIFEST_PATH = path.join(__dirname, '..', 'src', 'data', 'media-manifest.json');
const SUPPORTED_INPUTS = ['.jpg', '.jpeg', '.png', '.webp'];
const TARGET_WIDTHS = [400, 800, 1200, 1920];

async function generateBlurPlaceholder(imageBuffer) {
  try {
    const placeholderBuffer = await sharp(imageBuffer)
      .resize(20, 20, { fit: 'inside' })
      .webp({ quality: 20 })
      .toBuffer();
    return `data:image/webp;base64,${placeholderBuffer.toString('base64')}`;
  } catch (e) {
    return null;
  }
}

async function processImage(fileName, manifest) {
  const ext = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, ext);
  const inputPath = path.join(IMAGES_DIR, fileName);

  // تخطي المجلدات أو الملفات المصغرة مسبقاً
  if (fileName.includes('_backup') || fileName.includes('-w')) return;

  try {
    const fileBuffer = fs.readFileSync(inputPath);
    const metadata = await sharp(fileBuffer).metadata();
    const originalWidth = metadata.width || 1200;
    const originalHeight = metadata.height || 800;
    const aspectRatio = `${originalWidth}/${originalHeight}`;

    console.log(`\n🔍 معالجة: ${fileName} (${originalWidth}x${originalHeight})`);

    // توليد Base64 LQIP Placeholder
    const blurDataURL = await generateBlurPlaceholder(fileBuffer);

    // 1. إنشاء نسخة AVIF الرئيسية
    const avifMainPath = path.join(IMAGES_DIR, `${baseName}.avif`);
    if (!fs.existsSync(avifMainPath)) {
      await sharp(fileBuffer)
        .avif({ quality: 62, effort: 6 })
        .toFile(avifMainPath);
      console.log(`   ✨ أنشئت: ${baseName}.avif`);
    }

    // 2. إنشاء نسخة WebP الرئيسية
    const webpMainPath = path.join(IMAGES_DIR, `${baseName}.webp`);
    if (!fs.existsSync(webpMainPath)) {
      await sharp(fileBuffer)
        .webp({ quality: 80, effort: 6 })
        .toFile(webpMainPath);
      console.log(`   ✨ أنشئت: ${baseName}.webp`);
    }

    // 3. توليد المقاسات المتجاوبة للصور الكبيرة (> 600px)
    const variants = [];
    if (originalWidth >= 600) {
      for (const w of TARGET_WIDTHS) {
        if (w < originalWidth) {
          const resizedWebpPath = path.join(IMAGES_DIR, `${baseName}-${w}w.webp`);
          const resizedAvifPath = path.join(IMAGES_DIR, `${baseName}-${w}w.avif`);

          if (!fs.existsSync(resizedWebpPath)) {
            await sharp(fileBuffer)
              .resize(w)
              .webp({ quality: 80 })
              .toFile(resizedWebpPath);
          }

          if (!fs.existsSync(resizedAvifPath)) {
            await sharp(fileBuffer)
              .resize(w)
              .avif({ quality: 62 })
              .toFile(resizedAvifPath);
          }

          variants.push({
            width: w,
            webp: `/images/${baseName}-${w}w.webp`,
            avif: `/images/${baseName}-${w}w.avif`,
          });
        }
      }
    }

    // إضافة بيانات الصورة إلى الـ Manifest
    manifest[baseName] = {
      baseName,
      originalPath: `/images/${fileName}`,
      webp: `/images/${baseName}.webp`,
      avif: `/images/${baseName}.avif`,
      width: originalWidth,
      height: originalHeight,
      aspectRatio,
      blurDataURL,
      variants,
    };

  } catch (err) {
    console.error(`   ❌ خطأ في معالجة ${fileName}:`, err.message);
  }
}

async function run() {
  console.log('='.repeat(70));
  console.log('🚀 بدء خط معالجة وسائط الجيل التالي (Next-Gen Media Pipeline)');
  console.log('='.repeat(70));

  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('❌ مجلد الصور غير موجود:', IMAGES_DIR);
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR).filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return SUPPORTED_INPUTS.includes(ext) && !f.includes('-w');
  });

  const manifest = {};

  for (const file of files) {
    await processImage(file, manifest);
  }

  // حفظ الـ Manifest في src/data/media-manifest.json
  const dataDir = path.dirname(MANIFEST_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log('\n' + '='.repeat(70));
  console.log(`✅ تم إنشاء الـ Manifest بنجاح: ${MANIFEST_PATH}`);
  console.log(`📊 إجمالي الوسائط المعالجة: ${Object.keys(manifest).length} صورة`);
  console.log('='.repeat(70));
}

run();
