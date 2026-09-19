import { useState } from 'react'
import bdInsights from '../data/insights'
import img from '../images/openClose.svg'
import "./cardInsights.css"


const CardInsights = () => {
  const [state, setState] = useState(null)
  const open = (id)=>{
    console.log(id)
    setState(state === id ? null : id) 
  }
  
  return (
    
    bdInsights.map((item)=>{
      const newState = state === item.id
      return(
            <div key={item.id} onClick={() => open(item.id)} className='styleInsights'>
              <div className='styleEl'>
                <h3>{item.question}</h3>
                <img src={img} alt="" className={newState ? 'imgDDD' : '90deg'} />
              </div>
                <p className='text' style={{ display: newState ? 'block' : 'none' }}>{item.text}</p>
              </div>

        )
    })
  )
}

export default CardInsights