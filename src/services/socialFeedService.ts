import type { TechPost, TechCategory } from '../types/social'
import { curatedTechFeed } from '../content/social'

/**
 * Servicio de contenidos y comunidad para NOLBVIA Development.
 * Preparado para conexión híbrida:
 * - Supabase PostgreSQL para posts oficiales y comentarios de la comunidad.
 * - APIs externas sindicadas (HackerNews / Dev.to / ArXiv) para noticias globales de computación.
 */

export interface FeedQueryOptions {
  category?: TechCategory | 'ALL'
  limit?: number
  searchQuery?: string
}

export async function fetchTechFeed(options: FeedQueryOptions = {}): Promise<TechPost[]> {
  const { category = 'ALL', searchQuery = '' } = options

  // En esta fase de preparación arquitectónica, servimos el feed técnico curado validado.
  // Cuando las variables de entorno de Supabase estén activas, este método consultará supabase.from('posts').select(...)
  let posts = [...curatedTechFeed]

  if (category !== 'ALL') {
    posts = posts.filter((p) => p.category === category)
  }

  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase()
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    )
  }

  return posts
}

