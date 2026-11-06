import { BrandLogo } from '../BrandLogo'
import { developmentNavigation } from '../../content/development'

export function DevelopmentFooter() {
  return (
    <footer className="development-footer">
      <div className="development-footer__top">
        <div className="development-footer__brand">
          <BrandLogo size="md" showDescriptor={false} />
          <span>DEVELOPMENT</span>
          <p>SOFTWARE <i>•</i> SISTEMAS <i>•</i> PLATAFORMAS <i>•</i> PRODUCTOS DIGITALES</p>
        </div>
        <nav className="development-footer__navigation" aria-label="Navegación de Development">
          <span>NAVEGACIÓN</span>
          {developmentNavigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <div className="development-footer__return">
          <span>ECOSISTEMA</span>
          <a href="/">VOLVER A NOLBVIA <i aria-hidden="true">↗</i></a>
          <a href="/exploration">02 / EXPLORATION</a>
          <a href="/intelligence">03 / INTELLIGENCE</a>
        </div>
      </div>
      <div className="development-footer__bottom">
        <span>© {new Date().getFullYear()} NOLBVIA DEVELOPMENT</span>
        <span>INGENIERÍA / SISTEMAS / PLATAFORMAS / PRODUCTOS</span>
      </div>
    </footer>
  )
}
