
import DefaultTop from "../components/DefaultTop";
import '../components/button.css'
import '../App.css'
import "../components/paragraph.css"
import "../components/titleSection.css"



const TermsOfUse = () => {
  return (
    <section id="termsOfUse" className="containerPages">
       <DefaultTop/>
       <div className="containerPagesText">
        <h2 className="title">Termos de uso</h2>
        <p>Seja bem-vindo ao site institucional do i4 Brasil. Ao navegar e utilizar este site, o usuário concorda integralmente em cumprir e respeitar os seguintes termos e condições de uso, os quais regem a relação entre o instituto e seus visitantes no ambiente digital.</p>
        <hr />
        <h4>1. Natureza Informativa</h4>
        <p className="paragrafhTerms">Todo o conteúdo disponibilizado neste site possui caráter estritamente informativo, técnico e educacional sobre o mercado de infraestrutura, concessões e Parcerias Público-Privadas (PPPs). As informações e análises veiculadas não constituem parecer técnico definitivo, recomendação de investimento ou consultoria jurídica formal.</p>
        <h4>2. Propriedade Intelectual</h4>
        <p className="paragrafhTerms">Os textos, relatórios, análises técnicas, marcas, logotipos, elementos gráficos, identidade visual, layouts e códigos presentes neste portal são de propriedade exclusiva do i4 Brasil ou de seus respectivos licenciantes. É expressamente proibida a reprodução, cópia, modificação ou distribuição parcial ou total do conteúdo para fins comerciais sem autorização prévia por escrito da instituição.</p>
        <h4>3. Uso Adequado do Formulário de Contato</h4>
        <p className="paragrafhTerms">O usuário compromete-se a utilizar a aba e o formulário de contato de forma estritamente lícita e profissional. É terminantemente proibido o uso dos campos de texto para o envio de mensagens automáticas em massa (spam), códigos maliciosos, vírus, links de phishing, conteúdos ofensivos ou quaisquer dados que violem a legislação vigente ou direitos de terceiros.</p>
        <h4>4. Links de Terceiros e Órgãos Públicos</h4>
        <p className="paragrafhTerms">Para conveniência do usuário, este portal pode conter links que direcionam para sites externos, tais como editais de licitação, diários oficiais ou portais de prefeituras municipais. O i4 Brasil declara que não possui controle sobre tais páginas e, portanto, não se responsabiliza pelo conteúdo, precisão, atualizações, estabilidade técnica ou políticas de privacidade operadas por esses terceiros.</p>
        <h4>5. Limitação de Responsabilidade</h4>
        <p className="paragrafhTerms">O i4 Brasil empenha seus melhores esforços para manter todas as informações do portal atualizadas e corretas. Contudo, a instituição não se responsabiliza por eventuais perdas, prejuízos ou danos (diretos ou indiretos) decorrentes de decisões comerciais ou jurídicas tomadas por usuários com base em dados antigos, publicações históricas ou alterações repentinas na legislação de PPPs informadas no portal.</p>
        <h4>6. Alterações nos Termos de Uso</h4>
        <p className="paragrafhTerms">Estes Termos de Uso podem ser modificados unilateralmente a qualquer momento pelo i4 Brasil, com o objetivo de adequação a novas exigências legais, atualizações de segurança ou melhorias nas diretrizes do site. A navegação contínua pelo portal após eventuais modificações implicará na aceitação automática da nova versão vigente.</p>
        <h4>7. Foro Aplicável e Legislação</h4>
        <p className="paragrafhTerms">Estes termos são interpretados e regidos em conformidade com as leis da República Federativa do Brasil. Fica eleito o foro da sede do instituto para dirimir quaisquer dúvidas, controvérsias ou litígios decorrentes da utilização deste site institucional.</p>
       </div>
    </section>
  )
}

export default TermsOfUse