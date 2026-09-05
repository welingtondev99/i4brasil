import './header.css'
import  Logo  from "../images/logoi4brasil.svg";

const Header = () => {
  return (
    <div className='navegation'>
        <img className='desingButContLogo' src={Logo} alt="" />
        <div className='navegation-center'>
            <a href="#">INÍCIO</a>
            <a href="#">INSTITUCIONAL</a>
            <a href="#">PROJETOS</a>
        </div>
        <a className='desingButContLogo' href="#">CONTATO</a>
    </div>
  )
}

export default Header