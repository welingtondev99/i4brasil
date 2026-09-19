import CardInsights from "../components/CardInsights"
import seta from "../images/arrow-up-right.svg"

const Insights = () => {
  return (
    <section className="containerPages">
        <h2 className="title">Insights</h2>
        <p>Antes de tomar uma decisão, entenda o que está por trás dela.</p>
        <p>Perguntas simples podem esconder questões importantes sobre infraestrutura, concessões e projetos públicos.</p>
        <CardInsights/>
        <a className="linkStyle" href="">Ver todos os insigts <img src={seta} alt="" /></a>
        <hr />
    </section>
  )
}

export default Insights