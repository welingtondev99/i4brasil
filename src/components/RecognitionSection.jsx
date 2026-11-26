import { reconhecimento as r } from '../data/site'
import TitleSection from './TitleSection'
import medalha from '../images/icones/reconhecimento.webp'
import './sections.css'

// Números do fórum: [0] iniciativas inscritas, [1] selecionadas, [2] eram da i4.
// A ideia é mostrar prestígio: dos 69 projetos escolhidos no mundo, 7 eram da i4 (cada ponto é um projeto).
const [inscritas, selecionadas, nossas] = r.numeros
const totalSelecionadas = parseInt(selecionadas.valor, 10)
const totalNossas = parseInt(nossas.valor, 10)

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

        <div className="reconhecimentoPainel">
          <img className="reconhecimentoMedalha" src={medalha} alt="" />
          <p className="reconhecimentoChamada">
            <strong>{nossas.valor}</strong>
            <span>
              dos <b>{selecionadas.valor}</b> projetos escolhidos no mundo eram da i4 Brasil
            </span>
          </p>

          <ul
            className="reconhecimentoPontos"
            role="img"
            aria-label={`${nossas.valor} de ${selecionadas.valor} projetos selecionados eram da i4 Brasil`}
          >
            {Array.from({ length: totalSelecionadas }, (_, i) => (
              <li key={i} className={i < totalNossas ? 'reconhecimentoPonto--i4' : ''} />
            ))}
          </ul>

          <p className="reconhecimentoLegenda">
            <span><i className="legendaI4" /> Projetos da i4 Brasil</span>
            <span><i /> Demais selecionados</span>
          </p>
          <p className="reconhecimentoNota">
            {selecionadas.valor} selecionados entre {inscritas.valor} {inscritas.rotulo}.
          </p>
        </div>
      </div>
    </section>
  )
}

export default RecognitionSection
