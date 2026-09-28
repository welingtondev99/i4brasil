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
            <div key={item.id} onClick={() => open(item.id)} className='rounded-lg bg-white p-3 pt-0px mb-6 shadow-lg shadow-cyan-500/50'>
              <div className='styleEl'>
                <h3>{item.question}</h3>
                <img src={seta} alt="" className={`duration-200 ease-linear select-none ${newState ? 'rotate-180' : ''}`}/>
              </div>
              <div className='duration-500 ease-linear select-none'>
                <p className='!w-full p-2  !mb-0' style={{display: newState ? 'block' : 'none'}}>{item.text}</p>
              </div>
            </div>

        )
    })
  )
}

export default CardInsights