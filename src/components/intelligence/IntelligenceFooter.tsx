import { BrandLogo } from '../BrandLogo'
import { intelligenceFooter as footer, intelligenceNavigation } from '../../content/intelligence'

export function IntelligenceFooter() {
  return (
    <footer className="intelligence-footer">
      <div className="intelligence-footer__top">
        <div className="intelligence-footer__brand">
          <BrandLogo size="md" showDescriptor={false} />
          <p>{footer.division}</p>
          <span>{footer.direction}</span>
        </div>
        <nav aria-label="Intelligence footer navigation">
          <p>NAVIGATE</p>
          {intelligenceNavigation.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
        <nav aria-label="NOLBVIA ecosystem navigation">
          <p>ECOSYSTEM</p>
          {footer.links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </nav>
      </div>
      <div className="intelligence-footer__bottom">
        <span>© {new Date().getFullYear()} NOLBVIA INTELLIGENCE</span>
        <span>{footer.direction}</span>
      </div>
    </footer>
  )
}
