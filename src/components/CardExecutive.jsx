import './cardExecutive.css'


const CardExecutive = ({img, position, name, text}) => {
  return (
    <div className='cardExecutive'>
        <img src={img} alt="" />
        <h3>{position}</h3>
        <h4>{name}</h4>
        <p>{text}</p>
    </div>
  )
}

export default CardExecutive