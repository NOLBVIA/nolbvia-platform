import { BrandLogo } from './BrandLogo'
import { ecosystemDivisions, type EcosystemDivision } from '../content/site'
import { SectionHeader } from './SectionHeader'

function DivisionIcon({ type, color }: { type: EcosystemDivision['iconType']; color: string }) {
  switch (type) {
    case 'code-bracket':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="division-svg-icon" aria-hidden="true">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" />
        </svg>
      )
    case 'orbital-telescope':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="division-svg-icon" aria-hidden="true">
          <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="1" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="1" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="23" y2="12" />
        </svg>
      )
    case 'neural-network':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="division-svg-icon" aria-hidden="true">
          <circle cx="5" cy="6" r="2.5" />
          <circle cx="19" cy="6" r="2.5" />
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="18" r="2.5" />
          <circle cx="19" cy="18" r="2.5" />
          <line x1="7.2" y1="7.2" x2="9.8" y2="10.2" />
          <line x1="16.8" y1="7.2" x2="14.2" y2="10.2" />
          <line x1="7.2" y1="16.8" x2="9.8" y2="13.8" />
          <line x1="16.8" y1="16.8" x2="14.2" y2="13.8" />
        </svg>
      )
    case 'modular-cube':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="division-svg-icon" aria-hidden="true">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
  }
}

export function Ecosystem() {
  return (
    <section id="ecosystem" className="ecosystem section">
      <SectionHeader
        eyebrow="[ 01 // ARQUITECTURA DEL ECOSISTEMA ]"
        title="Un ecosistema tecnológico diseñado para crear y evolucionar."
      >
        <p>
          NOLBVIA se estructura en divisiones especializadas que integran desarrollo comercial en el presente, inteligencia computacional aplicada y exploración científica para el futuro.
        </p>
      </SectionHeader>

      <div id="divisions" className="ecosystem-architecture" data-reveal>
        {/* Central Institutional Nexus */}
        <div className="ecosystem-nexus glass-panel">
          <div className="nexus-aurora" aria-hidden="true" />

          <div className="nexus-emblem-core">
            <BrandLogo size="lg" showDescriptor={false} />
            <div className="nexus-orbital-aura" aria-hidden="true">
              <span className="aura-ring ring-1" />
              <span className="aura-ring ring-2" />
              <span className="aura-beacon" />
            </div>
          </div>

          <div className="nexus-copy">
            <span className="nexus-eyebrow">NÚCLEO INSTITUCIONAL</span>
            <h3 className="nexus-title">NOLBVIA</h3>
            <p className="nexus-subtitle">ECOSISTEMA TECNOLÓGICO MULTIDISCIPLINARIO</p>
          </div>

          <div className="nexus-structural-framework">
            <div className="framework-node">
              <span className="node-pip" />
              <span className="node-text">ARQUITECTURA UNIFICADA</span>
            </div>
            <div className="framework-divider" aria-hidden="true" />
            <div className="framework-node">
              <span className="node-pip" />
              <span className="node-text">GOBERNANZA COMPARTIDA</span>
            </div>
            <div className="framework-divider" aria-hidden="true" />
            <div className="framework-node">
              <span className="node-pip" />
              <span className="node-text">EXPANSIÓN MODULAR</span>
            </div>
          </div>
        </div>

        {/* Structural Connection Matrix */}
        <div className="ecosystem-connective-spine" aria-hidden="true">
          <span className="spine-hub" />
          <div className="spine-branch branch-dev" />
          <div className="spine-branch branch-exp" />
          <div className="spine-branch branch-int" />
          <div className="spine-branch branch-fut" />
        </div>

        {/* Divisions Cards */}
        <div className="division-grid">
          {ecosystemDivisions.map((division) => (
            <article
              className={`division-card glass-card theme-${division.themeKey} ${division.isFuture ? 'is-future' : ''}`}
              key={division.name}
              style={{ '--division-theme-accent': division.accentColor } as React.CSSProperties}
            >
              <div className="division-card__header">
                <div className="division-card__identity">
                  <span className="division-card__number">{division.number}</span>
                  <div className="division-card__titles">
                    <span className="division-card__category">{division.category}</span>
                    <h3 className="division-card__name">{division.name}</h3>
                  </div>
                </div>

                <div className="division-card__badge-wrap">
                  <div className="division-icon-badge" style={{ borderColor: division.accentColor }}>
                    <DivisionIcon type={division.iconType} color={division.accentColor} />
                  </div>
                  <span className="division-status-pill">{division.badge}</span>
                </div>
              </div>

              <div className="division-card__body">
                <p className="division-card__desc">{division.text}</p>

                <div className="division-card__highlights">
                  <span className="highlights-label">Capacidades &amp; Áreas:</span>
                  <div className="highlights-pills">
                    {division.highlights.map((tag) => (
                      <span key={tag} className="highlight-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {division.href.startsWith('/') ? (
                  <a className="division-card__cta" href={division.href}>
                    <span>{division.linkText}</span>
                    <span className="cta-arrow" aria-hidden="true">→</span>
                  </a>
                ) : (
                  <div className="division-card__cta is-static">
                    <span>{division.linkText}</span>
                    <span className="static-indicator" aria-hidden="true">✦</span>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
