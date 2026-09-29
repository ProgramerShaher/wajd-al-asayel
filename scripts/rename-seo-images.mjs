import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '..');
const IMAGES_DIR = path.join(PROJECT_ROOT, 'public', 'images');

// خريطة لتسمية الصور بشكل وصفي بناءً على ما وجدناه في المحتوى
const SEO_NAMES_MAP = {
  'IMG-20260921-WA0008.webp': 'dammam-luxury-decor-main.webp',
  'IMG-20260921-WA0018.webp': 'crystal-panels-led-lighting-decor.webp',
  'IMG-20260921-WA0014.webp': 'wood-and-marble-alternative-panels.webp',
  'IMG-20260921-WA0015.webp': 'gypsum-board-ceiling-design.webp',
  'IMG-20260921-WA0011.webp': 'wood-alternative-wall-cladding.webp',
  'IMG-20260921-WA0004.webp': 'joten-interior-painting-dammam.webp',
  'IMG-20260921-WA0009.webp': 'exterior-villa-painting-khobar.webp',
  'IMG-20260921-WA0007.webp': 'modern-tv-wall-decor.webp',
  'IMG-20260921-WA0017.webp': 'roof-waterproofing-foam-insulation.webp',
  'IMG-20260921-WA0016.webp': 'garden-pergolas-and-umbrellas.webp',
  'IMG-20260921-WA0002.webp': 'epoxy-floor-coating-insulation.webp',
  'IMG-20260921-WA0003.webp': 'classic-foam-panels-design.webp',
  'IMG-20260921-WA0019.webp': 'living-room-decor-marble-tv.webp',
  'IMG-20260921-WA0012.webp': 'bedroom-modern-gypsum-decor.webp',
  'IMG-20260921-WA0022.webp': 'luxury-interior-finishing-details.webp',
  // Some others found in studioData.ts
  'IMG-20260923-WA0015.webp': 'interior-decor-project-15.webp',
  'IMG-20260923-WA0018.webp': 'interior-decor-project-18.webp',
  'IMG-20260923-WA0028.webp': 'interior-decor-project-28.webp',
  'IMG-20260923-WA0032.webp': 'interior-decor-project-32.webp',
  'IMG-20260923-WA0019.webp': 'interior-decor-project-19.webp',
  'IMG-20260923-WA0014.webp': 'interior-decor-project-14.webp',
  'IMG-20260923-WA0033.webp': 'interior-decor-project-33.webp',
};

// دالة لحساب الـ Hash لاكتشاف التكرار
function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return hashSum.digest('hex');
}

async function run() {
  console.log('🚀 بدء فحص وتسمية الصور (SEO Rename)...');
  
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('❌ مجلد الصور غير موجود:', IMAGES_DIR);
    return;
  }

  const files = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png'));
  
  const hashMap = new Map(); // hash -> filename
  const replacements = new Map(); // oldFilename -> newFilename
  let deletedCount = 0;

  // 1. فحص التكرار
  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file);
    const hash = getFileHash(filePath);
    
    if (hashMap.has(hash)) {
      const originalFile = hashMap.get(hash);
      console.log(`🗑️  حذف نسخة متكررة: ${file} (نسخة من ${originalFile})`);
      fs.unlinkSync(filePath);
      replacements.set(file, originalFile); // إذا كان هناك مرجع للنسخة المحذوفة، اجعله يشير للأصلية أولاً
      deletedCount++;
    } else {
      hashMap.set(hash, file);
    }
  }

  // 2. تحديث الأسماء لتكون SEO Friendly
  const remainingFiles = fs.readdirSync(IMAGES_DIR).filter(f => f.endsWith('.webp') || f.endsWith('.jpg') || f.endsWith('.png'));
  let counter = 1;

  for (const file of remainingFiles) {
    let newName = SEO_NAMES_MAP[file];
    
    if (!newName) {
      // إذا لم تكن في الخريطة، نعطيها اسماً تسلسلياً عاماً ولكن أفضل من IMG-xxxx
      if (file.startsWith('IMG-') && file.endsWith('.webp')) {
         newName = `wajd-decor-project-${counter++}.webp`;
      }
    }

    if (newName && newName !== file) {
      // تأكد أن الاسم الجديد غير مستخدم
      let finalNewName = newName;
      let suffix = 1;
      while (fs.existsSync(path.join(IMAGES_DIR, finalNewName))) {
        const ext = path.extname(newName);
        const name = path.basename(newName, ext);
        finalNewName = `${name}-${suffix}${ext}`;
        suffix++;
      }

      const oldPath = path.join(IMAGES_DIR, file);
      const newPath = path.join(IMAGES_DIR, finalNewName);
      
      fs.renameSync(oldPath, newPath);
      console.log(`✅ تمت إعادة التسمية: ${file} ➔ ${finalNewName}`);
      
      // Update replacements map
      replacements.set(file, finalNewName);
      // Update any previous duplicates pointing to this file
      for (const [key, val] of replacements.entries()) {
        if (val === file) {
          replacements.set(key, finalNewName);
        }
      }
    }
  }

  // 3. تحديث الـ References في كامل المشروع
  const DIRS_TO_CHECK = ['src', 'public', '.'];
  const EXTENSIONS = ['.ts', '.tsx', '.html', '.xml', '.cjs', '.json'];

  function updateReferencesInDirectory(dir) {
    const entries = fs.readdirSync(path.join(PROJECT_ROOT, dir), { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.name === 'node_modules' || entry.name === 'dist' || entry.name === '.git') continue;
      
      const fullPath = path.join(PROJECT_ROOT, dir, entry.name);
      
      if (entry.isDirectory()) {
        updateReferencesInDirectory(path.join(dir, entry.name));
      } else if (entry.isFile() && EXTENSIONS.some(ext => entry.name.endsWith(ext))) {
        let content = fs.readFileSync(fullPath, 'utf8');
        let hasChanges = false;

        for (const [oldName, newName] of Object.entries(Object.fromEntries(replacements))) {
          // استبدال دقيق
          const regexStr = oldName.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          const regex = new RegExp(regexStr, 'g');
          
          if (regex.test(content)) {
            content = content.replace(regex, newName);
            hasChanges = true;
          }
        }

        if (hasChanges) {
          fs.writeFileSync(fullPath, content, 'utf8');
          console.log(`📝 تم تحديث المراجع في: ${path.join(dir, entry.name)}`);
        }
      }
    }
  }

  console.log('🔄 جاري تحديث جميع الروابط في المشروع...');
  DIRS_TO_CHECK.forEach(dir => {
     if (dir === '.') {
       // Only process files in root
       fs.readdirSync(PROJECT_ROOT).forEach(file => {
          if (fs.statSync(path.join(PROJECT_ROOT, file)).isFile() && EXTENSIONS.some(ext => file.endsWith(ext))) {
              let content = fs.readFileSync(path.join(PROJECT_ROOT, file), 'utf8');
              let hasChanges = false;
              for (const [oldName, newName] of Object.entries(Object.fromEntries(replacements))) {
                const regexStr = oldName.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                const regex = new RegExp(regexStr, 'g');
                if (regex.test(content)) {
                  content = content.replace(regex, newName);
                  hasChanges = true;
                }
              }
              if (hasChanges) {
                fs.writeFileSync(path.join(PROJECT_ROOT, file), content, 'utf8');
                console.log(`📝 تم تحديث المراجع في: ${file}`);
              }
          }
       });
     } else {
       updateReferencesInDirectory(dir);
     }
  });

  console.log('✨ تمت العملية بنجاح!');
  console.log(`- الصور المحذوفة (مكررة): ${deletedCount}`);
  console.log(`- الصور المعاد تسميتها: ${replacements.size - deletedCount}`);
}

run().catch(console.error);
