import { Link } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <span className="footer__logo">Atelier Lume</span>
          <p className="footer__tagline">{siteConfig.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Navegação do rodapé">
          <Link to="/projetos">Projetos</Link>
          <Link to="/sobre">Escritório</Link>
          <Link to="/contato">Contato</Link>
        </nav>

        <div className="footer__contact">
          <p>{siteConfig.location}</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            {siteConfig.whatsappDisplay}
          </a>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer">
            {siteConfig.instagram}
          </a>
        </div>
      </div>

      <div className="hairline" />

      <div className="container footer__bottom">
        <span>© {year} Atelier Lume. Todos os direitos reservados.</span>
        <span className="footer__credits">Site autoral desenvolvido sob medida.</span>
      </div>
    </footer>
  )
}
