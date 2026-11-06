import type { TechPost } from '../types/social'

/**
 * Publicaciones de referencia técnica para el portal de conocimiento tecnológico.
 * Diseñadas con rigor técnico para estudiantes de Ingeniería de Sistemas y entusiastas de la tecnología.
 * Este conjunto actúa como semilla estructurada para cuando se conecte Supabase y APIs de noticias.
 */
export const curatedTechFeed: readonly TechPost[] = [
  {
    id: 'POST-001',
    slug: 'arquitectura-secuencias-canvas-render',
    title: 'Cómo renderizar 1.200 fotogramas WebP a 60 FPS sin colapsar el hilo de JavaScript',
    summary: 'Análisis detallado de la arquitectura de ventana deslizante, recolección de basura controlada y optimización de memoria en HTML5 Canvas aplicado a NOLBVIA Platform.',
    category: 'SOFTWARE_ENGINEERING',
    categoryLabel: 'INGENIERÍA DE SOFTWARE',
    sourceType: 'OFFICIAL_NOLBVIA',
    sourceName: 'NOLBVIA Engineering Log',
    author: {
      name: 'Equipo de Arquitectura',
      handle: '@nolbvia_eng',
      role: 'Core Systems',
    },
    publishedAt: '4 Nov 2026',
    readingTimeMin: 6,
    tags: ['Canvas API', 'TypeScript', 'Performance', 'Memory Profiling'],
    likesCount: 142,
    commentsCount: 28,
  },
  {
    id: 'POST-002',
    slug: 'seguridad-rls-postgresql-supabase',
    title: 'Guía práctica de Row Level Security (RLS) en PostgreSQL: Protegiendo datos multi-tenant',
    summary: 'Estrategias de diseño para garantizar aislamiento criptográfico y lógico en bases de datos relacionales modernas sin delegar la seguridad únicamente a middlewares de aplicación.',
    category: 'DATABASES',
    categoryLabel: 'BASES DE DATOS',
    sourceType: 'OFFICIAL_NOLBVIA',
    sourceName: 'NOLBVIA Academy Series',
    author: {
      name: 'Seguridad & Datos',
      handle: '@nolbvia_sec',
      role: 'Data Architect',
    },
    publishedAt: '2 Nov 2026',
    readingTimeMin: 8,
    tags: ['PostgreSQL', 'Supabase', 'RLS', 'Cybersecurity'],
    likesCount: 98,
    commentsCount: 15,
  },
  {
    id: 'POST-003',
    slug: 'modelos-ia-pequenos-edge-computing',
    title: 'Modelos de lenguaje en el borde (Edge SLMs): Eficiencia computacional frente a mega-modelos',
    summary: 'Por qué la nueva ola de ingeniería de sistemas se está concentrando en modelos SLM compactos ejecutándose localmente con inferencia cuantizada en dispositivos de usuario.',
    category: 'ARTIFICIAL_INTELLIGENCE',
    categoryLabel: 'INTELIGENCIA ARTIFICIAL',
    sourceType: 'OFFICIAL_NOLBVIA',
    sourceName: 'Tech Research Insights',
    author: {
      name: 'NOLBVIA Intelligence',
      handle: '@nolbvia_ai',
      role: 'AI Researcher',
    },
    publishedAt: '1 Nov 2026',
    readingTimeMin: 5,
    tags: ['Edge AI', 'Quantization', 'System Design', 'Inference'],
    likesCount: 215,
    commentsCount: 34,
  },
]

