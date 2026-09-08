import mapa from '../images/brasil.svg'
import arrowDonw from "../assets/ArrowArcRight.svg" 
import TitleSection from './TitleSection'
import Paragraph from './Paragraph'
import CardPresenceNational from './CardPresenceNational'
import imgCard from "../assets/eficiencia-energetica.svg"
import marcas from '../data/partners'
import '../App.css'
import './cardPresenceNational.css'
import './partners.css'



// const [logo, setLogo] = useState('')

const NationalPresence = () => {
  return (
    <section className='container national'>
        <div>
            <TitleSection title={"Quem confia na i4 Brasil"}/>
            <div>
                <div className='designPartnes'>
                   {marcas.map((imagem, index)=>(
                        <img className='default' key={index} src={imagem} width={'150px'} alt="logo do municipio" />
                   ))}
                </div>
            </div>
        </div>

        <div className='org'>
            <TitleSection title={"Nossa presença nacional"}/>
            <div>
                <Paragraph texts={"Projetos que transformam cidades e impulsionam o futuro"}/>
                <Paragraph texts={"Atuamos em todo o território nacional, com projetos em setores estratégicos como cidades inteligentes, segurança pública, saneamento e eficiência energética — sempre com soluções integradas de tecnologia e gestão adaptadas ao desafio local."}/>
                <Paragraph texts={"Alguns dos estados em que já atuamos"}/>
                <img className='arrowDonw' src={arrowDonw} alt="" />
                <div className='alingCardNational'>
                    <CardPresenceNational image={imgCard} title={"Roraima (RR)"} text={"Eficiência energêtica e PPPs municipais"}/>
                    <CardPresenceNational image={imgCard} title={"Roraima (RR)"} text={"Eficiência energêtica e PPPs municipais"}/>
                    <CardPresenceNational image={imgCard} title={"Roraima (RR)"} text={"Eficiência energêtica e PPPs municipais"}/>
                    <CardPresenceNational image={imgCard} title={"Roraima (RR)"} text={"Eficiência energêtica e PPPs municipais"}/>
                    <CardPresenceNational image={imgCard} title={"Roraima (RR)"} text={"Eficiência energêtica e PPPs municipais"}/>
                </div>
            </div>
            <div className='desingDivImageMap'>
                <img className='imageMap' src={mapa} alt="" />
            </div>
        </div>
    </section>
  )
}

export default NationalPresence