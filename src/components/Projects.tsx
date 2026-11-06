import { engineeringMethodology } from '../content/site'
import { SectionHeader } from './SectionHeader'

export function Projects() {
  return (
    <section id="methodology" className="projects section">
      <SectionHeader
        eyebrow="[ 03 // METODOLOGÍA & PROCESO ]"
        title="Un método estructurado desde el diagnóstico hasta la entrega."
      >
        <p>
          Abordamos cada desafío tecnológico con un proceso predecible y riguroso que minimiza riesgos, asegura código limpio y maximiza la velocidad de ejecución.
        </p>
      </SectionHeader>

      <div className="methodology-grid">
        {engineeringMethodology.map((item) => (
          <article className="methodology-card glass-panel" data-reveal key={item.step}>
            <div className="methodology-step-badge">
              <span className="step-num">{item.step}</span>
              <span className="step-tag">{item.subtitle}</span>
            </div>

            <h3 className="methodology-title">{item.title}</h3>
            <p className="methodology-desc">{item.description}</p>

            <div className="methodology-outcome">
              <span className="outcome-label">Entregable clave:</span>
              <p className="outcome-text">{item.outcome}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
