import Button from "../components/Button";
import  Logo  from "../images/logoi4brasil.svg";
import './defaultTop.css'

const DefaultTop = () => {
  return (
     <div className="styleDefaultTop">
        <img src={Logo} alt="Logo i4 Brasil" />
        <Button variant={'secundary'} text={'Voltar a Home'}/>
    </div>
  )
}

export default DefaultTop