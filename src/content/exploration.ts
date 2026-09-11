export const explorationContent = {
  brand: 'NOLBVIA',
  eyebrow: '[ 02 // EXPLORATION ]',
  headline: 'BEYOND THE KNOWN.',
  description: 'Exploring science, technology and the frontiers of tomorrow.',
  cta: 'ENTER ECOSYSTEM ↗',
  scroll: 'SCROLL TO EXPLORE',
  navigationLabel: 'NOLBVIA Exploration navigation',
  menuLabel: 'Toggle Exploration navigation',
  skip: 'Skip to content',
  stages: ['FOUNDATION', 'ATMOSPHERE', 'TRANSITION', 'ORBIT', 'FRONTIER'],
} as const

export const explorationNavigation = [
  { label: 'CORPORATE', href: '/' },
  { label: 'DEVELOPMENT', href: '/development' },
  { label: 'EXPLORATION', href: '/exploration' },
] as const

export const explorationMetadata = {
  title: 'NOLBVIA Exploration — Beyond the Known',
  description: explorationContent.description,
  canonical: 'https://nolbvia.com/exploration/',
} as const

export const explorationFooter = {
  division: 'EXPLORATION',
  direction: 'SCIENCE / TECHNOLOGY / FRONTIER',
  navigate: 'NAVIGATE',
  ecosystem: 'ECOSYSTEM',
  navigationLabel: 'Exploration footer navigation',
  links: [
    { label: 'WHY WE EXPLORE', href: '#mission' },
    { label: 'DOMAINS', href: '#domains' },
    { label: 'FRONTIERS', href: '#frontiers' },
    { label: 'VISION', href: '#vision' },
    { label: 'STATUS', href: '#status' },
  ],
} as const

export const explorationMission = {
  eyebrow: '[ 03 // WHY WE EXPLORE ]',
  title: 'WHY WE EXPLORE',
  statement: 'Curiosity is the beginning of every frontier.',
  description: 'Exploration investigates ideas, technologies, and possibilities beyond the current operational core.',
  direction: 'LONG-TERM DIRECTION',
} as const

export const explorationDomains = {
  eyebrow: '[ 04 // DOMAINS ]',
  title: 'WHERE WE LOOK.',
  introduction: 'Four domains define the initial horizon of NOLBVIA Exploration.',
  items: [
    { number: '01', name: 'EXPLORATION', description: 'Investigating unknown environments, systems and possibilities.', status: 'EXPLORING' },
    { number: '02', name: 'SCIENCE', description: 'Understanding the principles that enable future technologies.', status: 'RESEARCHING' },
    { number: '03', name: 'TECHNOLOGY', description: 'Developing and studying advanced technological systems.', status: 'EMERGING' },
    { number: '04', name: 'SPACE', description: 'Exploring the long-term possibility of extending NOLBVIA beyond Earth.', status: 'FUTURE' },
  ],
} as const

export const explorationFrontiers = {
  eyebrow: '[ 05 // FRONTIERS ]',
  title: 'WHAT COMES NEXT.',
  introduction: 'Areas of research and technological possibility that may shape the next generation of exploration.',
  items: [
    { number: '01', name: 'AUTONOMOUS SYSTEMS', description: 'Exploring systems capable of perceiving, reasoning and acting with increasing autonomy.', status: 'EXPLORING' },
    { number: '02', name: 'AEROSPACE TECHNOLOGY', description: 'Investigating technologies for operation in extreme and demanding environments.', status: 'RESEARCHING' },
    { number: '03', name: 'SPACE SYSTEMS', description: 'Studying the architectures and technologies required for future space-based systems.', status: 'FUTURE' },
    { number: '04', name: 'ROBOTIC EXPLORATION', description: 'Exploring machines designed to operate where humans cannot easily go.', status: 'EMERGING' },
    { number: '05', name: 'ADVANCED COMPUTING', description: 'Investigating computational systems that expand the limits of simulation, intelligence and discovery.', status: 'RESEARCHING' },
    { number: '06', name: 'HUMAN–MACHINE INTERACTION', description: 'Exploring new ways humans and intelligent systems can work together.', status: 'EMERGING' },
  ],
} as const

export const explorationVision = {
  eyebrow: '[ 06 // VISION ]',
  title: 'FROM DIGITAL SYSTEMS TO PHYSICAL FRONTIERS.',
  description: 'From software and digital systems toward increasingly physical and demanding frontiers.',
  stages: ['DIGITAL SYSTEMS', 'ENGINEERING', 'SCIENCE', 'ADVANCED TECHNOLOGY', 'EXPLORATION', 'SPACE'],
} as const

export const explorationStatus = {
  eyebrow: '[ 07 // STATUS ]',
  title: 'EXPLORATION STATUS',
  description: 'Exploration is currently a long-term direction within the NOLBVIA ecosystem.',
  records: [
    { label: 'PHASE', value: '01', detail: 'FOUNDATION' },
    { label: 'STATUS', value: 'CONCEPTUAL' },
    { label: 'FOCUS', value: 'RESEARCH · SCIENCE · TECHNOLOGY' },
    { label: 'HORIZON', value: 'LONG-TERM' },
  ],
} as const

export const explorationCTA = {
  eyebrow: '[ 08 // CTA ]',
  title: 'THE FRONTIER IS OPEN.',
  links: [
    { label: 'EXPLORE NOLBVIA', href: '/' },
    { label: 'EXPLORE DEVELOPMENT', href: '/development/' },
  ],
} as const
