const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

let modifiedFiles = 0;
walkDir('./src', function(filePath) {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;

    const imgRegex = /<(img|motion\.img)\s+([^>]+)>/g;

    newContent = newContent.replace(imgRegex, (match, tag, attrs) => {
      // Don't modify if it has a closing slash immediately, or do we?
      // React img tags end with /> so attrs might end with /
      let cleanAttrs = attrs;
      let endsWithSlash = false;
      if (cleanAttrs.trim().endsWith('/')) {
        endsWithSlash = true;
        cleanAttrs = cleanAttrs.replace(/\/$/, '').trim();
      }

      let newAttrs = cleanAttrs;
      
      if (newAttrs.includes('loading="eager"') || newAttrs.includes('priority')) {
         if (!newAttrs.includes('decoding=')) {
            newAttrs += ' decoding="sync"';
         }
      } else {
         if (!newAttrs.includes('loading=')) {
            newAttrs += ' loading="lazy"';
         }
         if (!newAttrs.includes('decoding=')) {
            newAttrs += ' decoding="async"';
         }
      }
      
      if (endsWithSlash) {
         newAttrs += ' /';
      }
      return '<' + tag + ' ' + newAttrs + '>';
    });

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated:', filePath);
      modifiedFiles++;
    }
  }
});
console.log('Done. Modified ' + modifiedFiles + ' files.');
