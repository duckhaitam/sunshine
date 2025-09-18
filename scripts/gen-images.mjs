// scripts/gen-images.mjs
import fs from 'fs/promises';
import path from 'path';
import fg from 'fast-glob';
import sharp from 'sharp';

const INPUT = 'src/assets';
const OUTPUT = 'src/assets/optimized';
const SIZES = [480, 768, 1200, 1600];
const QUALITY = 75;

const files = await fg(['**/*.{jpg,jpeg,png}'], { cwd: INPUT, onlyFiles: true });

await fs.mkdir(OUTPUT, { recursive: true });

for (const rel of files) {
  const inPath = path.join(INPUT, rel);
  const basename = path.parse(rel).name; // không lấy đuôi
  for (const w of SIZES) {
    const outPath = path.join(OUTPUT, `${basename}-${w}.webp`);
    await sharp(inPath)
      .resize({ width: w })
      .webp({ quality: QUALITY })
      .toFile(outPath);
    console.log('✅', outPath);
  }
}

console.log('Done!');
