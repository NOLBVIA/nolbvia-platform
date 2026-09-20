export const intelligenceMetadata = {
  title: 'NOLBVIA Intelligence — Computation / Think',
  description: 'NOLBVIA Intelligence explores data, computation, knowledge and intelligent systems.',
  canonical: 'https://nolbvia.com/intelligence/',
} as const

export const intelligenceNavigation = [
  { label: 'PURPOSE', href: '#purpose' },
  { label: 'DOMAINS', href: '#domains' },
  { label: 'SYSTEMS', href: '#systems' },
  { label: 'RESEARCH', href: '#research' },
  { label: 'STATUS', href: '#status' },
] as const

export const intelligenceHero = {
  eyebrow: '01 // INTELLIGENCE',
  headline: 'INTELLIGENCE FOR COMPLEX SYSTEMS.',
  supporting: 'Data. Computation. Knowledge.',
  signal: 'FOUNDATION // COMPUTATIONAL LAYER',
} as const

export const intelligencePurpose = {
  eyebrow: '02 // PURPOSE',
  headline: 'FROM INFORMATION TO INTELLIGENCE.',
  description: 'NOLBVIA Intelligence explores how data, computation and knowledge can become useful intelligent systems.',
  stages: ['DATA', 'COMPUTATION', 'MODELS', 'KNOWLEDGE', 'INTELLIGENCE'],
} as const

export const intelligenceDomains = {
  eyebrow: '03 // DOMAINS',
  headline: 'THE COMPUTATIONAL LAYER.',
  introduction: 'Five domains define the initial direction of NOLBVIA Intelligence.',
  items: [
    {
      number: '01',
      name: 'ARTIFICIAL INTELLIGENCE',
      description: 'Exploring computational methods that support reasoning, perception and adaptive behavior.',
    },
    {
      number: '02',
      name: 'DATA & ANALYTICS',
      description: 'Studying how structured information can reveal patterns and support better decisions.',
    },
    {
      number: '03',
      name: 'COMPUTATIONAL SYSTEMS',
      description: 'Investigating architectures that coordinate computation across useful digital systems.',
    },
    {
      number: '04',
      name: 'KNOWLEDGE SYSTEMS',
      description: 'Exploring how information can be organized, connected and made accessible as knowledge.',
    },
    {
      number: '05',
      name: 'AUTOMATION',
      description: 'Studying precise, responsible ways for computational systems to support repeatable processes.',
    },
  ],
} as const

export const intelligenceSystems = {
  eyebrow: '04 // SYSTEMS',
  headline: 'INTELLIGENCE BECOMES USEFUL WHEN IT BECOMES A SYSTEM.',
  description: 'The direction of Intelligence is not limited to isolated models. It explores how intelligent computation can become part of coherent, useful systems.',
  stages: ['MODEL', 'LOGIC', 'INTERFACE', 'AUTOMATION', 'SYSTEM'],
} as const

export const intelligenceResearch = {
  eyebrow: '05 // RESEARCH',
  headline: 'QUESTIONS DRIVE THE NEXT SYSTEMS.',
  description: 'Research is a future layer of the NOLBVIA ecosystem. Intelligence can translate research, knowledge and experimentation into computational systems, while Development can turn those systems into implementation.',
  relationships: [
    { label: 'RESEARCH', value: 'QUESTIONS' },
    { label: 'INTELLIGENCE', value: 'SYSTEMS' },
    { label: 'DEVELOPMENT', value: 'IMPLEMENTATION' },
  ],
} as const

export const intelligenceStatus = {
  eyebrow: '06 // STATUS',
  phase: 'FOUNDATION',
  statement: 'Building the computational layer of the NOLBVIA ecosystem.',
  focusLabel: 'CURRENT FOCUS',
  focus: ['AI', 'DATA', 'COMPUTATIONAL SYSTEMS', 'KNOWLEDGE', 'AUTOMATION'],
  nextLabel: 'NEXT',
  next: 'Research-driven intelligent systems.',
} as const

export const intelligenceCTA = {
  eyebrow: '07 // CTA',
  headline: 'INTELLIGENCE IS PART OF THE SYSTEM.',
  links: [
    { label: 'EXPLORE DEVELOPMENT', href: '/development' },
    { label: 'RETURN TO NOLBVIA', href: '/' },
  ],
} as const

export const intelligenceFooter = {
  division: 'INTELLIGENCE',
  direction: 'COMPUTATION / KNOWLEDGE / SYSTEMS',
  links: [
    { label: 'NOLBVIA', href: '/' },
    { label: 'DEVELOPMENT', href: '/development' },
    { label: 'INTELLIGENCE', href: '/intelligence' },
    { label: 'EXPLORATION', href: '/exploration' },
  ],
} as const
