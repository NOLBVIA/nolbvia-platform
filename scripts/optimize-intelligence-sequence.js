import { mkdir, readdir, stat, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const root = fileURLToPath(new URL('../', import.meta.url))
const source = path.join(root, 'public/intelligence/source')
const output = path.join(root, 'public/intelligence/sequence')
const files = (await readdir(source))
  .filter(name => /^ezgif-frame-\d{3}\.png$/i.test(name))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]))

if (files.length !== 300) throw new Error(`Expected 300 Intelligence PNG frames, found ${files.length}`)

await mkdir(output, { recursive: true })

let sourceBytes = 0
let outputBytes = 0
let dimensions

for (const [index, name] of files.entries()) {
  const frame = index + 1
  if (Number(name.match(/\d+/)[0]) !== frame) throw new Error(`Missing Intelligence frame ${String(frame).padStart(3, '0')}`)
  const input = path.join(source, name)
  const metadata = await sharp(input).metadata()
  dimensions ??= { width: metadata.width, height: metadata.height }
  if (metadata.width !== dimensions.width || metadata.height !== dimensions.height) throw new Error(`Inconsistent dimensions: ${name}`)
  sourceBytes += (await stat(input)).size
}

// Sequential conversion bounds memory use. WebP quality 90 preserves the fine
// illuminated network details while following Development's proven pipeline.
for (const [index, name] of files.entries()) {
  const input = path.join(source, name)
  const result = await sharp(input).webp({ quality: 90, effort: 5 }).toFile(path.join(output, name.replace(/\.png$/i, '.webp')))
  outputBytes += result.size
  if ((index + 1) % 25 === 0) console.log(`Intelligence: ${index + 1}/${files.length}`)
}

const manifest = {
  frameCount: files.length,
  ...dimensions,
  prefix: 'ezgif-frame-',
  extension: '.webp',
}

await writeFile(path.join(output, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`)

console.log(JSON.stringify({
  ...manifest,
  sourceBytes,
  outputBytes,
  reductionPercent: Number((100 * (1 - outputBytes / sourceBytes)).toFixed(2)),
}, null, 2))
