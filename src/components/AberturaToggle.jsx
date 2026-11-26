import { useState } from 'react'
import './temaToggle.css'
import { ABERTURAS, lerAbertura, salvarAbertura } from '../utils/abertura'

// Botão para escolher qual abertura do site aparece (cidade, traço, vídeo ou nenhuma).
// A cada clique troca para a próxima e recarrega, para a abertura rodar de novo.
const AberturaToggle = () => {
  const [atual] = useState(lerAbertura)
  const nome = ABERTURAS.find((a) => a.id === atual)?.nome

  const trocar = () => {
    const indice = ABERTURAS.findIndex((a) => a.id === atual)
    salvarAbertura(ABERTURAS[(indice + 1) % ABERTURAS.length].id)
    try { sessionStorage.removeItem('i4-intro-vista') } catch { /* sem armazenamento */ }
    window.location.reload()
  }

  return (
    <button
      type="button"
      className="temaToggle aberturaToggle"
      onClick={trocar}
      title="Troca a abertura do site e recarrega a página para você ver"
    >
      <span>Abertura: {nome}</span>
    </button>
  )
}

export default AberturaToggle
