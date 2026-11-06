import { developmentExperimental } from '../../content/development'

export function DevelopmentExperimental() {
  return (
    <section id="experimental" className="development-section development-experimental" aria-labelledby="development-experimental-title">
      <div className="development-section__header" data-reveal>
        <p className="development-section__index">[ 05 / PROTOTIPOS &amp; FRONTERA ]</p>
        <h2 id="development-experimental-title">EXPERIMENTAL SYSTEMS</h2>
        <p>Líneas de exploración técnica diferenciadas de los productos comerciales: prototipos, agentes y arquitecturas emergentes.</p>
      </div>

      <div className="development-experimental-grid">
        {developmentExperimental.map((item) => (
          <article className="experimental-card" data-reveal key={item.id}>
            <div className="experimental-card__header">
              <span className="experimental-id">{item.id}</span>
              <span className="experimental-tag">{item.tag}</span>
            </div>
            <h3 className="experimental-title">{item.title}</h3>
            <p className="experimental-desc">{item.desc}</p>
            <div className="experimental-status">
              <span className="status-indicator" />
              <span>LABORATORIO &amp; PROTOTIPO</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

