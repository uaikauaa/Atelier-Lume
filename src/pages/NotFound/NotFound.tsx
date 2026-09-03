import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found container">
      <span className="eyebrow">Erro 404</span>
      <h1 className="not-found__title">Esta página não foi encontrada.</h1>
      <p className="not-found__text">
        O endereço acessado não existe ou foi movido. Volte para a página inicial ou explore os projetos do escritório.
      </p>
      <div className="not-found__actions">
        <Link to="/" className="btn-solid">Voltar ao início</Link>
        <Link to="/projetos" className="btn-line">
          Ver projetos <ArrowUpRight size={16} strokeWidth={1.4} />
        </Link>
      </div>
    </div>
  )
}
