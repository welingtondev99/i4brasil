import  Logo  from "../images/logoi4brasil.svg";
import whatsapp from "../images/whatsapp.svg"
import instagram from "../images/instagram.svg"
import linkedin from "../images/linkedin.svg"
import ponteira from "../images/ponteira.svg"
import email from "../images/email.svg"
import { Link } from "react-router-dom";
import '../App.css'

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
                        <li><Link to={"/"}>Home</Link></li>
                        <li><Link to={"/equipe"}>Equipe</Link></li>
                        <li><Link to={"/sobre-nos"}>Sobre nós</Link></li>
                        <li><Link to={"/areas-de-atuacao"}>Áreas de atuação</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Contatos</h4>
                    <ul>
                        <li>
                            <a aria-label="Fale conosco no WhatsApp" target="_blank" rel="noopener noreferrer" href="https://wa.me.5531996995369" className="align">
                                <img src={whatsapp} alt="ícone do whatsapp" />
                                <span className="paragraphFooter">+ 55 (31) 99699-5369</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:i4brasil@gmail.com" className="align">
                                <img src={email} alt="ícone do email" />
                                <span>i4brasil@gmai.com</span>
                            </a>
                        </li>
                        <li>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/i4+Brasil+Instituto+de+Infraestrutura,+Intelig%C3%AAncia+e+Inova%C3%A7%C3%A3o/@-19.9819724,-43.9484261,1060m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa697f359ef42df:0x69d036e26f0f9f50!8m2!3d-19.9819775!4d-43.9458512!16s%2Fg%2F11lmbfc5vk?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D" className="align">
                                <img src={ponteira} alt="ícone de localização" />
                                <span>Rua Matias Cardoso, 169 - 7º andar, Santo Agostinho Belo Horizonte, Brasil 30170-050</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="socialEndTerms">
                    <div className="social">
                        <a target="_blank" rel="noopener noreferrer" href="https://wa.me"><img src={whatsapp} alt="ícone do whatsapp" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/i4.brasil/"><img src={instagram} alt="ícone do instagram" /></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/i4-brasil-instituto-de-infraestrutura-intelig%C3%AAncia-e-inova%C3%A7%C3%A3o/posts/?feedView=all"><img src={linkedin} alt="ícone do linkedin" /></a>
                    </div>
                    <Link to={"/termos-de-uso"}>Termos de condição</Link>
                    <Link to={"/politica-de-privacidade"}>Política de privacidade</Link>
                </div>
            </div>
        </div>
        <hr />
        <div className="footerFinal mb-6 m-auto">
                <span className="paragraphFooter">© 2026 i4 BRASIL. Todos os direitos reservados.</span>
                <a target="_blank" rel="noopener noreferrer" href="https://welingtondev99.github.io/Portifolio/" className="paragraphFooter font-epilogue">2026 Desenvolvido por Welington F. Souza.</a>
        </div>
    </footer>
  )
}

export default Footer