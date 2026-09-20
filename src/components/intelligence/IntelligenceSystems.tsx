import { intelligenceSystems as systems } from '../../content/intelligence'

export function IntelligenceSystems() {
  return (
    <section id="systems" className="intelligence-section intelligence-systems" aria-labelledby="intelligence-systems-title">
      <div className="intelligence-section__inner">
        <p className="intelligence-eyebrow">{systems.eyebrow}</p>
        <div className="intelligence-section__heading intelligence-section__heading--wide">
          <h2 id="intelligence-systems-title">{systems.headline}</h2>
          <p>{systems.description}</p>
        </div>
        <ol className="intelligence-system-path" aria-label="Path from model to system">
          {systems.stages.map((stage, index) => (
            <li key={stage}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{stage}</strong>
              {index < systems.stages.length - 1 && <i aria-hidden="true">→</i>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
