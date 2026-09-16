import "./cardPerformace.css"
import Bdcard from "../data/cardPerformace"

const CardPerformace = () => {

  return (
    Bdcard.map((item, i)=>{
       return (
        <div key={item.id} className="card">
          <img src={item.img} alt="" />
          <div className="textCardPerformace">
            <h3>{item.title}</h3>
            <span>{i+1}</span>
          </div>
          <p>{item.text}</p>
         {console.log(Bdcard.indexOf(item))}
        </div>
       )
    })
  )
  
}

export default CardPerformace