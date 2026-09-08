export function DevelopmentHero() {
  return (
    <section className="development-hero" aria-labelledby="development-title">
      <div className="development-hero__copy">
        <p className="development-kicker" data-reveal><span>[</span> NOLBVIA DEVELOPMENT <span>]</span></p>
        <h1 id="development-title" data-reveal>
          ENGINEERING DIGITAL SYSTEMS<br />
          FOR WHAT COMES <em>NEXT.</em>
        </h1>
        <p className="development-hero__lead" data-reveal>
          Software, artificial intelligence, computing and digital systems engineered for emerging challenges.
        </p>
        <div className="development-hero__actions" data-reveal>
          <a className="development-button development-button--primary" href="#projects">EXPLORE PROJECTS <span aria-hidden="true">↗</span></a>
          <a className="development-button development-button--secondary" href="#capabilities">OUR CAPABILITIES <span aria-hidden="true">→</span></a>
        </div>
      </div>

      <div className="development-hero__system" aria-hidden="true">
        <div className="development-system-map">
          <span className="development-system-map__label development-system-map__label--a">SYS / 001</span>
          <span className="development-system-map__label development-system-map__label--b">DIGITAL SYSTEMS</span>
          <span className="development-system-map__label development-system-map__label--c">NLB / DEV</span>
          <i className="development-system-map__node development-system-map__node--a" />
          <i className="development-system-map__node development-system-map__node--b" />
          <i className="development-system-map__node development-system-map__node--c" />
          <div className="development-system-map__core"><span>DEV</span><small>CORE</small></div>
        </div>
      </div>

      <div className="development-hero__rail" aria-hidden="true">
        <span>ENGINEERING</span><i /><span>SYSTEMS</span><i /><span>INTELLIGENCE</span><i /><span>PRODUCTS</span>
      </div>
    </section>
  )
}
