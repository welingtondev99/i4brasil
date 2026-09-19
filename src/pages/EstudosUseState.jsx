import { useState } from 'react'

export const EstudosUseState = () => {
  const [name, setName] = useState('')

  const newName = (e)=>{
    setName(e.target.value)
    console.log(e.target.value)
  }

  return(
    <div className='container'>
      <p>Seja muito bem-vindo(a): {name}</p>
      <input value={name}  type="text" placeholder='Digite seu nome' onChange={(e)=>newName(e)}/>
    </div>
  )
}
