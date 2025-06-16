const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const publicDir = path.join(process.cwd(), 'public');
  const svgBuffer = fs.readFileSync(path.join(publicDir, 'favicon.svg'));

  // Generate icon.png (32x32)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'icon.png'));

  // Generate apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  // Generate favicon.ico (32x32)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(publicDir, 'favicon.ico'));

  console.log('Favicon files generated successfully!');
}

generateFavicons().catch(console.error); 