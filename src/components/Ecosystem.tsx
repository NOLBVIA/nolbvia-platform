import { SectionHeader } from './SectionHeader'

const divisions = [
  {
    number: '01',
    name: 'NOLBVIA Development',
    code: 'SYS-DEV-01',
    category: 'TECHNOLOGY DIVISION',
    text: 'Engineering digital systems, products and experiences.',
    href: '/development',
    state: 'CURRENT FOCUS',
    focus: ['Software', 'Applications', 'Digital Products', 'Digital Experiences'],
  },
  {
    number: '02',
    name: 'NOLBVIA Exploration',
    code: 'AERO-EXP-02',
    category: 'FUTURE VISION',
    text: 'A longer-term direction connected to exploration, science, technology and eventually space.',
    state: 'FUTURE HORIZON',
    focus: ['Exploration', 'Science', 'Technology', 'Space'],
  },
]

export function Ecosystem() {
  return (
    <section id="ecosystem" className="ecosystem section">
      <SectionHeader
        eyebrow="[ 01 // ARCHITECTURE ]"
        title="One unified ecosystem. Boundless frontiers."
      >
        <p>
          NOLBVIA is designed as an evolving system rather than a single product, with room for new disciplines as the brand grows.
        </p>
      </SectionHeader>

      <div id="divisions" className="ecosystem-map" data-reveal>
        {/* Central Ecosystem Core Anchor */}
        <div className="ecosystem-core glass-panel">
          <div className="core-orbital-system" aria-hidden="true">
            <span className="core-ring core-ring-1" />
            <span className="core-ring core-ring-2" />
            <span className="core-orbit-node" />
          </div>
          <span className="core-eyebrow">ECOSYSTEM CORE</span>
          <h3 className="core-title">NOLBVIA</h3>
          <span className="core-sub">EMERGING TECHNOLOGY ECOSYSTEM</span>
        </div>

        {/* Divisions Cards */}
        <div className="division-list">
          {divisions.map((division) => (
            <article className="division glass-card" key={division.name}>
              <div className="division-header-row">
                <div className="division-left">
                  <span className="division-number">{division.number}</span>
                  <span className="division-code">{division.code}</span>
                </div>
                <div className="division-meta">
                  <span className="division-pulse" />
                  <span className="division-state">{division.state}</span>
                </div>
              </div>

              <div className="division-info">
                <span className="division-category-tag">{division.category}</span>
                <h3>{division.name}</h3>
                <p>{division.text}</p>
                <div className="division-focus-tags">
                  {division.focus.map((tag) => (
                    <span key={tag} className="focus-pill">{tag}</span>
                  ))}
                </div>
                {division.code === 'SYS-DEV-01' && division.href === '/development' && (
                  <a className="division-explore" href={division.href}>
                    EXPLORE DEVELOPMENT <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </article>
          ))}

          <article className="division glass-card future">
            <div className="division-header-row">
              <div className="division-left">
                <span className="division-number">03</span>
                <span className="division-code">SPEC-FUT-03</span>
              </div>
              <div className="division-meta">
                <span className="division-state future-state">SPECULATIVE HORIZON</span>
              </div>
            </div>

            <div className="division-info">
              <span className="division-category-tag">FUTURE INITIATIVE</span>
              <h3>Future Divisions</h3>
              <p>Open architecture reserved for future possibilities that have not yet been defined or announced.</p>
              <div className="division-focus-tags">
                <span className="focus-pill">Future Technology</span>
                <span className="focus-pill">New Disciplines</span>
                <span className="focus-pill">Open Possibilities</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
