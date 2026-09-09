import './button.css'

const Button = ({variant ,text}) => {
  let className = 'buttonEl'

  if (variant === 'primary'){
    className = 'buttonEl' 
  }
  else if (variant === 'secundary'){
    className= 'styleButtonPages'
  }

  return (
     <button className={className}>{text}</button>
  )
}

export default Button