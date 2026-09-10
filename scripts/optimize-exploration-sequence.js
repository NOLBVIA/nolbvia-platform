import { readFile, readdir, stat, writeFile } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import sharp from 'sharp'

const directory = fileURLToPath(new URL('../public/exploration/sequence/', import.meta.url))
const manifest = { frameCount: 300, width: 1280, height: 720, prefix: 'frame-', extension: '.webp' }
const quality = 90
const number = index => String(index + 1).padStart(3, '0')
const sources = Array.from({ length: manifest.frameCount }, (_, index) => `ezgif-frame-${number(index)}.png`)
const outputs = Array.from({ length: manifest.frameCount }, (_, index) => `frame-${number(index)}.webp`)
const digest = data => createHash('sha256').update(data).digest('hex')

async function run() {
  const names = await readdir(directory)
  const pngs = names.filter(name => /\.png$/i.test(name))
  if (pngs.length !== sources.length || sources.some(name => !pngs.includes(name))) {
    throw new Error('Expected exactly ezgif-frame-001.png through ezgif-frame-300.png; no conversion performed.')
  }
  if (names.some(name => /\.webp$/i.test(name) && !outputs.includes(name))) {
    throw new Error('Unexpected WebP files in output directory; inspect them before converting.')
  }

  let pngBytes = 0
  const originalHashes = new Map()
  // Validate every source before writing anything. Never resize, crop or overwrite a PNG.
  for (const name of sources) {
    const data = await readFile(path.join(directory, name))
    const metadata = await sharp(data).metadata()
    if (metadata.format !== 'png' || metadata.width !== manifest.width || metadata.height !== manifest.height) {
      throw new Error(`Invalid source format or dimensions: ${name}`)
    }
    originalHashes.set(name, digest(data))
    pngBytes += data.length
  }

  console.log(`Validated ${sources.length} PNGs, 1280x720. Source total: ${pngBytes} bytes. WebP quality: ${quality}.`)
  // Sequential encoding bounds memory. Stable filenames/options make reruns reproducible.
  for (const [index, name] of sources.entries()) {
    await sharp(path.join(directory, name))
      .webp({ quality, effort: 5 })
      .toFile(path.join(directory, outputs[index]))
    if ((index + 1) % 25 === 0) console.log(`Exploration: ${index + 1}/${sources.length}`)
  }

  const generated = (await readdir(directory)).filter(name => /\.webp$/i.test(name))
  if (generated.length !== outputs.length || outputs.some(name => !generated.includes(name))) {
    throw new Error('Generated WebP inventory does not match the expected sequence.')
  }
  let webpBytes = 0
  for (const name of outputs) {
    const file = path.join(directory, name)
    const metadata = await sharp(file).metadata()
    if (metadata.format !== 'webp' || metadata.width !== manifest.width || metadata.height !== manifest.height) {
      throw new Error(`Invalid generated frame: ${name}`)
    }
    webpBytes += (await stat(file)).size
  }
  for (const name of sources) {
    if (digest(await readFile(path.join(directory, name))) !== originalHashes.get(name)) {
      throw new Error(`Source changed during optimization: ${name}`)
    }
  }
  // Publish the manifest only after the complete output and original hashes pass validation.
  await writeFile(path.join(directory, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n', 'utf8')
  console.log(JSON.stringify({ ...manifest, quality, pngBytes, webpBytes, reductionPercent: Number((100 * (1 - webpBytes / pngBytes)).toFixed(2)), originalsUnchanged: true }, null, 2))
}

run().catch(error => {
  console.error(error)
  process.exitCode = 1
})
