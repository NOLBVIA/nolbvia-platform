import { developmentCapabilities } from '../../content/development'

export function DevelopmentCapabilities() {
  return (
    <section id="capabilities" className="development-section development-capabilities" aria-labelledby="development-capabilities-title">
      <div className="development-section__header" data-reveal>
        <p className="development-section__index">[ 04 / ESPECIALIZACIÓN ]</p>
        <h2 id="development-capabilities-title">CAPACIDADES TÉCNICAS</h2>
        <p>Disciplinas de ingeniería aplicadas a la construcción de software y sistemas escalables.</p>
      </div>
      <ol className="development-capability-list">
        {developmentCapabilities.map((capability, index) => (
          <li data-reveal key={capability}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{capability}</strong>
            <small>DOMINIO DE INGENIERÍA</small>
            <i aria-hidden="true">↗</i>
          </li>
        ))}
      </ol>
    </section>
  )
}
