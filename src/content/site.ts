export type ServiceCapability = {
  id: string
  title: string
  category: string
  description: string
  deliverables: readonly string[]
  valueProposition: string
}

export type EngineeringStep = {
  step: string
  title: string
  subtitle: string
  description: string
  outcome: string
}

export const corporateMetadata = {
  title: 'NOLBVIA — Ingeniería de Sistemas, Tecnología y Desarrollo Digital',
  description: 'Diseñamos y desarrollamos software, aplicaciones y sistemas digitales que transforman ideas y necesidades en soluciones tecnológicas reales y escalables.',
  canonical: 'https://nolbvia.com/',
} as const

export const navItems = [
  { label: 'ECOSISTEMA', href: '#ecosystem' },
  { label: 'CAPACIDADES', href: '#capabilities' },
  { label: 'METODOLOGÍA', href: '#methodology' },
  { label: 'VISIÓN', href: '#vision' },
  { label: 'CONTACTO', href: '#contact' },
]

export const cinematicSequence = {
  enabled: true,
  frameCount: 300,
  srcForFrame: (frame: number) => `/sequence/ezgif-frame-${String(frame).padStart(3, '0')}.webp`,
}

export const cinematicScenes = [
  { id: 'hero', label: 'INICIO', selector: '#top', startFrame: 1, endFrame: 50 },
  { id: 'ecosystem', label: 'ECOSISTEMA', selector: '#ecosystem', startFrame: 51, endFrame: 102 },
  { id: 'capabilities', label: 'CAPACIDADES', selector: '#capabilities', startFrame: 103, endFrame: 154 },
  { id: 'methodology', label: 'METODOLOGÍA', selector: '#methodology', startFrame: 155, endFrame: 214 },
  { id: 'vision', label: 'VISIÓN', selector: '#vision', startFrame: 215, endFrame: 260 },
  { id: 'contact', label: 'CONTACTO', selector: '#contact', startFrame: 261, endFrame: 290 },
  { id: 'footer', label: 'CIERRE', selector: '.footer', startFrame: 291, endFrame: 300 },
] as const

export type EcosystemDivision = {
  number: string
  name: string
  category: string
  badge: string
  text: string
  href: string
  linkText: string
  highlights: readonly string[]
  themeKey: 'dev' | 'exp' | 'int' | 'fut'
  accentColor: string
  iconType: 'code-bracket' | 'orbital-telescope' | 'neural-network' | 'modular-cube'
  isFuture?: boolean
}

export const ecosystemDivisions: readonly EcosystemDivision[] = [
  {
    number: '01',
    name: 'NOLBVIA Development',
    category: 'DIVISIÓN TECNOLÓGICA Y COMERCIAL',
    badge: 'ENFOQUE PRINCIPAL',
    text: 'Diseño y desarrollo integral de software, plataformas web, aplicaciones y productos digitales a medida.',
    href: '/development',
    linkText: 'CONOCER DEVELOPMENT',
    highlights: ['Software a Medida', 'Plataformas Web', 'Sistemas Digitales', 'Arquitectura de Producto'],
    themeKey: 'dev',
    accentColor: '#C9A86A',
    iconType: 'code-bracket',
  },
  {
    number: '02',
    name: 'NOLBVIA Exploration',
    category: 'FRONTERA Y HORIZONTE TECNOLÓGICO',
    badge: 'VISIÓN DE LARGO PLAZO',
    text: 'Investigación orientada a la ciencia, la computación avanzada y los desafíos tecnológicos del futuro.',
    href: '/exploration',
    linkText: 'CONOCER EXPLORATION',
    highlights: ['Investigación Científica', 'Sistemas Autónomos', 'Ingeniería Avanzada', 'Exploración Futura'],
    themeKey: 'exp',
    accentColor: '#D97706',
    iconType: 'orbital-telescope',
  },
  {
    number: '03',
    name: 'NOLBVIA Intelligence',
    category: 'CAPA COMPUTACIONAL Y DATOS',
    badge: 'ESPECIALIZACIÓN',
    text: 'Inteligencia artificial aplicada, estructuración de datos, automatización de procesos y sistemas de decisión.',
    href: '/intelligence',
    linkText: 'CONOCER INTELLIGENCE',
    highlights: ['Inteligencia Artificial', 'Automatización de Flujos', 'Analítica y Datos', 'Sistemas Inteligentes'],
    themeKey: 'int',
    accentColor: '#6FD3E8',
    iconType: 'neural-network',
  },
  {
    number: '04',
    name: 'Future Divisions',
    category: 'EXPANSIÓN DEL ECOSISTEMA',
    badge: 'ESPACIO ABIERTO',
    text: 'Estructura modular reservada para la incorporación progresiva de nuevas disciplinas técnicas y áreas de impacto.',
    href: '#ecosystem',
    linkText: 'ARQUITECTURA MODULAR',
    highlights: ['Nuevas Disciplinas', 'Evolución Continua', 'Desarrollo Estratégico', 'I+D Aplicada'],
    themeKey: 'fut',
    accentColor: '#8B96A5',
    iconType: 'modular-cube',
    isFuture: true,
  },
] as const

export const commercialCapabilities: readonly ServiceCapability[] = [
  {
    id: '01',
    title: 'Desarrollo de Software y Plataformas',
    category: 'INGENIERÍA DIGITAL',
    description: 'Construimos sistemas y plataformas digitales robustas con arquitecturas modernas, garantizando rendimiento, seguridad y mantenibilidad a largo plazo.',
    deliverables: ['Plataformas SaaS', 'Portales Web Complejos', 'Sistemas de Gestión', 'APIs & Backend Resiliente'],
    valueProposition: 'Soluciones concebidas para operar de manera predecible y adaptarse al crecimiento de la organización.',
  },
  {
    id: '02',
    title: 'Productos Digitales y Aplicaciones Web',
    category: 'PRODUCT ENGINEERING',
    description: 'Transformamos necesidades y modelos de negocio en productos interactivos con interfaces refinadas y flujos de usuario optimizados.',
    deliverables: ['Aplicaciones Web Progresivas', 'Paneles de Control', 'Sistemas de Autoservicio', 'Herramientas Digitales'],
    valueProposition: 'Equilibrio riguroso entre experiencia de usuario, diseño visual y excelencia técnica.',
  },
  {
    id: '03',
    title: 'Inteligencia Artificial & Automatización',
    category: 'SISTEMAS INTELIGENTES',
    description: 'Implementamos flujos automatizados y componentes de inteligencia computacional para optimizar operaciones repetitivas y toma de decisiones.',
    deliverables: ['Integración de Modelos IA', 'Automatización de Procesos', 'Pipelines de Datos', 'Asistentes Especializados'],
    valueProposition: 'Tecnología práctica orientada a reducir costos operativos y acelerar tiempos de respuesta.',
  },
  {
    id: '04',
    title: 'Arquitectura de Sistemas & Modernización',
    category: 'INFRAESTRUCTURA & ESCALA',
    description: 'Diseñamos la estructura técnica necesaria para que sistemas existentes o nuevos proyectos operen con alta disponibilidad y bajo acoplamiento.',
    deliverables: ['Arquitectura Cloud-Ready', 'Optimización de Rendimiento', 'Seguridad por Diseño', 'Auditoría de Código'],
    valueProposition: 'Bases técnicas sólidas que eliminan la deuda técnica y facilitan el escalamiento continuo.',
  },
] as const

export const engineeringMethodology: readonly EngineeringStep[] = [
  {
    step: '01',
    title: 'Comprensión y Análisis',
    subtitle: 'DIAGNÓSTICO DEL PROBLEMA',
    description: 'Analizamos a fondo los requerimientos del cliente, las restricciones técnicas y los objetivos comerciales antes de redactar código.',
    outcome: 'Definición precisa del alcance y criterios de éxito medibles.',
  },
  {
    step: '02',
    title: 'Arquitectura y Prototipado',
    subtitle: 'DISEÑO DEL SISTEMA',
    description: 'Modelamos la estructura de datos, componentes de interfaz y flujos de información para validar la solución de forma temprana.',
    outcome: 'Especificación técnica completa y prototipo interactivo funcional.',
  },
  {
    step: '03',
    title: 'Desarrollo de Precisión',
    subtitle: 'CONSTRUCCIÓN E INTEGRACIÓN',
    description: 'Implementamos el código mediante estándares estrictos de calidad, pruebas unitarias y componentes modulares altamente reutilizables.',
    outcome: 'Código limpio, documentado, eficiente y testeado.',
  },
  {
    step: '04',
    title: 'Validación y Evolución',
    subtitle: 'DESPLIEGUE CONTINUO',
    description: 'Verificamos la solución en entornos de producción, optimizamos tiempos de carga y aseguramos su operación estable y continua.',
    outcome: 'Sistema en producción con soporte a la evolución del proyecto.',
  },
] as const
