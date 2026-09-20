import { useEffect, useRef, useState } from 'react'
import { BrandLogo } from '../BrandLogo'
import { intelligenceNavigation } from '../../content/intelligence'

export function IntelligenceNavbar() {
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
    const desktop = window.matchMedia('(min-width: 961px)')
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeAtDesktop)
    return () => desktop.removeEventListener('change', closeAtDesktop)
  }, [])

  useEffect(() => {
    const sections = intelligenceNavigation
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
    <header className={`intelligence-navbar${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="intelligence-navbar__inner" aria-label="NOLBVIA Intelligence navigation">
        <a className="intelligence-navbar__brand" href="/" aria-label="NOLBVIA home" onClick={close}>
          <BrandLogo size="sm" showDescriptor={false} />
          <span>INTELLIGENCE</span>
        </a>
        <button
          ref={toggleRef}
          className={`intelligence-navbar__toggle${open ? ' is-open' : ''}`}
          type="button"
          aria-expanded={open}
          aria-controls="intelligence-navigation"
          aria-label="Toggle Intelligence navigation"
          onClick={() => setOpen((current) => !current)}
        >
          <i aria-hidden="true" />
          <i aria-hidden="true" />
        </button>
        <div id="intelligence-navigation" className={`intelligence-navbar__links${open ? ' is-open' : ''}`}>
          {intelligenceNavigation.map((item) => (
            <a
              href={item.href}
              aria-current={activeSection === item.href ? 'location' : undefined}
              onClick={close}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
          <a className="intelligence-navbar__cta" href="/#ecosystem" onClick={close}>
            ENTER ECOSYSTEM <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
