import { MessageCircle, Mail, Instagram } from 'lucide-react'
import ContactForm from '../../components/ContactForm/ContactForm'
import { siteConfig } from '../../data/siteConfig'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <header className="contact-hero container">
        <span className="eyebrow">Contato</span>
        <h1 className="contact-hero__title">Vamos conversar sobre o seu projeto</h1>
        <p className="contact-hero__lead">
          Conte um pouco sobre o espaço que você tem em mente. Respondemos com atenção a cada mensagem recebida.
        </p>
      </header>

      <section className="container contact-body">
        <div className="contact-body__form">
          <ContactForm />
        </div>

        <div className="contact-body__direct">
          <span className="eyebrow">Contato direto</span>
          <ul className="contact-direct__list">
            <li>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="contact-direct__link"
              >
                <MessageCircle size={18} strokeWidth={1.3} />
                <span>
                  WhatsApp
                  <small>{siteConfig.whatsappDisplay}</small>
                </span>
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="contact-direct__link">
                <Mail size={18} strokeWidth={1.3} />
                <span>
                  E-mail
                  <small>{siteConfig.email}</small>
                </span>
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="contact-direct__link"
              >
                <Instagram size={18} strokeWidth={1.3} />
                <span>
                  Instagram
                  <small>{siteConfig.instagram}</small>
                </span>
              </a>
            </li>
          </ul>
          <p className="contact-direct__meta">{siteConfig.location}</p>
        </div>
      </section>
    </div>
  )
}
