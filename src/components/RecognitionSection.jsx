import { reconhecimento as r } from '../data/site'
import TitleSection from './TitleSection'
import './sections.css'

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
          {r.numeros.map((n) => (
            <li key={n.rotulo}>
              <strong>{n.valor}</strong>
              <span>{n.rotulo}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default RecognitionSection
