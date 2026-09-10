import DefaultTop from '../components/DefaultTop'
import Footer from '../components/Footer'
import "../components/titleSection.css"
import "./privacyPolicy.css"


const PrivacyPolicy = () => {
  return (
    <>
        <section className="containerPages">
            <DefaultTop/>
            <div className='StylePrivacyPolicy containerPagesText'>
                <h3 className='lgpd'>LGPD</h3>
                <h2 className='title'>Política de Privacidade.</h2>
                <p >Esta política descreve como o i4 Brasil trata os dados pessoais enviados por meio do formulário de contato deste site, em conformidade com a Lei nº 13.709/2018 (LGPD).</p>
                <hr />
                <h4 >1. Quem é o controlador dos dados</h4>
                <p className="paragrafhTerms">O i4 Brasil — Instituto de Infraestrutura, Inteligência e Inovação é o controlador dos dados pessoais coletados neste site. Contato do encarregado: contato@i4brasil.org.</p>
                <h4>2. Quais dados coletamos</h4>
                <p className="paragrafhTerms">Coletamos apenas os dados que você informa voluntariamente no formulário de contato: nome, e-mail, telefone (opcional), organização e a mensagem enviada. Não coletamos dados sensíveis.</p>
                <h4>3. Para que usamos os dados</h4>
                <p className="paragrafhTerms">Os dados são usados exclusivamente para responder à sua solicitação, dar seguimento a um eventual contato institucional e manter registro do atendimento. Não vendemos nem comercializamos dados pessoais.</p>
                <h4>4. Base legal</h4>
                <p className="paragrafhTerms">O tratamento se dá com base no consentimento do titular e no legítimo interesse para atendimento de solicitações, nos termos do art. 7º da Lei nº 13.709/2018 (LGPD).</p>
                <h4>5. Compartilhamento</h4>
                <p className="paragrafhTerms">Os dados podem ser processados por prestadores de serviço de tecnologia (hospedagem e e-mail) estritamente para viabilizar o funcionamento do site, sempre sob obrigação de confidencialidade.</p>
                <h4>6. Retenção</h4>
                <p className="paragrafhTerms">Mantemos os dados pelo tempo necessário ao atendimento da solicitação e ao cumprimento de obrigações legais. Após esse prazo, os dados são eliminados.</p>
                <h4>7. Seus direitos</h4>
                <p className="paragrafhTerms">Você pode solicitar a qualquer momento confirmação de tratamento, acesso, correção, anonimização, portabilidade, revogação do consentimento e eliminação dos seus dados, escrevendo para contato@i4brasil.org.</p>
                <h4>8. Segurança</h4>
                <p className="paragrafhTerms">Adotamos medidas técnicas e administrativas razoáveis para proteger os dados contra acesso não autorizado, perda ou divulgação indevida.</p>
                <hr />
                <p>Dúvidas sobre esta política? Escreva para <a href="">contato@i4brasil.org.</a></p>
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default PrivacyPolicy