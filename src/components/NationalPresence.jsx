import TitleSection from './TitleSection'
import Paragraph from './Paragraph'
import PresenceMap from './PresenceMap'
import PartnersCarousel from './PartnersCarousel'
import marcas from '../data/partners'
import usePresenca from '../data/usePresenca'
import { icones } from '../data/states'
import { estados } from '../data/brazilMap'
import '../App.css'
import './nacionalPresence.css'
import './partners.css'

const nomeDoEstado = (uf) => estados.find((e) => e.uf === uf)?.nome ?? uf

const NationalPresence = () => {
  const { atuacoes, estatisticas } = usePresenca()
  const destaques = atuacoes.filter((a) => a.setor)

  return (
    <>
      <section className="section secaoParceiros">
        <div className="container">
          <TitleSection title="Quem confia na i4 Brasil" />
          <PartnersCarousel marcas={marcas} />
        </div>
      </section>

      <section id="presenca" className="section secaoPresenca">
        <div className="container presenca">
          <div className="presencaTexto">
            <TitleSection title="Nossa presença nacional" />
            <p className="lead">Projetos que transformam cidades e impulsionam o futuro.</p>

            <Paragraph texts="Atuamos em todo o território nacional, com projetos em setores estratégicos como cidades inteligentes, segurança pública, saneamento e eficiência energética, sempre com soluções integradas de tecnologia e gestão adaptadas ao desafio local." />

            <ul className="presencaNumeros" aria-label="Presença em números">
              <li>
                <strong>+{estatisticas.estados}</strong>
                <span>Estados</span>
              </li>
              <li>
                <strong>+{estatisticas.projetos}</strong>
                <span>Projetos</span>
              </li>
            </ul>

            {destaques.length > 0 && (
              <div className="presencaDestaques">
                <h3>Alguns dos estados em que já atuamos</h3>
                <ul className="destaquesLista">
                  {destaques.map((a) => (
                    <li key={a.uf}>
                      <img src={icones[a.icone] ?? icones.concessoes} alt="" />
                      <div>
                        <strong>{nomeDoEstado(a.uf)} ({a.uf})</strong>
                        <span>{a.setor}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <PresenceMap atuacoes={atuacoes} />
        </div>
      </section>
    </>
  )
}

export default NationalPresence
