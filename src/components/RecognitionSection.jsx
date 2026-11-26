import { reconhecimento as r } from '../data/site'
import TitleSection from './TitleSection'
import './sections.css'

// Os números formam um funil (180 → 69 → 7): a barra de cada linha é proporcional ao maior valor
const maior = Math.max(...r.numeros.map((n) => parseInt(n.valor, 10)))
const largura = (valor) => Math.max(4, Math.round((parseInt(valor, 10) / maior) * 100))

const RecognitionSection = () => {
  return (
    <section id="reconhecimento" className="section secaoReconhecimento">
      <div className="container reconhecimento">
        <div>
          <TitleSection title="Reconhecimento internacional" />
          <h3>{r.titulo}</h3>
          <p>{r.texto}</p>
          <p className="reconhecimentoDestaque">{r.destaque}</p>
        </div>

        <ul className="reconhecimentoNumeros">
          {r.numeros.map((n, i) => (
            <li key={n.rotulo} className={i === r.numeros.length - 1 ? 'reconhecimentoFinal' : ''}>
              <div className="reconhecimentoLinha">
                <strong>{n.valor}</strong>
                <span>{n.rotulo}</span>
              </div>
              <div className="reconhecimentoBarra" aria-hidden="true">
                <i style={{ width: `${largura(n.valor)}%` }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RecognitionSection
