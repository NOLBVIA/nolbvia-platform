import { developmentHeroContent } from '../../content/development'

export function DevelopmentHero() {
  return (
    <section className="development-hero" aria-labelledby="development-title">
      <div className="development-hero__copy">
        <p className="development-kicker" data-reveal><span>[</span> {developmentHeroContent.badge} <span>]</span></p>
        <h1 id="development-title" data-reveal>
          TRANSFORMAMOS IDEAS<br />
          EN SOLUCIONES <em>DIGITALES.</em>
        </h1>
        <p className="development-hero__lead" data-reveal>
          {developmentHeroContent.subheadline}
        </p>
        <div className="development-hero__actions" data-reveal>
          <a className="development-button development-button--primary" href="/#contact">
            {developmentHeroContent.primaryCTA} <span aria-hidden="true">↗</span>
          </a>
          <a className="development-button development-button--secondary" href="#overview">
            {developmentHeroContent.secondaryCTA} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="development-hero__system" aria-hidden="true">
        <div className="development-system-map">
          <span className="development-system-map__label development-system-map__label--a">SYS / DEV</span>
          <span className="development-system-map__label development-system-map__label--b">SOLUCIONES DIGITALES</span>
          <span className="development-system-map__label development-system-map__label--c">INGENIERÍA</span>
          <i className="development-system-map__node development-system-map__node--a" />
          <i className="development-system-map__node development-system-map__node--b" />
          <i className="development-system-map__node development-system-map__node--c" />
          <div className="development-system-map__core"><span>DEV</span><small>CORE</small></div>
        </div>
      </div>

      <div className="development-hero__rail" aria-hidden="true">
        <span>SOFTWARE</span><i /><span>PLATAFORMAS</span><i /><span>APLICACIONES</span><i /><span>SISTEMAS</span>
      </div>
    </section>
  )
}
