export const explorationSequence = {
  manifest: '/exploration/sequence/manifest.json',
  frameCount: 300,
  width: 1280,
  height: 720,
  staticFrame: 210,
  srcForFrame: (frame: number) => `/exploration/sequence/frame-${String(frame).padStart(3, '0')}.webp`,
} as const
