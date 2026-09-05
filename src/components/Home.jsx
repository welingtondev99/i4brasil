import Header from './Header'
import Button from './Button'
import './home.css'


const Home = () => {
   return (
    <div className=' container'> 
      <h1>
        Instituto de Infraestrutura, Inteligência e Inovação —
        <span className='spani4'> i4 Brasil</span>
      </h1>
      <h2>
        Expertise técnica para transformar projetos públicos em resultados.
      </h2>
      <h3>
        Estruturamos PPPs, concessões e projetos de infraestrutura integrando as dimensões técnica, jurídica, econômico-financeira e institucional.
      </h3>
      <div className='button'>
        <Button text={"FALAR COM A I4 ->"}/>
        <Button text={"VER ÁREAS DE ATUAÇÃO"}/>
      </div>
    </div>
  )

}

export default Home