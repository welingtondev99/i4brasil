import bdInsights from '../data/insights'
import img from '../images/openClose.svg'

const CardInsights = () => {
  return (
    bdInsights.map((item)=>{
        return(
            <div>
                <h3>{item.question}</h3>
                <p>{item.text}</p>
                <img src={img} alt="" />
            </div>
        )
    })
  )
}

export default CardInsights