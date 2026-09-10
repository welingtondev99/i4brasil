import "./cardPerformace.css"
import Bdcard from "../data/cardPerformace"

const CardPerformace = () => {

  return (
    Bdcard.map((i)=>{
       return (
        <div key={i.id} className="card">
          <img src={i.img} alt="" />
          <h4>{i.title}</h4>
          <span>{i.id}</span>
          <p>{i.text}</p>
        </div>
       )
    })
  )
  
}

export default CardPerformace