export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-ambient-glow" aria-hidden="true" />

      <div className="hero-copy-area">
        <div className="hero-system-badge" data-reveal>
          <span className="badge-bracket">[</span>
          <span className="badge-dot" />
          <span className="badge-text">NOLBVIA // SYSTEMS &amp; AEROSPACE ENGINEERING</span>
          <span className="badge-bracket">]</span>
        </div>

        <h1 id="hero-title" data-reveal>
          BUILDING SYSTEMS FOR<br />
          <span className="headline-accent">WHAT COMES NEXT.</span>
        </h1>

        <p className="hero-copy" data-reveal>
          NOLBVIA develops technology, systems and aerospace engineering solutions for what comes next.
        </p>

        <div className="hero-actions" data-reveal>
          <a className="button button-primary" href="#ecosystem">
            <span>EXPLORE ECOSYSTEM</span>
            <span className="btn-glyph">↗</span>
          </a>
          <a className="button button-secondary" href="#divisions">
            <span>CORE DIVISIONS</span>
            <span className="btn-glyph">→</span>
          </a>
        </div>
      </div>

      <div className="hero-visual-space" aria-hidden="true" />

      {/* High-Precision Aerospace Telemetry HUD */}
      <div className="hero-telemetry" aria-hidden="true">
        <div className="telemetry-item">
          <span className="telemetry-dot" />
          <span className="telemetry-val">STATUS: IN FORMATION</span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-label">SYSTEM:</span>
          <span className="telemetry-val">NOLBVIA_CORE</span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-label">VECTOR:</span>
          <span className="telemetry-val">DEVELOPMENT // EXPLORATION</span>
        </div>
        <div className="telemetry-item telemetry-hide-mobile">
          <span className="telemetry-label">SEQUENCE:</span>
          <span className="telemetry-val">300 FRAMES</span>
        </div>
      </div>

      <a className="scroll-cue" href="#ecosystem" aria-label="Scroll down to explore the ecosystem">
        <span className="scroll-text">SCROLL TO DISCOVER</span>
        <span className="scroll-line"><i /></span>
      </a>
    </section>
  )
}
