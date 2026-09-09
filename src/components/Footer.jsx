import  Logo  from "../images/logoi4brasil.svg";
import whatsapp from "../images/whatsapp.svg"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import ponteira from "../images/ponteira.svg"
import email from "../images/email.svg"

import "./footer.css"

const Footer = () => {
  return (
    <footer>
        <div className="limitFooter">
            <div className="styleFooter ">
                <div>
                    <img className="backgroundI4" src={Logo} alt="" />
                    <p className="paragraphFooter">Instituto de Infraestrutura, Inteligência e Inovação </p>
                </div>
                <div>
                    <h4>Navegação</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Equipe</a></li>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Áreas de atuação</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Contatos</h4>
                    <ul>
                        <li>
                            <a href="" className="align">
                                <img src={whatsapp} alt="" />
                                <span className="paragraphFooter">+ 55 (31) 99699-5369</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="align">
                                <img src={email} alt="" />
                                <span>i4brasil@gmai.com</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="align">
                                <img src={ponteira} alt="" />
                                <span>Rua Matias Cardoso, 169 - 7º andar, Santo Agostinho Belo Horizonte, Brasil 30170-050</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="socialEndTerms">
                    <div className="social">
                        <a href=""><img src={whatsapp} alt="" /></a>
                        <a href=""><img src={instagram} alt="" /></a>
                        <a href=""><img src={linkedin} alt="" /></a>
                    </div>
                    <a href="">Termos de condição</a>
                    <a href="">Política de privacidade</a>
                </div>
            </div>
        </div>
        <hr />
        <div className="footerFinal">
                <p className="paragraphFooter">© 2026 i4 BRASIL. Todos os direitos reservados.</p>
                <span className="paragraphFooter">2026 Desenvolvido por Welington F. Souza.</span>
        </div>
    </footer>
  )
}

export default Footer