/**
 * Contratos de tipos para el ecosistema social y de conocimiento tecnológico de NOLBVIA.
 * Preparado para conectarse con esquemas PostgreSQL/Supabase (con RLS) y microservicios de agregación externa.
 */

export type TechCategory = 
  | 'SOFTWARE_ENGINEERING' 
  | 'ARTIFICIAL_INTELLIGENCE' 
  | 'CYBERSECURITY' 
  | 'DISTRIBUTED_SYSTEMS' 
  | 'DATABASES' 
  | 'TECH_INNOVATION'

export type ContentSourceType = 'OFFICIAL_NOLBVIA' | 'EXTERNAL_API' | 'COMMUNITY'

export type TechPost = {
  id: string
  slug: string
  title: string
  summary: string
  category: TechCategory
  categoryLabel: string
  sourceType: ContentSourceType
  sourceName: string
  author: {
    name: string
    handle: string
    avatarUrl?: string
    role: string
  }
  publishedAt: string
  readingTimeMin: number
  tags: readonly string[]
  likesCount: number
  commentsCount: number
  url?: string
}

export type UserProfilePreview = {
  id: string
  username: string
  fullName: string
  academicFocus: string // ej. 'Estudiante de Ingeniería de Sistemas'
  specialties: readonly string[]
}

