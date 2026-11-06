import { developmentBuildLog } from '../../content/development'

export function DevelopmentBuildLog() {
  return (
    <section id="build-log" className="development-section development-build-log" aria-labelledby="development-build-log-title">
      <div className="development-section__header" data-reveal>
        <p className="development-section__index">[ 04 / REGISTRO DE INGENIERÍA ]</p>
        <h2 id="development-build-log-title">BUILD LOG</h2>
        <p>Documentación técnica de arquitectura, desafíos resueltos y decisiones de ingeniería en sistemas reales.</p>
      </div>

      <div className="development-build-log__list">
        {developmentBuildLog.map((entry) => (
          <article className="build-log-card" data-reveal key={entry.id}>
            <div className="build-log-card__header">
              <div className="build-log-card__meta">
                <span className="log-id">{entry.id}</span>
                <span className="log-date">{entry.date}</span>
                <span className="log-project">{entry.project}</span>
              </div>
              <span className="log-badge">{entry.badge}</span>
            </div>

            <h3 className="build-log-card__title">{entry.title}</h3>

            <div className="build-log-card__content">
              <div className="content-block">
                <span className="block-label">DESAFÍO TÉCNICO</span>
                <p>{entry.challenge}</p>
              </div>
              <div className="content-block">
                <span className="block-label">ARQUITECTURA DEL SISTEMA</span>
                <p>{entry.architecture}</p>
              </div>
              <div className="content-block">
                <span className="block-label">SOLUCIÓN IMPLEMENTADA</span>
                <p>{entry.solution}</p>
              </div>
            </div>

            <div className="build-log-card__footer">
              <span className="stack-label">Stack Verificado:</span>
              <div className="stack-tags">
                {entry.stack.map((tech) => (
                  <span key={tech} className="stack-pill">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

