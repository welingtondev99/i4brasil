import "../components/contactUs.css"
import Button from "../components/Button"
import { useState } from "react"
import emailjs from "@emailjs/browser"


const ContactUs = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [text, setText] = useState('')

    console.log(assunto)
    function sendEmail(e){
        e.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

        if (nome.trim() === '' || !emailRegex || text.trim() === '' || assunto.trim() === ''){
            alert("Preencha todos os campos!")
            console.log('não enviado')
            return
        }

        const templeteFarms ={
            name: nome,
            email: email,
            assunto: assunto,
            message:text
        }

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            templeteFarms, 
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((response)=>{
            console.log('enviado'), response.status, response.text
            alert("Email enviado com sucesso!")
            setNome('')
            setEmail('')
            setText('')
            setAssunto('')
        })
        .catch((error) => {
        console.error("Erro ao enviar:", error);
        alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.");
    });
    }


  return (
    <section className='containerPages'>
        <h2 className='title'>Fale conosco</h2>
        <div className='styleContactUs'>
            <form className="styleDados">
                <label htmlFor="nome">Nome completo</label>
                <input 
                    value={nome} 
                    id="nome" 
                    name="nome" 
                    type="text"  
                    onChange={(e)=>setNome(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input 
                    value={email} 
                    id="email" 
                    type="email" 
                    name="e-mail" 
                    onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="options">Assunto: </label>
                <select 
                    id="options" 
                    value={assunto} 
                    onChange={(e)=>setAssunto(e.target.value)}>
                        <option value="" disabled>Selecione...</option>
                        <option value="orcamento">Orçamento</option>
                        <option value="duvidas">Dúvidas</option>
                        <option value="outro">Outro</option>
                </select>
                <label htmlFor="mensagem" >Mensagem</label>
                <textarea 
                    id="mensagem" 
                    value={text} 
                    onChange={(e)=>setText(e.target.value)} 
                    type="text" 
                    name="msg" />

                <Button fun={sendEmail}  text={"Enviar"}/>
            </form>
        </div>
    </section>
  )
}

export default ContactUs