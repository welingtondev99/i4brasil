import CardExecutive from "../components/CardExecutive"
import DefaultTop from "../components/DefaultTop"
import Footer from "../components/Footer"
import luis from '../images/luis.avif'
import mirelle from '../images/Mirelle.avif'
import felipe from '../images/felipe.avif'
import gabriel from '../images/gabriel.avif'
import CardTeam from "../components/CardTeam"

const Team = () => {
  return (
    <section>
        <div className="containerPagesText">
            <DefaultTop/>
            <div>
                <h2 className="title">As pessoas por trás de cada projeto da i4.</h2>
                <p>A excelência institucional da i4 Brasil é fundamentada na integração de uma equipe multidisciplinar de alto impacto. Unimos especialistas em Direito Público, Compliance, Engenharia e Gestão Governamental para oferecer soluções robustas que conciliam inovação técnica e rigorosa segurança jurídica.</p>
                <p>Nossa atuação é guiada pela modernização da infraestrutura e pelo desenvolvimento de Cidades Inteligentes (Smart Cities), aplicando metodologias como o Legal Design para tornar a governança e a transparência institucionais acessíveis e eficientes — com expertise consolidada no Marco Regulatório das Organizações da Sociedade Civil.</p>
                <div>
                    <h4>DIRETORIA EXECUTIVA</h4>
                    <p>Um corpo multidisciplinar de alta senioridade na vanguarda da modernização administrativa — integrando segurança jurídica, conformidade regulatória e as mais modernas metodologias globais de gestão e transformação digital.</p>
                    <div className="styleCardExecutive">
                        <CardExecutive 
                            img={luis}
                            position={'Presidente'}
                            name={'Luís Fernando Parma | '}
                            text={'Especialista internacionalmentel certificado em Parcerias Público-Privadas, lidera a modelagem técnica de projetos de infraestrutura e Smart Cities, focando na viabilidade econômica e na escalabilidade de soluções inteligentes para a gestão pública.'}
                        />
                        <CardExecutive 
                            img={mirelle}
                            position={'Vice-Presidente'}
                            name={'Mirelle Brant | '}
                            text={'Especialista internacionalmentel certificado em Parcerias Público-Privadas, lidera a modelagem técnica de projetos de infraestrutura e Smart Cities, focando na viabilidade econômica e na escalabilidade de soluções inteligentes para a gestão pública.'}
                        />
                        <CardExecutive 
                            img={felipe}
                            position={'Diretor Adm-Financeiro'}
                            name={'Felipe Pontes | '}
                            text={'Responsável pela integridade financeira e eficiência operacional do instituto, garantindo a sustentabilidade dos projetos através de um planejamento rigoroso e de uma prestação de contas pautada pela transparência total.'}
                        />
                        <CardExecutive 
                            img={gabriel}
                            position={'Diretor'}
                            name={'Gabriel Gualberto | '}
                            text={'Conduz a visão institucional da i4 Brasil, mediando relações entre o setor público, privado e organismos internacionais para a implementação de agendas de inovação e desenvolvimento urbano.'}
                        />
                    </div>
                    <div>
                        <hr />
                        <h4>COLABORADORES</h4>
                        <p>Além de nossa estrutura central, articulamos uma rede estratégica de consultores e técnicos especializados distribuída por todo o território nacional. Essa capilaridade nos permite atuar com a agilidade, a precisão e o conhecimento local que a gestão pública contemporânea exige.</p>
                        <hr />
                        <div className="cardTeam">
                            <CardTeam/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </section>
  )
}

export default Team