const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDirs = [
  path.join(__dirname, 'public/images'),
  path.join(__dirname, 'جود الاصايل'),
  path.join(__dirname, 'جود الاصايل  2')
];

async function processDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpeg')) {
      const inputPath = path.join(dir, file);
      const filenameWithoutExt = file.substring(0, file.lastIndexOf('.'));
      const outputPath = path.join(dir, `${filenameWithoutExt}.webp`);
      
      // Convert
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        
        console.log(`Converted: ${file} -> ${filenameWithoutExt}.webp`);
        // Delete original
        fs.unlinkSync(inputPath);
      } catch (err) {
        console.error(`Error converting ${file}:`, err);
      }
    }
  }
}

async function updateStudioData() {
  const dataPath = path.join(__dirname, 'src/data/studioData.ts');
  if (fs.existsSync(dataPath)) {
    let content = fs.readFileSync(dataPath, 'utf8');
    content = content.replace(/\.jpg/g, '.webp');
    content = content.replace(/\.jpeg/g, '.webp');
    content = content.replace(/\.png/g, '.webp');
    fs.writeFileSync(dataPath, content, 'utf8');
    console.log('Updated studioData.ts to use .webp extensions.');
  }
}

async function run() {
  for (const dir of inputDirs) {
    console.log(`Processing directory: ${dir}`);
    await processDir(dir);
  }
  await updateStudioData();
  console.log('Conversion complete!');
}

run();
