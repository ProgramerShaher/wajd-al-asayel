/**
 * convert-next-gen.cjs
 * ====================================================================
 * سكربت تحويل الصور إلى صيغ الجيل التالي (WebP + AVIF)
 * لموقع وجد الأصايل - ديكورات الدمام والخبر
 * ====================================================================
 * الاستخدام: node convert-next-gen.cjs
 * المتطلبات: npm install sharp (مثبت بالفعل في package.json)
 * ====================================================================
 * المعايير المطبقة:
 *  - WebP بجودة 80% (أفضل توازن: حجم صغير / وضوح ديكورات عالٍ)
 *  - AVIF بجودة 65% (أصغر حجم ممكن لمتصفحات Chrome الحديثة)
 *  - الحفاظ على نسب الأبعاد الأصلية (لا CLS)
 *  - أرشفة الملفات الأصلية في مجلد backup
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, 'public', 'images');
const BACKUP_DIR = path.join(__dirname, 'public', 'images', '_originals_backup');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.bmp', '.tiff'];

// جودة الإخراج (معايير Google PageSpeed المثالية للديكورات)
const WEBP_QUALITY = 80;
const AVIF_QUALITY = 60;

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const base = path.basename(filePath, ext);
  const dir = path.dirname(filePath);

  if (!SUPPORTED_FORMATS.includes(ext)) return;

  const webpOutput = path.join(dir, `${base}.webp`);
  const avifOutput = path.join(dir, `${base}.avif`);

  try {
    const img = sharp(filePath);
    const meta = await img.metadata();

    console.log(`\n📷 معالجة: ${path.basename(filePath)} (${meta.width}x${meta.height})`);

    // 1. تحويل إلى WebP
    if (!fs.existsSync(webpOutput)) {
      await img.clone()
        .webp({ quality: WEBP_QUALITY, effort: 6 })
        .toFile(webpOutput);
      const webpSize = (fs.statSync(webpOutput).size / 1024).toFixed(1);
      console.log(`   ✅ WebP: ${base}.webp (${webpSize}KB)`);
    } else {
      console.log(`   ⏭ WebP موجود مسبقاً: ${base}.webp`);
    }

    // 2. تحويل إلى AVIF (لمتصفحات Chrome/Firefox الحديثة)
    if (!fs.existsSync(avifOutput)) {
      await img.clone()
        .avif({ quality: AVIF_QUALITY, effort: 7, chromaSubsampling: '4:2:0' })
        .toFile(avifOutput);
      const avifSize = (fs.statSync(avifOutput).size / 1024).toFixed(1);
      console.log(`   ✅ AVIF: ${base}.avif (${avifSize}KB)`);
    } else {
      console.log(`   ⏭ AVIF موجود مسبقاً: ${base}.avif`);
    }

    // نقل الأصل إلى النسخ الاحتياطية
    if (!fs.existsSync(BACKUP_DIR)) {
      fs.mkdirSync(BACKUP_DIR, { recursive: true });
    }
    fs.renameSync(filePath, path.join(BACKUP_DIR, path.basename(filePath)));
    console.log(`   📦 أُرشف الأصل: ${path.basename(filePath)}`);

  } catch (err) {
    console.error(`   ❌ فشل في معالجة ${path.basename(filePath)}: ${err.message}`);
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('🎨 سكربت تحويل صور ديكورات وجد الأصايل إلى WebP + AVIF');
  console.log('='.repeat(60));
  console.log(`📂 مجلد الصور: ${INPUT_DIR}`);

  if (!fs.existsSync(INPUT_DIR)) {
    console.error('❌ مجلد الصور غير موجود!');
    process.exit(1);
  }

  const files = fs.readdirSync(INPUT_DIR);
  const imagesToConvert = files.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return SUPPORTED_FORMATS.includes(ext);
  });

  if (imagesToConvert.length === 0) {
    console.log('✨ لا توجد صور تحتاج إلى تحويل - كل الصور بالفعل بصيغة WebP أو AVIF!');
    return;
  }

  console.log(`\n📊 وُجدت ${imagesToConvert.length} صورة للتحويل...\n`);

  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const file of imagesToConvert) {
    const filePath = path.join(INPUT_DIR, file);
    totalOriginalSize += fs.statSync(filePath).size;
    await convertImage(filePath);
    const webpPath = path.join(INPUT_DIR, `${path.basename(file, path.extname(file))}.webp`);
    if (fs.existsSync(webpPath)) {
      totalNewSize += fs.statSync(webpPath).size;
    }
  }

  const saved = ((1 - totalNewSize / totalOriginalSize) * 100).toFixed(1);
  console.log('\n' + '='.repeat(60));
  console.log(`✅ اكتملت العملية!`);
  console.log(`📉 الحجم الأصلي: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`📦 حجم WebP الجديد: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`💰 وفرنا: ${saved}% من حجم الصور!`);
  console.log('='.repeat(60));
}

main().catch(console.error);
