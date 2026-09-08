import { BrandLogo } from '../BrandLogo'
import { developmentNavigation } from '../../content/development'

export function DevelopmentFooter() {
  return (
    <footer className="development-footer">
      <div className="development-footer__top">
        <div className="development-footer__brand">
          <BrandLogo size="md" showDescriptor={false} />
          <span>DEVELOPMENT</span>
          <p>SOFTWARE <i>•</i> AI <i>•</i> SYSTEMS <i>•</i> DIGITAL PRODUCTS</p>
        </div>
        <nav className="development-footer__navigation" aria-label="Development footer navigation">
          <span>NAVIGATE</span>
          {developmentNavigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <div className="development-footer__return">
          <span>ECOSYSTEM</span>
          <a href="/">RETURN TO NOLBVIA <i aria-hidden="true">↗</i></a>
        </div>
      </div>
      <div className="development-footer__bottom">
        <span>© {new Date().getFullYear()} NOLBVIA DEVELOPMENT</span>
        <span>ENGINEERING / SYSTEMS / INTELLIGENCE / PRODUCTS</span>
      </div>
    </footer>
  )
}
