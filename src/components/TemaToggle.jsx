import { useState } from 'react'
import './temaToggle.css'
import { TEMA_CLIENTE, lerTema, aplicarTema, salvarTema } from '../utils/tema'

// Botão que liga/desliga o padrão visual do guia da cliente:
// títulos em Bebas Neue, texto em Lato e cores primária/secundária dela.
// Desligado, o site usa o padrão atual. Só guarda a preferência de tema, nada pessoal.
const TemaToggle = () => {
  const [ligado, setLigado] = useState(() => lerTema() === TEMA_CLIENTE)

  const alternar = () => {
    const proximo = ligado ? '' : TEMA_CLIENTE
    aplicarTema(proximo)
    salvarTema(proximo)
    setLigado(!ligado)
  }

  return (
    <button
      type="button"
      className={`temaToggle ${ligado ? 'temaToggle--ligado' : ''}`}
      aria-pressed={ligado}
      onClick={alternar}
      title="Alterna entre o padrão visual da cliente (Bebas Neue, Lato e cores do guia) e o padrão atual"
    >
      <span className="temaToggleBola" aria-hidden="true" />
      <span>Padrão da cliente: {ligado ? 'ligado' : 'desligado'}</span>
    </button>
  )
}

export default TemaToggle
