import { useState } from 'react'
import bdInsights from '../data/insights'
import seta from '../images/chevron-up.svg'
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
                <img src={seta} alt="" className={newState ? 'imgDDD' : ''}/>
              </div>
                <p className='text' style={{ display: newState ? 'block' : 'none' }}>{item.text}</p>
              </div>

        )
    })
  )
}

export default CardInsights