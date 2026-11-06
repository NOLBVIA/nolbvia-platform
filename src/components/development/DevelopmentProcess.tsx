import { developmentProcess } from '../../content/development'

export function DevelopmentProcess() {
  return (
    <section id="process" className="development-section development-process" aria-labelledby="development-process-title">
      <div className="development-section__header" data-reveal>
        <p className="development-section__index">[ 06 / METODOLOGÍA ]</p>
        <h2 id="development-process-title">ENGINEERING PROCESS</h2>
        <p>Los 7 pasos metódicos aplicados a la construcción de cada solución digital.</p>
      </div>
      <ol className="development-process__pipeline" aria-label="Metodología de ingeniería de NOLBVIA Development">
        {developmentProcess.map((item) => (
          <li data-reveal key={item.step}>
            <div className="development-process__marker">
              <i aria-hidden="true" />
              <span>{item.step}</span>
            </div>
            <div className="development-process__text">
              <strong>{item.name}</strong>
              <small>{item.title}</small>
              <p>{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
