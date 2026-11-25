import { Link } from 'react-router-dom'
import './linkRota.css'

// Só estas rotas estão liberadas por enquanto. As demais aparecem desativadas
// (mesmo visual, sem clique) até as páginas ficarem prontas.
// Para liberar uma página, adicione o caminho aqui.
const ROTAS_ATIVAS = ['/', '/contato']

const rotaAtiva = (to) => ROTAS_ATIVAS.includes(to)

const LinkRota = ({ to, className = '', children, ...resto }) => {
  if (rotaAtiva(to)) {
    return (
      <Link to={to} className={className} {...resto}>
        {children}
      </Link>
    )
  }

  return (
    <span className={`${className} linkDesativado`.trim()} aria-disabled="true" title="Em breve">
      {children}
    </span>
  )
}

export default LinkRota
