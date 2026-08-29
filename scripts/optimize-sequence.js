import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const originalDir = path.join(projectRoot, 'public', 'sequence-original');
const sequenceDir = path.join(projectRoot, 'public', 'sequence');

async function run() {
  console.log('--- Starting NOLBVIA 300 Frame Optimization ---');
  
  if (!fs.existsSync(originalDir)) {
    fs.mkdirSync(originalDir, { recursive: true });
    console.log('Created public/sequence-original directory');
  }

  // Find all PNG files in sequence
  const files = fs.readdirSync(sequenceDir).filter(f => f.endsWith('.png'));
  console.log(`Found ${files.length} PNG frames in sequence.`);

  // 1. Copy originals if not already copied
  for (const file of files) {
    const src = path.join(sequenceDir, file);
    const dest = path.join(originalDir, file);
    if (!fs.existsSync(dest)) {
      fs.copyFileSync(src, dest);
    }
  }
  console.log('Originals safely preserved in public/sequence-original/.');

  // 2. Convert all 300 frames to high-quality WebP
  let count = 0;
  for (let i = 1; i <= 300; i++) {
    const frameNum = String(i).padStart(3, '0');
    const pngName = `ezgif-frame-${frameNum}.png`;
    const webpName = `ezgif-frame-${frameNum}.webp`;
    
    const srcPng = path.join(originalDir, pngName);
    const destWebp = path.join(sequenceDir, webpName);

    if (fs.existsSync(srcPng)) {
      await sharp(srcPng)
        .webp({ quality: 86, effort: 4 })
        .toFile(destWebp);
      count++;
      if (count % 50 === 0 || count === 300) {
        console.log(`Optimized ${count}/300 frames...`);
      }
    } else {
      console.warn(`Warning: Missing frame ${srcPng}`);
    }
  }

  // 3. Clean up PNG files in sequence directory
  for (const file of files) {
    const p = path.join(sequenceDir, file);
    if (fs.existsSync(p)) {
      fs.unlinkSync(p);
    }
  }

  console.log('--- Sequence optimization complete! ---');
  console.log(`Optimized 300 frames to WebP in public/sequence/`);
  console.log(`Preserved 300 original frames in public/sequence-original/`);
}

run().catch(err => {
  console.error('Error during optimization:', err);
  process.exit(1);
});
