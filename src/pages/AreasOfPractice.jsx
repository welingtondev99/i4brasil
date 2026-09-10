import CardPerformace from "../components/CardPerformace"
import DefaultTop from "../components/DefaultTop"
import Footer from "../components/Footer"
import MainCardPerformace from "../components/MainCardPerformace"
import aeroporto from "../images/aeroporto.svg"

import './areasOfPractice.css'

const AreasOfPractice = () => {
  return (
    <>
        <section>
            <div className='containerPagesText'>
                <DefaultTop/>
                <div>
                    <h4>Conectamos desafios públicos às soluções que transformam</h4>
                    <p>Presença em diversas frentes da infraestrutura brasileira, com resultados concretos em mais de 20 áreas estratégicas.</p>
                </div>
                <hr />
                <div>
                    <p>A i4 Brasil atua na estruturação e modelagem de PPPs, concessões e projetos de infraestrutura, integrando aspectos técnicos, jurídicos, econômico-financeiros e institucionais — sempre com o compromisso de gerar impacto real na vida do cidadão.</p>
                    <p>No 10º UNECE International PPP Forum, o maior evento de parcerias público-privadas do mundo, a i4 Brasil foi responsável por 7 das 69 iniciativas selecionadas entre 180 inscritas — com o case Brusque Saneamento chancelado entre os 20 melhores projetos do planeta.</p>
                </div>
                <div>
                    <h4>CASES EM DESTAQUE</h4>
                    <hr />
                    <div className="organizeCard">
                        <MainCardPerformace/>
                        <MainCardPerformace/>
                        <MainCardPerformace/>
                    </div>
                </div>
                <div>
                    <CardPerformace img={aeroporto} name={'aeroporto'} index={'01'} text={'Concessão, expansão e modernização aeroportuária, da estruturação financeira à gestão regulatória.'}/>
                </div>
            </div>
        </section>
        <Footer/>
    
    </>
  )
}

export default AreasOfPractice