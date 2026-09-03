import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig } from '../../data/siteConfig'
import './About.css'

const specialties = [
  { title: 'Residências', text: 'Casas unifamiliares desenhadas a partir do terreno, da orientação solar e da rotina de quem vai morar nelas.' },
  { title: 'Interiores', text: 'Projetos de marcenaria, iluminação e ambientação para reformas e apartamentos novos.' },
  { title: 'Espaços comerciais', text: 'Escritórios, lojas e espaços expositivos pensados para receber pessoas e sustentar uma operação real.' },
]

const values = [
  { title: 'Contexto antes de forma', text: 'Nenhum projeto começa por uma imagem pronta. Começa pelo lugar, pelo clima e pelas pessoas envolvidas.' },
  { title: 'Materiais honestos', text: 'Preferimos materiais que envelhecem bem e revelam sua origem, em vez de acabamentos que simulam outra coisa.' },
  { title: 'Permanência', text: 'Um projeto bem resolvido deve continuar fazendo sentido daqui a vinte anos, não apenas no dia da entrega.' },
]

export default function About() {
  return (
    <div className="about-page">
      <header className="about-hero container">
        <span className="eyebrow">O escritório</span>
        <h1 className="about-hero__title">Sobre o Atelier Lume</h1>
      </header>

      <section className="container about-history">
        <div className="about-history__image">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop"
            alt="Ambiente de trabalho do Atelier Lume, com maquetes e desenhos técnicos sobre a mesa"
            loading="lazy"
          />
        </div>
        <div className="about-history__text">
          <p className="about-history__lead">{siteConfig.aboutIntro}</p>
          <p>{siteConfig.positioning}</p>
          <p className="about-history__note">
            [Espaço reservado para a história completa do escritório — ano de fundação, trajetória e contexto de criação do Atelier Lume.]
          </p>
        </div>
      </section>

      <section className="section about-manifesto container">
        <span className="eyebrow">Manifesto</span>
        <p className="about-manifesto__text">{siteConfig.manifesto}</p>
      </section>

      <section className="section about-philosophy container">
        <div className="section-head">
          <span className="eyebrow">Filosofia de trabalho</span>
          <h2 className="section-heading">O que guia cada decisão de projeto</h2>
        </div>
        <div className="about-values">
          {values.map((v) => (
            <div className="about-values__item" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-specialties container">
        <div className="section-head">
          <span className="eyebrow">Especialidades</span>
          <h2 className="section-heading">Frentes de atuação do escritório</h2>
        </div>
        <div className="about-specialties__list">
          {specialties.map((s, i) => (
            <div className="about-specialties__item" key={s.title}>
              <span className="about-specialties__number">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section about-process container">
        <div className="section-head">
          <span className="eyebrow">Processo criativo</span>
          <h2 className="section-heading">Da escuta inicial à obra concluída</h2>
        </div>
        <p className="about-process__text">
          Cada projeto do Atelier Lume atravessa etapas de escuta, definição de conceito, desenvolvimento técnico e acompanhamento de obra. Esse percurso é ajustado conforme a escala e a complexidade de cada encomenda, mas a atenção ao contexto e aos materiais permanece constante do primeiro esboço à entrega das chaves.
        </p>
        <Link to="/contato" className="btn-line">
          Iniciar uma conversa <ArrowUpRight size={16} strokeWidth={1.4} />
        </Link>
      </section>
    </div>
  )
}
