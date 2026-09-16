import AreasOfOperationCard from "../components/AreasOfOperationCard"
import DataCard from "../components/DataCard"
import img1 from "../images/BuildingOffice.svg"
import img2 from "../images/ProjectorScreenChart.svg"
import img3 from "../images/ListChecks.svg"
import seta from "../images/arrow-up-right.svg"

const AreasOfActivity = () => {
  return (
    <section className="containerPages">
        <DataCard/>
        <h2 className="title">Frentes de atuação</h2>
        <p>Três frentes integradas que cobrem todo o ciclo de um projeto público — da concepção à fiscalização do contrato.</p>
        <p>oferecendo soluções especializadas para os desafios mais complexos da infraestrutura, concessões e desenvolvimento urbano no Brasil.</p>
        <p>Além desses pilares, atuamos em mais de 20 setores — de saneamento e mobilidade a saúde, educação, gestão de resíduos e muito mais.</p>
        <div>
            <div className="styleCardAreasOfOperation">
                <AreasOfOperationCard img={img1} title={"Assessoria Técnica e Institucional"} text={"Estudos de viabilidade, planos diretores e governança para a administração pública."}/>
                <AreasOfOperationCard img={img2} title={"Estruturação de Projetos"} text={"Modelagem completa de PPPs e concessões — técnica, financeira e jurídica — até a licitação."}/>
                <AreasOfOperationCard img={img3} title={"Verificação independente"} text={"Fiscalização imparcial de contratos em execução: indicadores, metas e obrigações aferidos com método."}/>       
            </div>
        </div>
        <a className="linkStyle" href="">Ver todos os setores <img src={seta} alt="" /></a>
        <hr />
    </section>
  )
}

export default AreasOfActivity