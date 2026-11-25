import LinkRota from './LinkRota'
import './button.css'

const VARIANTS = {
  primary: 'btn btn--primary',
  inverso: 'btn btn--inverso',
  outline: 'btn btn--outline',
  secundary: 'styleButtonPages',
}

const SIZES = { sm: 'btn--sm', md: 'btn--md', lg: 'btn--lg' }

// size: 'sm' (40px) | 'md' (48px, padrão) | 'lg' (56px)
// to: rota interna · href: âncora ou link externo
const Button = ({ variant, size = 'md', text, fun, disabled, classe = '', to, href }) => {
  const base = VARIANTS[variant] ?? 'buttonEl'
  const className = `${base} ${SIZES[size] ?? ''} ${classe}`.trim()

  if (to) {
    return <LinkRota to={to} className={className}>{text}</LinkRota>
  }

  if (href) {
    return <a href={href} className={className}>{text}</a>
  }

  return (
    <button disabled={disabled} onClick={fun} className={className}>{text}</button>
  )
}

export default Button
