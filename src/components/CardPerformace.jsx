import "./cardPerformace.css"

const CardPerformace = ({img ,name, index,text}) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <span>{index}</span>
      <p>{text}</p>
    </div>
  )
}

export default CardPerformace