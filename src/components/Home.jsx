import Button from './Button'
import './home.css'
import '../App.css'

const Home = () => {
  return (
    <div className='container heroHome'>
      <h1>
        Infraestrutura, inteligência e inovação para
        <span className='spani4'> transformar cidades.</span>
      </h1>
      <p className='heroLead'>
        Estruturamos PPPs, concessões e projetos de infraestrutura integrando as
        dimensões técnica, jurídica, econômico-financeira e institucional.
      </p>
      <div className='button'>
        <Button variant='primary' text='Quem somos' to='/equipe' />
        <Button variant='outline' text='Entre em contato' to='/contato' />
      </div>
    </div>
  )
}

export default Home
