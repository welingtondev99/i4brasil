import './button.css'

const Button = ({variant ,text, fun, disabled, classe}) => {
  let className = 'buttonEl'

  if (variant === 'primary'){
    className = 'buttonEl' 
  }
  else if (variant === 'secundary'){
    className= 'styleButtonPages'
  }

  return (
     <button disabled={disabled} onClick={fun} className={`${className} ${classe}`}>{text}</button>
  )
}

export default Button