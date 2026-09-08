import { developmentCapabilities } from '../../content/development'

export function DevelopmentCapabilities() {
  return (
    <section id="capabilities" className="development-section development-capabilities" aria-labelledby="development-capabilities-title">
      <div className="development-section__header" data-reveal>
        <p className="development-section__index">[ 03 / CAPABILITY DOMAINS ]</p>
        <h2 id="development-capabilities-title">CAPABILITIES</h2>
        <p>Areas of focus guiding the division&apos;s development work.</p>
      </div>
      <ol className="development-capability-list">
        {developmentCapabilities.map((capability, index) => (
          <li data-reveal key={capability}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <strong>{capability}</strong>
            <small>CAPABILITY DOMAIN</small>
            <i aria-hidden="true">↗</i>
          </li>
        ))}
      </ol>
    </section>
  )
}
