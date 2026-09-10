import img1 from "../images/Faixa-de-pedestres.avif"

const MainCardPerformace = () => {
  return (
    <div className="caseMasterCard">
        <div className="nameCard">
            <span>SANEAMENTO PPP</span>
            <span>BRUSQUE-SC</span>
        </div>
        <img src={img1} alt="" />
        <h3>Brusque Saneamento</h3>
        <p>Estruturação e modelagem do projeto de saneamento de Brusque, chancelado entre os 20 melhores projetos do mundo no 10º UNECE International PPP Forum, em Barcelona — dentre 180 iniciativas globais inscritas.</p>
        <hr />
        <a href="">Clique e saiba mais</a>
    </div>
  )
}

export default MainCardPerformace