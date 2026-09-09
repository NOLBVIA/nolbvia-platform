import { useEffect, useRef, useState } from 'react'
import { navItems } from '../content/site'
import { BrandLogo } from './BrandLogo'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#top')
  const menuToggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      menuToggleRef.current?.focus()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const mobileNavigation = window.matchMedia('(max-width: 1100px)')
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (!event.matches) setOpen(false)
    }
    mobileNavigation.addEventListener('change', closeAtDesktop)
    return () => mobileNavigation.removeEventListener('change', closeAtDesktop)
  }, [])

  useEffect(() => {
    const targets = ['#top', ...navItems.map((item) => item.href)]
      .map((selector) => document.querySelector(selector))
      .filter((element): element is Element => Boolean(element))
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
      }),
      { rootMargin: '-38% 0px -52% 0px', threshold: 0 },
    )
    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`nav-wrap ${scrolled ? 'nav-scrolled' : ''}`}>
      <nav className="nav" aria-label="Main navigation">
        <a href="#top" className="brand-link" onClick={close} aria-label="NOLBVIA Home">
          <BrandLogo size="md" />
        </a>

        <button
          ref={menuToggleRef}
          className={`menu-toggle ${open ? 'active' : ''}`}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Toggle navigation menu</span>
          <i />
          <i />
        </button>

        <div id="nav-links" className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a href={item.href} onClick={close} key={item.label} className={`nav-item ${activeSection === item.href ? 'active' : ''}`} aria-current={activeSection === item.href ? 'location' : undefined}>
              <span className="nav-item-text">{item.label}</span>
            </a>
          ))}
          <a href="/development" onClick={close} className="nav-item">
            <span className="nav-item-text">DEVELOPMENT</span>
          </a>
          <a className="nav-cta-button" href="#ecosystem" onClick={close}>
            <span>ENTER ECOSYSTEM</span>
            <span className="cta-arrow">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
