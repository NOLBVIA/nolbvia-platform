import { SectionHeader } from './SectionHeader'

const capabilities = [
  {
    id: '01',
    title: 'Digital Products',
    discipline: 'PRODUCT SYSTEMS',
    status: 'CAPABILITY AREA',
    scope: 'PRODUCT / EXPERIENCE',
    desc: 'Useful digital products shaped around clear problems, thoughtful interaction and durable foundations.',
  },
  {
    id: '02',
    title: 'Software Systems',
    discipline: 'SOFTWARE ENGINEERING',
    status: 'CAPABILITY AREA',
    scope: 'SYSTEM / PLATFORM',
    desc: 'Maintainable software systems and platforms designed for clarity, performance and progressive evolution.',
  },
  {
    id: '03',
    title: 'Applications',
    discipline: 'APPLICATION DESIGN',
    status: 'CAPABILITY AREA',
    scope: 'WEB / INTERFACE',
    desc: 'Focused applications balancing technical precision, usability and a distinctive visual identity.',
  },
  {
    id: '04',
    title: 'Experimental Technology',
    discipline: 'EXPERIMENTATION',
    status: 'EXPLORATION AREA',
    scope: 'PROTOTYPE / RESEARCH',
    desc: 'Controlled experiments and prototypes that test emerging technological possibilities without overstating their maturity.',
  },
  {
    id: '05',
    title: 'Digital Experiences',
    discipline: 'EXPERIENCE DESIGN',
    status: 'CAPABILITY AREA',
    scope: 'STORY / INTERACTION',
    desc: 'Memorable interactive experiences where narrative, motion and technology work as one coherent system.',
  },
]

export function BuildSection() {
  return (
    <section id="capabilities" className="build section">
      <SectionHeader
        eyebrow="[ 02 // CAPABILITIES ]"
        title="From the useful to the unimagined."
      >
        <p>
          We build with an eye on utility, a respect for craft and curiosity for what technology can become.
        </p>
      </SectionHeader>

      <div className="build-catalog">
        <div className="catalog-header-bar" data-reveal>
          <span className="col-id">INDEX</span>
          <span className="col-title">CORE CAPABILITY</span>
          <span className="col-spec">SCOPE</span>
          <span className="col-metric">DIRECTION</span>
        </div>

        <div className="catalog-list">
          {capabilities.map((item) => (
            <article className="catalog-row glass-card-row" data-reveal key={item.id}>
              <div className="catalog-primary">
                <span className="catalog-num">{item.id}</span>
                <div className="catalog-details">
                  <span className="catalog-discipline">{item.discipline}</span>
                  <h3 className="catalog-title">{item.title}</h3>
                  <p className="catalog-desc">{item.desc}</p>
                </div>
              </div>

              <div className="catalog-secondary">
                <div className="catalog-spec-block">
                  <span className="tech-label">SPEC:</span>
                  <span className="tech-val">{item.scope}</span>
                </div>
                <div className="catalog-metric-block">
                  <span className="metric-badge">{item.status}</span>
                  <span className="metric-arrow">↗</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
