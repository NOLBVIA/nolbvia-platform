import { readdir, unlink } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// Only remove Vite's generated PNG copies; never touch the public/ masters.
const output = fileURLToPath(new URL('../dist/exploration/sequence/', import.meta.url))
const entries = await readdir(output, { withFileTypes: true })
const pngs = entries.filter(entry => entry.isFile() && path.extname(entry.name).toLowerCase() === '.png')
for (const entry of pngs) {
  await unlink(path.join(output, entry.name))
}
console.log(`Excluded ${pngs.length} Exploration source PNG copies from production output.`)
