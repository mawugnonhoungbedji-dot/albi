import sharp from 'sharp';
import { readdirSync, statSync } from 'fs';
import { join, extname, basename } from 'path';

const inputDir = './public/images';

const files = readdirSync(inputDir).filter(f =>
  ['.jpg', '.jpeg', '.png'].includes(extname(f).toLowerCase())
);

let totalSaved = 0;

for (const file of files) {
  const inputPath = join(inputDir, file);
  const outputName = basename(file, extname(file)) + '.webp';
  const outputPath = join(inputDir, outputName);

  const originalSize = statSync(inputPath).size;

  await sharp(inputPath)
    .webp({ quality: 80 })
    .toFile(outputPath);

  const newSize = statSync(outputPath).size;
  const saved = originalSize - newSize;
  totalSaved += saved;

  console.log(
    `✅ ${file} → ${outputName} | ${(originalSize / 1024).toFixed(0)}KB → ${(newSize / 1024).toFixed(0)}KB | -${(saved / 1024).toFixed(0)}KB`
  );
}

console.log(`\n🎉 Total économisé : ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
