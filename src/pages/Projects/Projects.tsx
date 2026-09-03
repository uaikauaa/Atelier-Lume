import { useMemo, useState } from 'react'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects, type ProjectCategory } from '../../data/projects'
import './Projects.css'

const filters: Array<{ label: string; value: ProjectCategory | 'Todos' }> = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Residencial', value: 'Residencial' },
  { label: 'Interiores', value: 'Interiores' },
  { label: 'Comercial', value: 'Comercial' },
]

export default function Projects() {
  const [active, setActive] = useState<ProjectCategory | 'Todos'>('Todos')

  const filtered = useMemo(
    () => (active === 'Todos' ? projects : projects.filter((p) => p.category === active)),
    [active]
  )

  return (
    <div className="projects-page">
      <header className="projects-hero container">
        <span className="eyebrow">Portfólio</span>
        <h1 className="projects-hero__title">Projetos</h1>
        <p className="projects-hero__lead">
          Residências, interiores e espaços comerciais desenvolvidos como respostas específicas ao lugar, ao programa e às pessoas envolvidas em cada projeto.
        </p>
      </header>

      <div className="container projects-filters" role="group" aria-label="Filtrar projetos por categoria">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`projects-filters__btn ${active === f.value ? 'is-active' : ''}`}
            onClick={() => setActive(f.value)}
            aria-pressed={active === f.value}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="container projects-grid">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.slug}
            project={project}
            index={i + 1}
            size={i % 3 === 0 ? 'large' : 'medium'}
          />
        ))}
      </div>
    </div>
  )
}
