import { useEffect, useRef, useState } from 'react'
import { BrandLogo } from '../BrandLogo'
import { developmentNavigation } from '../../content/development'

export function DevelopmentNavbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1101px)')
    const closeMenu = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeMenu)
    return () => desktop.removeEventListener('change', closeMenu)
  }, [])

  useEffect(() => {
    const sections = developmentNavigation
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`)
      }),
      { rootMargin: '-34% 0px -56% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`development-navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="development-navbar__inner" aria-label="NOLBVIA Development navigation">
        <a className="development-navbar__brand" href="/development" aria-label="NOLBVIA Development home" onClick={close}>
          <BrandLogo size="sm" showDescriptor={false} />
          <span className="development-navbar__division">DEVELOPMENT</span>
        </a>

        <button
          ref={toggleRef}
          className={`development-navbar__toggle ${open ? 'is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="development-navigation-links"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">Toggle Development navigation</span>
          <i />
          <i />
        </button>

        <div id="development-navigation-links" className={`development-navbar__links ${open ? 'is-open' : ''}`}>
          {developmentNavigation.map((item) => (
            <a
              className="development-navbar__link"
              href={item.href}
              aria-current={activeSection === item.href ? 'location' : undefined}
              onClick={close}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <a className="development-navbar__link" href="/" onClick={close}>CORPORATE</a>
          <a className="development-navbar__cta" href="/#contact" onClick={close}>START A PROJECT <span aria-hidden="true">↗</span></a>
        </div>
      </nav>
    </header>
  )
}
