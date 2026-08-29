export function Vision() {
  return (
    <section id="vision" className="vision section">
      <div className="vision-line" aria-hidden="true" />
      
      <div className="vision-inner glass-panel" data-reveal>
        <div className="vision-header">
          <p className="eyebrow">[ 04 // MANIFESTO & HORIZON ]</p>
          <div className="vision-badge">
            <span className="badge-pulse" />
            <span>LONG-HORIZON FRAMEWORK</span>
          </div>
        </div>

        <h2 className="vision-headline">
          <span>ENGINEERING TODAY.</span><br />
          <em className="headline-accent">FOR HORIZONS UNCHARTED.</em>
        </h2>

        <p className="vision-body">
          NOLBVIA begins with digital development while preserving room to evolve toward new disciplines, larger questions and future exploration.
        </p>

        <div className="timeline" aria-label="NOLBVIA development roadmap and phases">
          <div className="timeline-node active">
            <div className="node-marker">
              <span className="node-indicator" />
              <span className="node-pulse" />
            </div>
            <div className="node-content">
              <span className="node-phase">PRESENT</span>
              <strong className="node-title">FOUNDATION</strong>
              <p className="node-desc">Identity, architecture and the first digital foundations.</p>
            </div>
            <i className="node-line" />
          </div>

          <div className="timeline-node active">
            <div className="node-marker">
              <span className="node-indicator" />
              <span className="node-pulse" />
            </div>
            <div className="node-content">
              <span className="node-phase">BUILD</span>
              <strong className="node-title">DEVELOPMENT</strong>
              <p className="node-desc">Software, applications and digital products.</p>
            </div>
            <i className="node-line" />
          </div>

          <div className="timeline-node">
            <div className="node-marker">
              <span className="node-indicator" />
            </div>
            <div className="node-content">
              <span className="node-phase">EXPLORE</span>
              <strong className="node-title">NEW FRONTIERS</strong>
              <p className="node-desc">Science, technology and exploratory possibilities.</p>
            </div>
            <i className="node-line" />
          </div>

          <div className="timeline-node">
            <div className="node-marker">
              <span className="node-indicator" />
            </div>
            <div className="node-content">
              <span className="node-phase">FUTURE</span>
              <strong className="node-title">OPEN HORIZON</strong>
              <p className="node-desc">Divisions and projects that have not yet been defined.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
