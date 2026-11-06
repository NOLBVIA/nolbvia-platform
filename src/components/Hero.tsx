export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-ambient-glow" aria-hidden="true" />

      <div className="hero-copy-area">
        <div className="hero-system-badge" data-reveal>
          <span className="badge-bracket">[</span>
          <span className="badge-dot" />
          <span className="badge-text">NOLBVIA // INGENIERÍA &amp; DESARROLLO DIGITAL</span>
          <span className="badge-bracket">]</span>
        </div>

        <h1 id="hero-title" data-reveal>
          CONSTRUIMOS TECNOLOGÍA<br />
          PARA RESOLVER PROBLEMAS <span className="headline-accent">REALES.</span>
        </h1>

        <p className="hero-copy" data-reveal>
          Diseñamos y desarrollamos software, aplicaciones y sistemas digitales que transforman ideas y necesidades en soluciones tecnológicas escalables y de alto rendimiento.
        </p>

        <div className="hero-actions" data-reveal>
          <a className="button button-primary" href="#contact">
            <span>HABLEMOS DE TU PROYECTO</span>
            <span className="btn-glyph">↗</span>
          </a>
          <a className="button button-secondary" href="#capabilities">
            <span>CONOCER CAPACIDADES</span>
            <span className="btn-glyph">↓</span>
          </a>
        </div>
      </div>

      <div className="hero-visual-space" aria-hidden="true">
        <div className="hero-feature-card glass-panel" data-reveal>
          <div className="hero-feature-header">
            <span className="hero-feature-tag">ENFOQUE TECNOLÓGICO</span>
            <span className="hero-feature-status">OPERATIVO</span>
          </div>
          <h3 className="hero-feature-title">Desarrollo de Software y Sistemas Digitales</h3>
          <p className="hero-feature-desc">
            Arquitecturas resilientes, interfaces intuitivas y código de ingeniería para organizaciones que demandan fiabilidad técnica.
          </p>
          <div className="hero-feature-metrics">
            <div className="hero-metric-item">
              <span className="metric-val">100%</span>
              <span className="metric-lbl">A Medida</span>
            </div>
            <div className="hero-metric-item">
              <span className="metric-val">Modern</span>
              <span className="metric-lbl">Stack Tecnológico</span>
            </div>
            <div className="hero-metric-item">
              <span className="metric-val">Escalable</span>
              <span className="metric-lbl">Por Diseño</span>
            </div>
          </div>
        </div>
      </div>

      <a className="scroll-cue" href="#ecosystem" aria-label="Desplazarse para conocer el ecosistema">
        <span className="scroll-text">EXPLORAR ECOSISTEMA</span>
        <span className="scroll-line"><i /></span>
      </a>
    </section>
  )
}
