import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import BeforeAfter from '../../components/BeforeAfter/BeforeAfter'
import { projects } from '../../data/projects'
import { siteConfig, buildWhatsappLink } from '../../data/siteConfig'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

const processSteps = [
  { number: '01', title: 'Escuta', text: 'Entendemos o terreno, a rotina e os desejos de quem vai habitar o espaço antes de desenhar qualquer linha.' },
  { number: '02', title: 'Conceito', text: 'Traduzimos essa escuta em uma ideia central, capaz de guiar todas as decisões seguintes do projeto.' },
  { number: '03', title: 'Desenvolvimento', text: 'Detalhamos materiais, estrutura e instalações com o mesmo cuidado dedicado ao conceito inicial.' },
  { number: '04', title: 'Realização', text: 'Acompanhamos a obra de perto, garantindo que o que foi desenhado se mantenha fiel até a entrega.' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const heroImgRef = useRef<HTMLImageElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (!prefersReducedMotion && heroImgRef.current) {
        gsap.to(heroImgRef.current, {
          scale: 1.12,
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      document.querySelectorAll<HTMLElement>('[data-reveal-lines]').forEach((el) => {
        const lines = el.querySelectorAll('.reveal-line > *')
        gsap.fromTo(
          lines,
          { yPercent: prefersReducedMotion ? 0 : 110 },
          {
            yPercent: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })

      document.querySelectorAll<HTMLElement>('[data-reveal-fade]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: prefersReducedMotion ? 1 : 0, y: prefersReducedMotion ? 0 : 24 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        )
      })

      document.querySelectorAll<HTMLElement>('[data-process-number]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: prefersReducedMotion ? 1 : 0 },
          {
            opacity: 1,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 85%' },
          }
        )
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="home">
      {/* HERO */}
      <section className="hero" ref={heroRef}>
        <div className="hero__media">
          <img
            ref={heroImgRef}
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop"
            alt="Fachada de arquitetura contemporânea em concreto e madeira, projetada pelo Atelier Lume"
            className="hero__image"
          />
          <div className="hero__overlay" />
        </div>

        <div className="hero__content container">
          <span className="hero__location">{siteConfig.location}</span>
          <h1 className="hero__title">Atelier Lume</h1>
          <p className="hero__tagline">{siteConfig.tagline}</p>
        </div>

        <div className="hero__scroll">
          <ArrowDown size={18} strokeWidth={1.2} />
          <span>Role para continuar</span>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="section manifesto container">
        <p className="manifesto__text reveal-line" data-reveal-lines>
          <span>Projetamos espaços que atravessam o tempo,</span>
          <span>acolhem histórias e revelam</span>
          <span>novas formas de habitar.</span>
        </p>
      </section>

      {/* PROJETOS SELECIONADOS */}
      <section className="section selected-projects">
        <div className="container">
          <div className="section-head" data-reveal-fade>
            <span className="eyebrow">Projetos selecionados</span>
            <h2 className="section-heading">Uma seleção de trabalhos recentes do escritório</h2>
          </div>

          <div className="selected-projects__grid">
            <div className="sp-item sp-item--1" data-reveal-fade>
              <ProjectCard project={projects[0]} index={1} size="large" />
            </div>
            <div className="sp-item sp-item--2" data-reveal-fade>
              <ProjectCard project={projects[1]} index={2} size="medium" />
            </div>
            <div className="sp-item sp-item--3" data-reveal-fade>
              <ProjectCard project={projects[2]} index={3} size="medium" />
            </div>
            <div className="sp-item sp-item--4" data-reveal-fade>
              <ProjectCard project={projects[3]} index={4} size="large" />
            </div>
          </div>

          <Link to="/projetos" className="btn-line selected-projects__link">
            Ver todos os projetos <ArrowUpRight size={16} strokeWidth={1.4} />
          </Link>
        </div>
      </section>

      {/* ANTES E DEPOIS */}
      <section className="section before-after-section container">
        <div className="section-head" data-reveal-fade>
          <span className="eyebrow">Transformação</span>
          <h2 className="section-heading">O mesmo lugar, visto de outra forma</h2>
        </div>
        <div data-reveal-fade>
          <BeforeAfter
            before="https://images.unsplash.com/photo-1600585152915-8a5e0b3c8f2b?q=80&w=1800&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1800&auto=format&fit=crop"
            beforeAlt="Ambiente antes da intervenção do Atelier Lume"
            afterAlt="Mesmo ambiente após o projeto do Atelier Lume"
          />
        </div>
        <p className="before-after-section__text" data-reveal-fade>
          A transformação deste ambiente partiu de três decisões: reorganizar a circulação para liberar o centro do espaço, substituir a iluminação pontual por luz indireta e trocar acabamentos frios por materiais naturais — resultando em um ambiente mais silencioso e conectado ao restante da casa.
        </p>
      </section>

      {/* PROCESSO */}
      <section className="section process">
        <div className="container">
          <div className="section-head" data-reveal-fade>
            <span className="eyebrow">Processo</span>
            <h2 className="section-heading">Como conduzimos cada projeto</h2>
          </div>

          <div className="process__list">
            {processSteps.map((step) => (
              <div className="process__item" key={step.number}>
                <span className="process__number" data-process-number>{step.number}</span>
                <div className="process__body">
                  <h3 className="process__title">{step.title}</h3>
                  <p className="process__text">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE RESUMIDO */}
      <section className="section about-summary container">
        <div className="about-summary__image" data-reveal-fade>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop"
            alt="Mesa de trabalho do Atelier Lume com desenhos técnicos e materiais de referência"
            loading="lazy"
          />
        </div>
        <div className="about-summary__text" data-reveal-fade>
          <span className="eyebrow">O escritório</span>
          <p className="about-summary__lead">{siteConfig.aboutIntro}</p>
          <Link to="/sobre" className="btn-line">
            Conhecer o escritório <ArrowUpRight size={16} strokeWidth={1.4} />
          </Link>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="final-cta">
        <div className="container final-cta__inner" data-reveal-fade>
          <h2 className="final-cta__title">Todo espaço começa com uma conversa.</h2>
          <a
            className="btn-solid"
            href={buildWhatsappLink('Olá, Atelier Lume! Conheci o trabalho de vocês pelo site e gostaria de conversar sobre um projeto.')}
            target="_blank"
            rel="noreferrer"
          >
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
