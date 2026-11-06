import { useState, useEffect } from 'react'
import type { TechPost, TechCategory } from '../../types/social'
import { fetchTechFeed } from '../../services/socialFeedService'

const categories: { key: TechCategory | 'ALL'; label: string }[] = [
  { key: 'ALL', label: 'TODAS LAS PUBLICACIONES' },
  { key: 'SOFTWARE_ENGINEERING', label: 'INGENIERÍA DE SOFTWARE' },
  { key: 'ARTIFICIAL_INTELLIGENCE', label: 'INTELIGENCIA ARTIFICIAL' },
  { key: 'DATABASES', label: 'BASES DE DATOS & CLOUD' },
]

export function DevelopmentTechFeed() {
  const [selectedCategory, setSelectedCategory] = useState<TechCategory | 'ALL'>('ALL')
  const [posts, setPosts] = useState<TechPost[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    let isMounted = true
    fetchTechFeed({ category: selectedCategory, searchQuery: search })
      .then((data) => {
        if (isMounted) {
          setPosts(data)
          setLoading(false)
        }
      })
      .catch(() => {
        if (isMounted) setLoading(false)
      })
    return () => {
      isMounted = false
    }
  }, [selectedCategory, search])

  return (
    <section id="tech-feed" className="development-section development-social-feed" aria-labelledby="tech-feed-title">
      <div className="development-section__header development-section__header--split" data-reveal>
        <div>
          <p className="development-section__index">[ 05 / ECOSISTEMA SOCIAL Y CONOCIMIENTO ]</p>
          <h2 id="tech-feed-title">RADAR TECNOLÓGICO & COMUNIDAD</h2>
        </div>
        <p>
          Investigación, análisis técnico y debates sobre computación, sistemas distribuidos y desarrollo de software orientados a estudiantes de Ingeniería de Sistemas y creadores digitales.
        </p>
      </div>

      <div className="social-feed-controls" data-reveal>
        <div className="social-feed-categories">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              className={`category-pill ${selectedCategory === cat.key ? 'is-active' : ''}`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="social-feed-search">
          <input
            type="search"
            placeholder="Buscar por tecnología, tema o tag..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Buscar publicaciones"
          />
        </div>
      </div>

      <div className="social-feed-grid">
        {loading ? (
          <div className="feed-status-notice">
            <span>Cargando transmisiones de ingeniería...</span>
          </div>
        ) : posts.length === 0 ? (
          <div className="feed-status-notice">
            <span>No se encontraron publicaciones con los filtros seleccionados.</span>
          </div>
        ) : (
          posts.map((post) => (
            <article className="tech-post-card" data-reveal key={post.id}>
              <div className="tech-post-card__header">
                <div className="post-meta-left">
                  <span className="post-category-tag">{post.categoryLabel}</span>
                  <span className="post-source">{post.sourceName}</span>
                </div>
                <span className="post-reading-time">{post.readingTimeMin} min lectura</span>
              </div>

              <h3 className="tech-post-card__title">{post.title}</h3>
              <p className="tech-post-card__summary">{post.summary}</p>

              <div className="tech-post-card__tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="post-tag">#{tag}</span>
                ))}
              </div>

              <div className="tech-post-card__footer">
                <div className="post-author-box">
                  <div className="author-avatar-stub" aria-hidden="true">
                    {post.author.name.charAt(0)}
                  </div>
                  <div className="author-details">
                    <strong className="author-name">{post.author.name}</strong>
                    <span className="author-role">{post.author.role}</span>
                  </div>
                </div>

                <div className="post-interactions">
                  <span className="interaction-metric" title="Lectores interesados">
                    <span aria-hidden="true">▲</span> {post.likesCount}
                  </span>
                  <span className="interaction-metric" title="Debates y aportes">
                    <span aria-hidden="true">💬</span> {post.commentsCount}
                  </span>
                </div>
              </div>
            </article>
          ))
        )}
      </div>

      <div className="social-community-banner" data-reveal>
        <div className="community-banner__inner">
          <div className="community-banner__info">
            <span className="banner-kicker">PRÓXIMAMENTE // SUPABASE & OPEN API</span>
            <h3>¿Estudias Ingeniería de Sistemas o desarrollas software?</h3>
            <p>
              Estamos preparando la integración comunitaria con perfiles autenticados, discusiones técnicas de arquitectura y repositorio de snippets de código para la comunidad NOLBVIA.
            </p>
          </div>
          <div className="community-banner__action">
            <a href="/#contact" className="development-button development-button--secondary">
              <span>UNIRSE AL COLECTIVO TECNOLÓGICO</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
