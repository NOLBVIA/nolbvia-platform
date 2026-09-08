import { readdir, mkdir, stat, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const root = fileURLToPath(new URL('../', import.meta.url))
const source = path.join(root, 'public/development/sequence-source')
const output = path.join(root, 'public/development/sequence')
const files = (await readdir(source)).filter(name => /^ezgif-frame-\d+\.png$/i.test(name))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]))
if (!files.length) throw new Error('No Development PNG frames found')
let sourceBytes = 0
let outputBytes = 0
let dimensions
for (const [index, name] of files.entries()) {
  if (Number(name.match(/\d+/)[0]) !== index + 1) throw new Error(`Missing frame before ${name}`)
  const metadata = await sharp(path.join(source, name)).metadata()
  dimensions ??= { width: metadata.width, height: metadata.height }
  if (metadata.width !== dimensions.width || metadata.height !== dimensions.height) throw new Error(`Inconsistent dimensions: ${name}`)
}
await mkdir(output, { recursive: true })
// Sequential conversion bounds optimizer memory; originals are never modified.
for (const [index, name] of files.entries()) {
  const input = path.join(source, name)
  const result = await sharp(input).webp({ quality: 88, effort: 5 }).toFile(path.join(output, `frame-${String(index + 1).padStart(3, '0')}.webp`))
  sourceBytes += (await stat(input)).size
  outputBytes += result.size
  if ((index + 1) % 50 === 0) console.log(`Development: ${index + 1}/${files.length}`)
}
await writeFile(path.join(output, 'manifest.json'), JSON.stringify({ frameCount: files.length, ...dimensions, prefix: 'frame-', extension: '.webp' }, null, 2) + '\n')
console.log(JSON.stringify({ frameCount: files.length, ...dimensions, sourceBytes, outputBytes, reductionPercent: Number((100 * (1 - outputBytes / sourceBytes)).toFixed(2)) }, null, 2))
