export const developmentSequence = {
  manifest: '/development/sequence/manifest.json',
  srcForFrame: (frame: number) => `/development/sequence/frame-${String(frame).padStart(3, '0')}.webp`,
} as const
