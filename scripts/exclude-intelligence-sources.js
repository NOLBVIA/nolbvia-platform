import { readdir, rm, unlink } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

// Remove only Vite's generated copies. The public/ masters stay intact.
const generatedSources = fileURLToPath(new URL('../dist/intelligence/source/', import.meta.url))
const output = fileURLToPath(new URL('../dist/intelligence/sequence/', import.meta.url))

await rm(generatedSources, { recursive: true, force: true })

const entries = await readdir(output, { withFileTypes: true }).catch(error => {
  if (error.code === 'ENOENT') return []
  throw error
})
const pngs = entries.filter(entry => entry.isFile() && path.extname(entry.name).toLowerCase() === '.png')

for (const entry of pngs) {
  await unlink(path.join(output, entry.name))
}

console.log(`Excluded ${pngs.length} Intelligence source PNG copies from production output.`)
