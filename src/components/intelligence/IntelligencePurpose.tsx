import { intelligencePurpose as purpose } from '../../content/intelligence'

export function IntelligencePurpose() {
  return (
    <section id="purpose" className="intelligence-section intelligence-purpose" aria-labelledby="intelligence-purpose-title">
      <div className="intelligence-section__inner">
        <p className="intelligence-eyebrow">{purpose.eyebrow}</p>
        <div className="intelligence-section__heading">
          <h2 id="intelligence-purpose-title">{purpose.headline}</h2>
          <p>{purpose.description}</p>
        </div>
        <ol className="intelligence-flow" aria-label="Path from data to intelligence">
          {purpose.stages.map((stage, index) => (
            <li key={stage}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{stage}</strong>
              {index < purpose.stages.length - 1 && <i aria-hidden="true">↓</i>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
