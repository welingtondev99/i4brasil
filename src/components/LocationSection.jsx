import { useState } from 'react'
import { localizacao } from '../data/site'
import TitleSection from './TitleSection'
import './sections.css'

const mapaUrl = (endereco) =>
  `https://www.google.com/maps?q=${encodeURIComponent(endereco)}&output=embed`

const rotaUrl = (endereco) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`

const LocationSection = () => {
  const [ativa, setAtiva] = useState(localizacao.unidades[0].id)
  const unidade = localizacao.unidades.find((u) => u.id === ativa)

  return (
    <section id="onde-nos-encontrar" className="section secaoLocal">
      <div className="container">
        <TitleSection title="Onde nos encontrar" />
        <p className="lead">{localizacao.intro}</p>

        <div className="localGrid">
          <div className="localLista" role="tablist" aria-label="Unidades da i4 Brasil">
            {localizacao.unidades.map((u) => (
              <button
                key={u.id}
                type="button"
                role="tab"
                id={`aba-${u.id}`}
                aria-selected={u.id === ativa}
                aria-controls="mapa-unidade"
                className={`unidade ${u.id === ativa ? 'unidade--ativa' : ''}`}
                onClick={() => setAtiva(u.id)}
              >
                <span className="unidadeCidade">{u.cidade}</span>
                <h4>{u.nome}</h4>
                <span className="unidadeTexto">{u.descricao}</span>
                <address>{u.endereco}</address>
              </button>
            ))}
          </div>

          <div id="mapa-unidade" role="tabpanel" aria-labelledby={`aba-${ativa}`} className="mapaMoldura">
            <iframe
              key={unidade.id}
              title={`Mapa: ${unidade.nome}, ${unidade.cidade}`}
              src={mapaUrl(unidade.endereco)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a className="btn btn--primary btn--sm mapaRota" href={rotaUrl(unidade.endereco)} target="_blank" rel="noopener noreferrer">
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
