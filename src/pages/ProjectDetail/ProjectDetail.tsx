import { Navigate, useParams, Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getProjectBySlug, getAdjacentProjects } from '../../data/projects'
import BeforeAfter from '../../components/BeforeAfter/BeforeAfter'
import { buildWhatsappLink } from '../../data/siteConfig'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const { prev, next } = getAdjacentProjects(project.slug)

  return (
    <div className="project-detail">
      <section className="pd-hero">
        <img src={project.heroImage} alt={project.heroImageAlt} className="pd-hero__image" />
        <div className="pd-hero__overlay" />
        <div className="container pd-hero__content">
          <span className="eyebrow">{project.category} — {project.city}</span>
          <h1 className="pd-hero__title">{project.name}</h1>
        </div>
      </section>

      <section className="container pd-meta">
        <div className="pd-meta__item">
          <span className="pd-meta__label">Categoria</span>
          <span>{project.category}</span>
        </div>
        <div className="pd-meta__item">
          <span className="pd-meta__label">Cidade</span>
          <span>{project.city}</span>
        </div>
        <div className="pd-meta__item">
          <span className="pd-meta__label">Ano</span>
          <span>{project.year}</span>
        </div>
        <div className="pd-meta__item">
          <span className="pd-meta__label">Área</span>
          <span>{project.area}</span>
        </div>
      </section>

      <section className="container pd-concept">
        <p className="pd-concept__text">{project.concept}</p>
      </section>

      <section className="container pd-description">
        <p>{project.description}</p>
      </section>

      <section className="container pd-gallery">
        {project.gallery.map((img, i) => (
          <div key={i} className={`pd-gallery__item pd-gallery__item--${img.orientation}`}>
            <img src={img.src} alt={img.alt} loading="lazy" />
          </div>
        ))}
      </section>

      <section className="container pd-materials">
        <span className="eyebrow">Materiais</span>
        <ul className="pd-materials__list">
          {project.materials.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </section>

      {project.beforeAfter && (
        <section className="container pd-before-after">
          <span className="eyebrow">Antes e depois</span>
          <div className="pd-before-after__frame">
            <BeforeAfter
              before={project.beforeAfter.before}
              after={project.beforeAfter.after}
              beforeAlt={project.beforeAfter.beforeAlt}
              afterAlt={project.beforeAfter.afterAlt}
            />
          </div>
        </section>
      )}

      <section className="container pd-cta">
        <p className="pd-cta__text">Gostaria de conversar sobre um projeto com um espírito semelhante?</p>
        <a
          className="btn-solid"
          href={buildWhatsappLink(`Olá, Atelier Lume! Vi o projeto ${project.name} no site e gostaria de conversar sobre um projeto semelhante.`)}
          target="_blank"
          rel="noreferrer"
        >
          Conversar sobre um projeto semelhante
        </a>
      </section>

      <nav className="pd-nav container" aria-label="Navegação entre projetos">
        <Link to={`/projetos/${prev.slug}`} className="pd-nav__link pd-nav__link--prev">
          <ArrowLeft size={16} strokeWidth={1.4} />
          <span>
            <span className="pd-nav__label">Anterior</span>
            {prev.name}
          </span>
        </Link>
        <Link to={`/projetos/${next.slug}`} className="pd-nav__link pd-nav__link--next">
          <span>
            <span className="pd-nav__label">Próximo</span>
            {next.name}
          </span>
          <ArrowRight size={16} strokeWidth={1.4} />
        </Link>
      </nav>
    </div>
  )
}
