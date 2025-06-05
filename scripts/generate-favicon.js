const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/favicon.svg'));
  
  // Generate favicon.ico (32x32)
  await sharp(svgBuffer)
    .resize(32, 32)
    .toFile(path.join(__dirname, '../public/favicon.ico'));

  // Generate icon.png (32x32)
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(path.join(__dirname, '../public/icon.png'));

  // Generate apple-touch-icon.png (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(path.join(__dirname, '../public/apple-touch-icon.png'));

  console.log('Favicon files generated successfully!');
}

generateFavicons().catch(console.error); 