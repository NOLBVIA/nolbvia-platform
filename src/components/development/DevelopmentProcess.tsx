import { developmentProcess } from '../../content/development'

export function DevelopmentProcess() {
  return (
    <section id="process" className="development-section development-process" aria-labelledby="development-process-title">
      <div className="development-section__header" data-reveal>
        <p className="development-section__index">[ 04 / ENGINEERING PIPELINE ]</p>
        <h2 id="development-process-title">ENGINEERING PROCESS</h2>
        <p>A structured path from inquiry to continuous improvement.</p>
      </div>
      <ol className="development-process__pipeline" aria-label="NOLBVIA Development engineering process">
        {developmentProcess.map((phase, index) => (
          <li data-reveal key={phase}>
            <div className="development-process__marker"><i aria-hidden="true" /><span>{String(index + 1).padStart(2, '0')}</span></div>
            <strong>{phase}</strong>
          </li>
        ))}
      </ol>
    </section>
  )
}
