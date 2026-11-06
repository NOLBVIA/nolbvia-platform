import { commercialCapabilities } from '../content/site'
import { SectionHeader } from './SectionHeader'

export function BuildSection() {
  return (
    <section id="capabilities" className="build section">
      <SectionHeader
        eyebrow="[ 02 // SERVICIOS & CAPACIDADES ]"
        title="Ingeniería digital concebida para generar valor y escala."
      >
        <p>
          Combinamos rigor técnico, diseño de producto y metodologías de desarrollo ágiles para construir soluciones fiables a problemas empresariales concretos.
        </p>
      </SectionHeader>

      <div className="capabilities-grid">
        {commercialCapabilities.map((item) => (
          <article className="capability-card glass-panel" data-reveal key={item.id}>
            <div className="capability-card__header">
              <span className="capability-card__index">{item.id}</span>
              <span className="capability-card__category">{item.category}</span>
            </div>

            <h3 className="capability-card__title">{item.title}</h3>
            <p className="capability-card__desc">{item.description}</p>

            <div className="capability-card__deliverables">
              <span className="deliverables-title">Áreas de especialidad:</span>
              <ul className="deliverables-list">
                {item.deliverables.map((deliv) => (
                  <li key={deliv}>
                    <i aria-hidden="true" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="capability-card__footer">
              <p className="capability-card__value">
                <strong>Enfoque:</strong> {item.valueProposition}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
