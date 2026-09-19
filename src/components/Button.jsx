import './button.css'

const Button = ({variant ,text, fun}) => {
  let className = 'buttonEl'

  if (variant === 'primary'){
    className = 'buttonEl' 
  }
  else if (variant === 'secundary'){
    className= 'styleButtonPages'
  }


  return (
     <button onClick={fun} className={className}>{text}</button>
  )
}

export default Button