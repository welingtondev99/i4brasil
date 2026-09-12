import React from 'react'
import team from '../data/teams'

const CardTeam = () => {
  return (
    team.map((i, index)=>{
        return (
            <div key={index} className='TeamOverviewCard'>
                <img src={i.img} alt="" />
                <span>{i.position}</span>
                <h4>{i.name}</h4>
            </div>
        )
    })
  )
}

export default CardTeam