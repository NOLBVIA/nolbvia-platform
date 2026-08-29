export type Project = {
  name: string
  category: string
  description: string
  status: string
  accent: string
  code: string
  note: string
}

export const navItems = [
  { label: 'ECOSYSTEM', href: '#ecosystem' },
  { label: 'DIVISIONS', href: '#divisions' },
  { label: 'CAPABILITIES', href: '#capabilities' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'VISION', href: '#vision' },
  { label: 'CONTACT', href: '#contact' },
]

export const cinematicSequence = {
  enabled: true,
  frameCount: 300,
  srcForFrame: (frame: number) => `/sequence/ezgif-frame-${String(frame).padStart(3, '0')}.webp`,
}

export const cinematicScenes = [
  { id: 'hero', label: 'SYSTEM ACTIVATION', selector: '#top', startFrame: 1, endFrame: 50 },
  { id: 'ecosystem', label: 'ECOSYSTEM UNFOLDING', selector: '#ecosystem', startFrame: 51, endFrame: 102 },
  { id: 'capabilities', label: 'CAPABILITY LAYER', selector: '#capabilities', startFrame: 103, endFrame: 154 },
  { id: 'vision', label: 'HORIZON VECTOR', selector: '#vision', startFrame: 155, endFrame: 214 },
  { id: 'projects', label: 'PROJECT FIELD', selector: '#projects', startFrame: 215, endFrame: 260 },
  { id: 'contact', label: 'SIGNAL WINDOW', selector: '#contact', startFrame: 261, endFrame: 290 },
  { id: 'footer', label: 'SEQUENCE COMPLETE', selector: '.footer', startFrame: 291, endFrame: 300 },
] as const

export const projects: Project[] = [
  {
    name: 'SIGNAL / 01',
    category: 'Digital Product',
    description: 'Reserved for the first confirmed NOLBVIA product story and its design process.',
    status: 'CONCEPT PLACEHOLDER',
    accent: 'amber',
    code: 'NLB_CONCEPT_01',
    note: 'AWAITING PROJECT DATA',
  },
  {
    name: 'VECTOR / 02',
    category: 'Software System',
    description: 'A provisional space for a future software, application or digital platform case study.',
    status: 'CONCEPT PLACEHOLDER',
    accent: 'blue',
    code: 'NLB_CONCEPT_02',
    note: 'AWAITING PROJECT DATA',
  },
  {
    name: 'ORBIT / 03',
    category: 'Future Initiative',
    description: 'Reserved for a future experimental or exploration-oriented initiative.',
    status: 'FUTURE PLACEHOLDER',
    accent: 'violet',
    code: 'NLB_CONCEPT_03',
    note: 'OPEN HORIZON',
  },
]
