export const intelligenceSequence = {
  frameCount: 300,
  width: 1280,
  height: 720,
  manifest: '/intelligence/sequence/manifest.json',
  srcForFrame: (frame: number) => `/intelligence/sequence/ezgif-frame-${String(frame).padStart(3, '0')}.webp`,
} as const
