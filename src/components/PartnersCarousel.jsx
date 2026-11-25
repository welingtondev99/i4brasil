import { useState } from 'react'
import './partners.css'

// Carrossel contínuo de logos. Duas cópias da trilha rolam lado a lado para o loop não ter
// salto. Só a primeira cópia é lida por leitores de tela. Pausa com o mouse, com o foco
// ou pelo botão; com movimento reduzido fica parado e quebra em linhas.
const PartnersCarousel = ({ marcas }) => {
  const [pausado, setPausado] = useState(false)

  const grupo = (oculto) => (
    <ul className="carrosselGrupo" aria-hidden={oculto || undefined}>
      {[...marcas, ...marcas].map((imagem, i) => {
        const repetida = oculto || i >= marcas.length
        return (
          <li key={i} aria-hidden={repetida || undefined}>
            <img
              className="default"
              src={imagem}
              alt={repetida ? '' : 'Logo de município parceiro'}
              draggable="false"
            />
          </li>
        )
      })}
    </ul>
  )

  return (
    <div className={`carrossel ${pausado ? 'carrossel--pausado' : ''}`}>
      <div className="carrosselJanela">
        <div className="carrosselTrilha">
          {grupo(false)}
          {grupo(true)}
        </div>
      </div>
      <button
        type="button"
        className="carrosselPausa"
        aria-pressed={pausado}
        onClick={() => setPausado((v) => !v)}
      >
        {pausado ? 'Retomar logos' : 'Pausar logos'}
      </button>
    </div>
  )
}

export default PartnersCarousel
