import Logo from "../images/logo-i4-colorida.webp";
import { Link } from "react-router-dom";
import LinkRota from "./LinkRota";
import FooterIcon from "./FooterIcon";
import '../App.css'

import "./footer.css"

const redes = [
  { nome: "WhatsApp", icone: "whatsapp", href: "https://wa.me/5531996995369" },
  { nome: "Instagram", icone: "instagram", href: "https://www.instagram.com/i4.brasil/" },
  { nome: "LinkedIn", icone: "linkedin", href: "https://www.linkedin.com/company/i4-brasil-instituto-de-infraestrutura-intelig%C3%AAncia-e-inova%C3%A7%C3%A3o/posts/?feedView=all" },
]

const Footer = () => {
  return (
    <footer className="rodape">
      <div className="rodapeTopo">
        <div className="rodapeMarca">
          <img className="backgroundI4" src={Logo} alt="i4 Brasil" />
          <p className="paragraphFooter">Instituto de Infraestrutura, Inteligência e Inovação</p>
          <ul className="redes" aria-label="Redes sociais">
            {redes.map((r) => (
              <li key={r.nome}>
                <a href={r.href} target="_blank" rel="noopener noreferrer" aria-label={r.nome} title={r.nome}>
                  <FooterIcon nome={r.icone} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav className="rodapeColuna" aria-label="Navegação do rodapé">
          <h4>Navegação</h4>
          <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><LinkRota to={"/equipe"}>Equipe</LinkRota></li>
            <li><LinkRota to={"/sobre-nos"}>Sobre nós</LinkRota></li>
            <li><LinkRota to={"/areas-de-atuacao"}>Áreas de atuação</LinkRota></li>
          </ul>
        </nav>

        <div className="rodapeColuna rodapeContato">
          <h4>Contatos</h4>
          <ul>
            <li>
              <a href="https://wa.me/5531996995369" target="_blank" rel="noopener noreferrer">
                <FooterIcon nome="whatsapp" />
                <span>+55 (31) 99699-5369</span>
              </a>
            </li>
            <li>
              <a href="mailto:i4brasil@gmail.com">
                <FooterIcon nome="email" />
                <span>i4brasil@gmai.com</span>
              </a>
            </li>
            <li>
              <a href="https://www.google.com/maps/place/i4+Brasil+Instituto+de+Infraestrutura,+Intelig%C3%AAncia+e+Inova%C3%A7%C3%A3o/@-19.9819724,-43.9484261,1060m/data=!3m2!1e3!4b1!4m6!3m5!1s0xa697f359ef42df:0x69d036e26f0f9f50!8m2!3d-19.9819775!4d-43.9458512!16s%2Fg%2F11lmbfc5vk?entry=ttu&g_ep=EgoyMDI2MDkyMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                <FooterIcon nome="localizacao" />
                <span>Rua Matias Cardoso, 169 - 7º andar, Santo Agostinho, Belo Horizonte, MG</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="rodapeBase">
        <span className="paragraphFooter">© 2026 i4 BRASIL. Todos os direitos reservados.</span>
        <div className="rodapeLinks">
          <LinkRota to={"/termos-de-uso"}>Termos de condição</LinkRota>
          <LinkRota to={"/politica-de-privacidade"}>Política de privacidade</LinkRota>
          <a target="_blank" rel="noopener noreferrer" href="https://welingtondev99.github.io/Portifolio/">Desenvolvido por Welington F. Souza</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
