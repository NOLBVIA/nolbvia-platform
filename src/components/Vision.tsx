export function Vision() {
  return (
    <section id="vision" className="vision section">
      <div className="vision-line" aria-hidden="true" />
      
      <div className="vision-inner glass-panel" data-reveal>
        <div className="vision-header">
          <p className="eyebrow">[ 04 // VISIÓN &amp; PRINCIPIOS ]</p>
          <div className="vision-badge">
            <span className="badge-pulse" />
            <span>INGENIERÍA CON VISIÓN</span>
          </div>
        </div>

        <h2 className="vision-headline">
          <span>CONSTRUCCIÓN EN EL PRESENTE.</span><br />
          <em className="headline-accent">HORIZONTES SIN LÍMITE.</em>
        </h2>

        <p className="vision-body">
          NOLBVIA opera con un principio cardinal: resolver desafíos concretos con software e ingeniería hoy, preservando la arquitectura y la ambición científica para explorar las tecnologías complejas del mañana.
        </p>

        <div className="timeline" aria-label="Evolución y trayectoria de NOLBVIA">
          <div className="timeline-node active">
            <div className="node-marker">
              <span className="node-indicator" />
              <span className="node-pulse" />
            </div>
            <div className="node-content">
              <span className="node-phase">PRESENTE</span>
              <strong className="node-title">DESARROLLO DIGITAL</strong>
              <p className="node-desc">Ingeniería de software, plataformas y sistemas para resolver necesidades reales.</p>
            </div>
            <i className="node-line" />
          </div>

          <div className="timeline-node active">
            <div className="node-marker">
              <span className="node-indicator" />
              <span className="node-pulse" />
            </div>
            <div className="node-content">
              <span className="node-phase">INTEGRACIÓN</span>
              <strong className="node-title">INTELIGENCIA &amp; DATOS</strong>
              <p className="node-desc">Automatización de flujos y sistemas computacionales de alto impacto.</p>
            </div>
            <i className="node-line" />
          </div>

          <div className="timeline-node">
            <div className="node-marker">
              <span className="node-indicator" />
            </div>
            <div className="node-content">
              <span className="node-phase">FRONTERA</span>
              <strong className="node-title">EXPLORACIÓN CIENTÍFICA</strong>
              <p className="node-desc">Investigación en sistemas autónomos y tecnologías para entornos exigentes.</p>
            </div>
            <i className="node-line" />
          </div>

          <div className="timeline-node">
            <div className="node-marker">
              <span className="node-indicator" />
            </div>
            <div className="node-content">
              <span className="node-phase">FUTURO</span>
              <strong className="node-title">NUEVAS DISCIPLINAS</strong>
              <p className="node-desc">Evolución abierta del ecosistema hacia áreas de ingeniería de nueva generación.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
