import fs from 'fs';
import https from 'https';
import path from 'path';

const assetsDir = path.join(process.cwd(), 'src', 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

const files = [
  { src: 'C:/Users/zahlan/.gemini/antigravity/brain/e91f0bf3-e4c5-4f7c-aa9d-f028f849a994/uploaded_image_0_1763829454064.png', dest: 'visa.png' },
  { src: 'C:/Users/zahlan/.gemini/antigravity/brain/e91f0bf3-e4c5-4f7c-aa9d-f028f849a994/uploaded_image_1_1763829454064.png', dest: 'wema.png' }
];

files.forEach(f => {
  try {
    fs.copyFileSync(f.src, path.join(assetsDir, f.dest));
    console.log(`Copied ${f.dest}`);
  } catch (e) {
    console.error(`Error copying ${f.dest}:`, e);
  }
});

const wiseUrl = 'https://d21buns5ku92am.cloudfront.net/69645/images/470455-Frame%2039263-cdfad6-original-1677657684.png';
const wiseDest = path.join(assetsDir, 'wise.png');
const file = fs.createWriteStream(wiseDest);
https.get(wiseUrl, function(response) {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Downloaded wise.png');
  });
}).on('error', (err) => {
    console.error('Error downloading wise.png:', err);
});
