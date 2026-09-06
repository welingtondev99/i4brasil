import mapa from '../images/brasil.svg'
import arrowDonw from "../assets/ArrowArcRight.svg" 
import TitleSection from './TitleSection'
import Paragraph from './Paragraph'
import '../App.css'
import "./nacionalPresence.css"

const NationalPresence = () => {
  return (
    <section className='container national'>
        <div>
            <TitleSection title={"Quem confia na i4 Brasil"}/>
            <div>

            </div>
        </div>

        <div className='org'>
            <div>
                <TitleSection title={"Nossa presença nacional"}/>
                <Paragraph texts={"Projetos que transformam cidades e impulsionam o futuro"}/>
                <Paragraph texts={"Atuamos em todo o território nacional, com projetos em setores estratégicos como cidades inteligentes, segurança pública, saneamento e eficiência energética — sempre com soluções integradas de tecnologia e gestão adaptadas ao desafio local."}/>
                <Paragraph texts={"Alguns dos estados em que já atuamos"}/>
                <img className='arrowDonw' src={arrowDonw} alt="" />
                <div>

                </div>
            </div>
            <div>
                <img src={mapa} alt="" />
            </div>
        </div>
    </section>
  )
}

export default NationalPresence