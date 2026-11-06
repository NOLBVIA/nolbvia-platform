export type DevelopmentProjectStatus = 'ACTIVO — EN PRODUCCIÓN' | 'EN DESARROLLO'

export type DevelopmentProject = {
  id: string
  slug: string
  name: string
  category: string
  status: DevelopmentProjectStatus
  description: string
  audience?: string
}

export type SolutionType = {
  id: string
  title: string
  subtitle: string
  description: string
  features: readonly string[]
}

export const developmentMetadata = {
  title: 'NOLBVIA Development — Software, Aplicaciones y Plataformas Digitales',
  description: 'Transformamos ideas en soluciones digitales. Diseñamos y desarrollamos software, aplicaciones y plataformas con una arquitectura pensada para resolver problemas reales y evolucionar con el tiempo.',
  canonical: 'https://nolbvia.com/development/',
} as const

export const developmentNavigation = [
  { label: 'QUÉ HACEMOS', href: '#overview' },
  { label: 'SOLUCIONES', href: '#solutions' },
  { label: 'PRODUCTOS', href: '#products' },
  { label: 'BUILD LOG', href: '#build-log' },
  { label: 'COMUNIDAD', href: '#tech-feed' },
  { label: 'METODOLOGÍA', href: '#process' },
  { label: 'PRINCIPIOS', href: '#principles' },
] as const

export const developmentHeroContent = {
  badge: 'NOLBVIA DEVELOPMENT // SOLUCIONES DIGITALES',
  headline: 'TRANSFORMAMOS IDEAS EN SOLUCIONES DIGITALES.',
  subheadline: 'Diseñamos y desarrollamos software, aplicaciones y plataformas con una arquitectura pensada para resolver problemas reales y evolucionar con el tiempo.',
  primaryCTA: 'HABLEMOS DE TU PROYECTO',
  secondaryCTA: 'CONOCER CAPACIDADES',
} as const

export const developmentCore = [
  {
    index: '01',
    title: 'SOFTWARE A MEDIDA',
    description: 'Sistemas empresariales y aplicaciones específicas diseñadas para responder exactamente a los procesos y requerimientos del cliente.',
  },
  {
    index: '02',
    title: 'PLATAFORMAS DIGITALES',
    description: 'Portales de gestión, plataformas SaaS y entornos multi-usuario con alta concurrencia, resiliencia y seguridad.',
  },
  {
    index: '03',
    title: 'APLICACIONES WEB MODERNAS',
    description: 'Interfaces interactivas veloces, accesibles y optimizadas para brindar la mejor experiencia en cualquier dispositivo.',
  },
  {
    index: '04',
    title: 'INTEGRACIONES Y APIS',
    description: 'Arquitecturas conectadas que sincronizan bases de datos, pasarelas de pago, servicios externos y automatizaciones.',
  },
] as const

export const developmentSolutions: readonly SolutionType[] = [
  {
    id: '01',
    title: 'Aplicaciones Web & Portales',
    subtitle: 'EXPERIENCIA & VELOCIDAD',
    description: 'Desarrollamos aplicaciones web interactivas centradas en la agilidad de usuario, accesibilidad universal y carga ultra rápida.',
    features: ['Single Page Apps & SSR', 'Paneles de Administración', 'Sistemas de Autoservicio', 'Diseño Responsivo Total'],
  },
  {
    id: '02',
    title: 'Plataformas SaaS & Ecosistemas',
    subtitle: 'ESCALABILIDAD & MULTI-TENANCY',
    description: 'Arquitecturas preparadas para comercializar servicios digitales a escala, con gestión de cuentas, suscripciones y roles.',
    features: ['Arquitectura Multi-inquilino', 'Control de Accesos RBAC', 'Métricas de Uso', 'Infraestructura Cloud-Native'],
  },
  {
    id: '03',
    title: 'Sistemas de Gestión Interna',
    subtitle: 'EFICIENCIA OPERATIVA',
    description: 'Herramientas digitales a medida para optimizar flujos de trabajo internos, seguimiento de tareas y toma de decisiones.',
    features: ['Automatización de Tareas', 'Reportes y Analítica', 'Trazabilidad de Procesos', 'Integración de Bases de Datos'],
  },
  {
    id: '04',
    title: 'Microservicios & APIs',
    subtitle: 'CONECTIVIDAD & DESACOPLAMIENTO',
    description: 'Servicios de backend diseñados para conectar múltiples interfaces de manera segura, documentada y escalable.',
    features: ['APIs REST & GraphQL', 'Autenticación Segura', 'Cache de Alto Desempeño', 'Monitoreo en Tiempo Real'],
  },
] as const

export const developmentProjects: readonly DevelopmentProject[] = [
  {
    id: '001',
    slug: 'nolbvia-platform',
    name: 'NOLBVIA PLATFORM',
    category: 'SISTEMA CORPORATIVO / ECOSISTEMA',
    status: 'ACTIVO — EN PRODUCCIÓN',
    description: 'El núcleo digital institucional y punto de integración interactivo del ecosistema tecnológico NOLBVIA.',
  },
  {
    id: '002',
    slug: 'nolbvia-school',
    name: 'NOLBVIA SCHOOL',
    category: 'EDTECH / EDUCACIÓN PÚBLICA',
    status: 'EN DESARROLLO',
    audience: 'INSTITUCIONES EDUCATIVAS',
    description: 'Plataforma digital orientada a modernizar y facilitar la gestión académica, asistencia y seguimiento formativo.',
  },
  {
    id: '003',
    slug: 'nolbvia-calendar',
    name: 'NOLBVIA CALENDAR',
    category: 'PRODUCTIVIDAD / GESTIÓN DE TIEMPO',
    status: 'EN DESARROLLO',
    description: 'Herramienta de programación temporal y sincronización de actividades con interfaz limpia y optimizada.',
  },
]

export const developmentCapabilities = [
  'INGENIERÍA DE SOFTWARE',
  'ARQUITECTURA DE SISTEMAS',
  'APLICACIONES WEB & MÓVILES',
  'PLATAFORMAS SAAS',
  'INTEGRACIÓN DE APIS & BACKEND',
  'OPTIMIZACIÓN & PERFORMANCE',
] as const

export const developmentProcess = [
  { step: '01', name: 'RESEARCH', title: 'Investigación', desc: 'Análisis de requerimientos, viabilidad técnica y estado del arte.' },
  { step: '02', name: 'ARCHITECTURE', title: 'Arquitectura', desc: 'Modelado de datos, interfaces de componentes y diseño modular.' },
  { step: '03', name: 'DESIGN', title: 'Diseño', desc: 'Sistemas visuales, experiencia de usuario y accesibilidad estricta.' },
  { step: '04', name: 'ENGINEERING', title: 'Desarrollo', desc: 'Implementación en código fuertemente tipado y componentes resilientes.' },
  { step: '05', name: 'TESTING', title: 'Pruebas', desc: 'Validación de rendimiento, pruebas cruzadas y auditoría de calidad.' },
  { step: '06', name: 'DEPLOYMENT', title: 'Despliegue', desc: 'Automatización de pipelines CI/CD y publicación con baja latencia.' },
  { step: '07', name: 'ITERATION', title: 'Iteración', desc: 'Monitoreo continuo, refinamiento de producto y evolución técnica.' },
] as const

export type BuildLogEntry = {
  id: string
  date: string
  project: string
  badge: string
  title: string
  challenge: string
  architecture: string
  solution: string
  stack: readonly string[]
}

export const developmentBuildLog: readonly BuildLogEntry[] = [
  {
    id: 'LOG-001',
    date: 'NOVIEMBRE 2026',
    project: 'NOLBVIA PLATFORM',
    badge: 'ARQUITECTURA Y RENDIMIENTO',
    title: 'Pipeline de Secuencias Cinemáticas y Cero Desplazamiento Acumulado (CLS)',
    challenge: 'Integrar 1,200 fotogramas de alta resolución WebP sin degradar la puntuación Core Web Vitals ni bloquear el hilo principal de renderizado.',
    architecture: 'Precarga selectiva con Canvas API contextual, desacoplada del scroll de la página y sincronizada con IntersectionObserver.',
    solution: 'Conversión por lotes con compresión WebP calibrada a 82% de calidad, manteniendo un peso medio medido de 72–75 kB por fotograma (rango global 5–119 kB) sin pérdida visual perceptible.',
    stack: ['React 19', 'TypeScript', 'Vite', 'HTML5 Canvas API', 'Sharp Engine'],
  },
  {
    id: 'LOG-002',
    date: 'OCTUBRE 2026',
    project: 'NOLBVIA PLATFORM',
    badge: 'ENRUTAMIENTO Y ACCESIBILIDAD',
    title: 'Restauración Universal de Scroll y Cumplimiento WCAG en SPA',
    challenge: 'Garantizar que transiciones entre experiencias independientes restauren el foco visual y respeten usuarios con preferencias de movimiento reducido.',
    architecture: 'Componente transversal ScrollToLocation vinculado al enrutador reactivo y reglas de override CSS prefers-reduced-motion.',
    solution: 'Cancelación de requestAnimationFrame previo para evitar scroll-jank y fijación inmediata de elementos data-reveal en modo estático.',
    stack: ['React Router v7', 'CSS Media Queries', 'Web Animation API'],
  },
]

export const developmentExperimental = [
  {
    id: 'EXP-01',
    title: 'Agentes Computacionales Autónomos',
    tag: 'INTELIGENCIA ARTIFICIAL',
    desc: 'Prototipos de agentes conversacionales y de ejecución de tareas estructuradas con validación estricta de salidas JSON.',
  },
  {
    id: 'EXP-02',
    title: 'Automatización de Procesos Distribuidos',
    tag: 'SISTEMAS & PIPELINES',
    desc: 'Orquestación de microtareas asíncronas con tolerancia a fallos y trazabilidad en tiempo real.',
  },
  {
    id: 'EXP-03',
    title: 'Interfaces Adaptativas de Alta Velocidad',
    tag: 'UX / RENDIMIENTO',
    desc: 'Exploración de layouts fluidos renderizados con aceleración GPU para aplicaciones de visualización de datos complejos.',
  },
] as const

export const developmentPrinciples = [
  {
    number: '01',
    title: 'Mantenibilidad a Largo Plazo',
    description: 'Escribimos código limpio, tipado estrictamente y documentado para que el proyecto pueda crecer sin convertirse en un obstáculo técnico.',
  },
  {
    number: '02',
    title: 'Rendimiento por Defecto',
    description: 'Cada componente y consulta es optimizado para garantizar tiempos de respuesta mínimos, baja latencia y consumo eficiente de recursos.',
  },
  {
    number: '03',
    title: 'Seguridad y Privacidad',
    description: 'Implementamos validación estricta en cada capa, protección contra vulnerabilidades comunes y gestión responsable de datos.',
  },
  {
    number: '04',
    title: 'Arquitectura Modular',
    description: 'Sistemas desacoplados que permiten evolucionar o reemplazar piezas individuales sin comprometer la estabilidad global de la solución.',
  },
] as const

export const developmentStatus = {
  currentFocus: 'SISTEMAS DIGITALES & DESARROLLO WEB',
  projects: developmentProjects.map(({ id, name, status }) => ({ id, name, status })),
} as const
