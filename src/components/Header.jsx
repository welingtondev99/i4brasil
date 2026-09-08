import './header.css'
import '../App.css'
import  Logo  from "../images/logoi4brasil.svg";
//import {menu} from "../assets/menu.svg"
import MenuIcon from "./MenuIcon" 

const Header = () => {
  return (
    <header className='navegation'>
        <img className='desingButContLogo' src={Logo} alt="Logo i4 Brasil" />
        <nav className='navegation-center'>
            <a href="#">INÍCIO</a>
            <a href="#">INSTITUCIONAL</a>
            <a href="#">PROJETOS</a>
        </nav>
        <nav className='toogleButton'>
            <MenuIcon className='desingToogleButton'/>
        </nav>
        <a className='desingButContLogo' href="#">CONTATO</a>
    </header>
  )
}

export default Header