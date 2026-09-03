import { Link } from 'react-router-dom'
import type { Project } from '../../data/projects'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
  index: number
  size?: 'large' | 'medium' | 'small'
}

export default function ProjectCard({ project, index, size = 'medium' }: ProjectCardProps) {
  return (
    <Link to={`/projetos/${project.slug}`} className={`project-card project-card--${size}`}>
      <div className="project-card__frame">
        <img
          src={project.cardImage}
          alt={project.cardImageAlt}
          loading="lazy"
          className="project-card__image"
        />
      </div>
      <div className="project-card__info">
        <span className="project-card__number">{String(index).padStart(2, '0')}</span>
        <div className="project-card__text">
          <h3 className="project-card__name">{project.name}</h3>
          <p className="project-card__meta">
            {project.category} — {project.city} — {project.year}
          </p>
        </div>
      </div>
    </Link>
  )
}
