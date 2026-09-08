import { rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

// Vite copies public/ verbatim. Remove only its generated copy of the PNG sources.
// The original public/development/sequence-source directory is never touched.
const generatedSources = fileURLToPath(new URL('../dist/development/sequence-source/', import.meta.url))
await rm(generatedSources, { recursive: true, force: true })
console.log('Production output retains optimized Development frames only.')
