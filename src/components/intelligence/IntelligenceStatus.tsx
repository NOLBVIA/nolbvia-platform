import { intelligenceStatus as status } from '../../content/intelligence'

export function IntelligenceStatus() {
  return (
    <section id="status" className="intelligence-section intelligence-status" aria-labelledby="intelligence-status-title">
      <div className="intelligence-section__inner">
        <p className="intelligence-eyebrow">{status.eyebrow}</p>
        <div className="intelligence-status__register">
          <div className="intelligence-status__phase">
            <span>PHASE / 01</span>
            <h2 id="intelligence-status-title">{status.phase}</h2>
            <p>{status.statement}</p>
          </div>
          <div className="intelligence-status__focus">
            <h3>{status.focusLabel}</h3>
            <ul>
              {status.focus.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="intelligence-status__next">
            <h3>{status.nextLabel}</h3>
            <p>{status.next}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
