import { useMemo, useState } from 'react'
import { viewBox, escala, estados } from '../data/brazilMap'
import './presenceMap.css'

// Mapa do Brasil guiado por dados. Estados com atuação ficam em roxo e podem ser
// selecionados (mouse, toque ou teclado); os demais ficam em cinza.
const PresenceMap = ({ atuacoes }) => {
  const porUf = useMemo(() => new Map(atuacoes.map((a) => [a.uf, a])), [atuacoes])
  const [selecionada, setSelecionada] = useState(() => atuacoes.find((a) => a.setor)?.uf ?? atuacoes[0]?.uf)

  const atual = porUf.get(selecionada)
  const nomeDoEstado = (uf) => estados.find((e) => e.uf === uf)?.nome ?? uf

  const aoTeclar = (e, uf) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setSelecionada(uf)
    }
  }

  return (
    <div className="mapaPresenca">
      <svg
        className="mapaSvg"
        viewBox={viewBox}
        role="group"
        aria-label="Mapa do Brasil com os estados onde a i4 Brasil atua"
      >
        <g transform={`scale(${escala},${-escala})`}>
          {estados.map((e) => {
            const ativo = porUf.has(e.uf)
            const marcado = e.uf === selecionada
            if (!ativo) {
              return <path key={e.uf} d={e.d} className="uf" />
            }
            return (
              <path
                key={e.uf}
                d={e.d}
                className={`uf uf--ativa ${marcado ? 'uf--marcada' : ''}`}
                role="button"
                tabIndex={0}
                aria-pressed={marcado}
                aria-label={`${e.nome}: ver atuação`}
                onClick={() => setSelecionada(e.uf)}
                onMouseEnter={() => setSelecionada(e.uf)}
                onFocus={() => setSelecionada(e.uf)}
                onKeyDown={(ev) => aoTeclar(ev, e.uf)}
              />
            )
          })}
        </g>
        {estados.filter((e) => porUf.has(e.uf)).map((e) => (
          <circle
            key={e.uf}
            className={`pino ${e.uf === selecionada ? 'pino--marcado' : ''}`}
            cx={e.centro[0]}
            cy={e.centro[1]}
            r={0.55}
          />
        ))}
      </svg>

      {/* A caixa tem a altura do conteúdo. Fica abaixo do mapa, então mudar de
          tamanho nunca move o mapa que está sob o cursor. */}
      {atual && (
        <div key={atual.uf} className="mapaDetalhe" aria-live="polite">
          <h3>{nomeDoEstado(atual.uf)} ({atual.uf})</h3>
          {atual.setor && <p className="mapaSetor">{atual.setor}</p>}
          {atual.municipios.length > 0 && (
            <ul>
              {atual.municipios.map((m) => <li key={m}>{m}</li>)}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

export default PresenceMap
