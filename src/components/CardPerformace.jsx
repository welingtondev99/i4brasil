import "./cardPerformace.css"
import Bdcard from "../data/cardPerformace"

const CardPerformace = () => {

  return (
    Bdcard.map((i)=>{
       return (
        <div key={i.id} className="card">
          <img src={i.img} alt="" />
          <div className="textCardPerformace">
            <h4>{i.title}</h4>
            <span>{i.id}</span>
          </div>
          <p>{i.text}</p>
        </div>
       )
    })
  )
  
}

export default CardPerformace