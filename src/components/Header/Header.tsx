import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteConfig, buildWhatsappLink } from '../../data/siteConfig'
import './Header.css'

const links = [
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre', label: 'Escritório' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--solid' : ''} ${menuOpen ? 'header--menu-open' : ''}`}>
      <div className="header__bar container">
        <Link to="/" className="header__logo" onClick={() => setMenuOpen(false)}>
          Atelier Lume
        </Link>

        <nav className="header__nav" aria-label="Navegação principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `header__link ${isActive ? 'is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="btn-line header__cta"
            href={buildWhatsappLink('Olá, Atelier Lume! Conheci o trabalho de vocês pelo site e gostaria de conversar sobre um projeto.')}
            target="_blank"
            rel="noreferrer"
          >
            Iniciar um projeto
          </a>
        </nav>

        <button
          className="header__toggle"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X size={22} strokeWidth={1.4} /> : <Menu size={22} strokeWidth={1.4} />}
        </button>
      </div>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <nav className="mobile-menu__nav" aria-label="Navegação mobile">
          {links.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="mobile-menu__link"
              style={{ transitionDelay: menuOpen ? `${i * 0.06 + 0.1}s` : '0s' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu__footer" style={{ transitionDelay: menuOpen ? '0.32s' : '0s' }}>
          <a
            className="btn-solid"
            href={buildWhatsappLink('Olá, Atelier Lume! Conheci o trabalho de vocês pelo site e gostaria de conversar sobre um projeto.')}
            target="_blank"
            rel="noreferrer"
          >
            Iniciar um projeto
          </a>
          <p className="mobile-menu__meta">{siteConfig.location}</p>
        </div>
      </div>
    </header>
  )
}
