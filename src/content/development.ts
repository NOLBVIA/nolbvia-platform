export type DevelopmentProjectStatus = 'ACTIVE — IN PRODUCTION' | 'IN DEVELOPMENT'

export type DevelopmentProject = {
  id: string
  slug: string
  name: string
  category: string
  status: DevelopmentProjectStatus
  description: string
  audience?: string
}

export const developmentMetadata = {
  title: 'NOLBVIA Development — Software, AI & Digital Systems',
  description: 'NOLBVIA Development is the technology division of NOLBVIA focused on software, artificial intelligence, computing, digital products, systems and experimental technology.',
  canonical: 'https://nolbvia.com/development/',
} as const

export const developmentNavigation = [
  { label: 'OVERVIEW', href: '#overview' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CAPABILITIES', href: '#capabilities' },
  { label: 'PROCESS', href: '#process' },
  { label: 'STATUS', href: '#status' },
] as const

export const developmentCore = [
  { index: '01', title: 'SOFTWARE', description: 'Applications and digital platforms engineered for real-world use.' },
  { index: '02', title: 'ARTIFICIAL INTELLIGENCE', description: 'Intelligent systems, AI agents and computational intelligence.' },
  { index: '03', title: 'COMPUTING', description: 'Computational systems, automation and emerging technologies.' },
  { index: '04', title: 'DIGITAL PRODUCTS', description: 'Technology products designed to solve concrete problems.' },
] as const

export const developmentProjects: readonly DevelopmentProject[] = [
  {
    id: '001',
    slug: 'nolbvia-platform',
    name: 'NOLBVIA PLATFORM',
    category: 'CORPORATE / ECOSYSTEM',
    status: 'ACTIVE — IN PRODUCTION',
    description: 'The digital core of NOLBVIA and the entry point to its technological ecosystem.',
  },
  {
    id: '002',
    slug: 'nolbvia-school',
    name: 'NOLBVIA SCHOOL',
    category: 'EDTECH / EDUCATION',
    status: 'IN DEVELOPMENT',
    audience: 'PUBLIC SCHOOLS IN PERU',
    description: 'A digital platform intended for public educational institutions in Peru.',
  },
  {
    id: '003',
    slug: 'nolbvia-calendar',
    name: 'NOLBVIA CALENDAR',
    category: 'PRODUCTIVITY / ORGANIZATION',
    status: 'IN DEVELOPMENT',
    description: 'A digital platform that helps users organize activities, schedule tasks, and manage a timetable/calendar.',
  },
]

export const developmentCapabilities = [
  'SOFTWARE ENGINEERING',
  'ARTIFICIAL INTELLIGENCE',
  'COMPUTING SYSTEMS',
  'DIGITAL PRODUCTS',
  'SYSTEMS ENGINEERING',
  'EXPERIMENTAL TECHNOLOGY',
] as const

export const developmentProcess = [
  'RESEARCH',
  'ARCHITECTURE',
  'DESIGN',
  'ENGINEERING',
  'TESTING',
  'DEPLOYMENT',
  'ITERATION',
] as const

export const developmentStatus = {
  currentFocus: 'DIGITAL SYSTEMS',
  projects: developmentProjects.map(({ id, name, status }) => ({ id, name, status })),
} as const
