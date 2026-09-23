import "../components/contactUs.css"
import Button from "../components/Button"
import { useState } from "react"
import emailjs from "@emailjs/browser"
import _default from "@emailjs/browser"
import { useRef } from "react"


const ContactUs = ()=>{
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [assunto, setAssunto] = useState('')
    const [text, setText] = useState('')

    const [enviando, setEnviando] = useState(false)

    const [feedback, setFeedback] = useState({ tipo: '', msg: '' })

    const [honeypot, setHoneypot] = useState ('')

    const timing2 =  useRef(Date.now())
    const human = 4000

    
    function sendEmail(e){
        e.preventDefault()
        
        if(honeypot.trim() !== "" ){
            setFeedback({tipo: 'sucesso', msg: 'Email enviado com sucesso!'})
            setNome('')
            setEmail('')
            setText('')
            setAssunto('')
            setHoneypot('')
            return
        }
        const timing = Date.now()
        
        // console.log(timing-timing2.current)
        if(timing-timing2.current < human){
            setFeedback({tipo: 'sucesso', msg: 'Email enviado com sucesso!'})
            return
        }

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())

        
        if (nome.trim() === '' || !emailRegex || text.trim() === '' || assunto.trim() === ''){
            // alert("Preencha todos os campos!")
            setFeedback({tipo: 'atencao', msg: 'Preencha todos os campos!'})
            // console.log('não enviado')
            return
        }

        const templeteFarms ={
            name: nome,
            email: email,
            assunto: assunto,
            message:text
        }
        setEnviando(true)
        
        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
            templeteFarms,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((response)=>{
            // console.log('enviado', response.status, response.text)
            // alert("Email enviado com sucesso!")
            setFeedback({tipo: 'sucesso', msg: 'Email enviado com sucesso!'})
            setNome('')
            setEmail('')
            setText('')
            setAssunto('')    
        })
        .catch((error) => {
            console.error("Erro ao enviar:", error);
            // alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.")
            setFeedback({tipo: 'erro', msg: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.'})
        }).finally(()=>{setEnviando(false)})
        

        
    }
    
    
  return (
    <section className='containerPages'>
        <h2 className='title'>Fale conosco</h2>
        <div className='styleContactUs'>
            <form onSubmit={sendEmail} className="styleDados">
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
                    className="bg-white"
                    id="options" 
                    value={assunto} 
                    onChange={(e)=>setAssunto(e.target.value)}>
                        <option value="" disabled>Selecione...</option>
                        <option value="orcamento">Orçamento</option>
                        <option value="parcerias">Parcerias</option>
                        <option value="novos-projetos">Novos Projetos</option>
                        <option value="duvidas">Dúvidas</option>
                        <option value="outro">Outro</option>
                </select>
                <label htmlFor="mensagem" >Mensagem</label>
                <textarea 
                    id="mensagem" 
                    value={text} 
                    onChange={(e)=>setText(e.target.value)} 
                    type="text" 
                    name="msg" 
                    className="bg-white"
                    />
                    
                <p className={`feedback ${feedback.tipo === "erro" ? 'red' : feedback.tipo === "atencao" ? 'orange' : 'green'}`}>{feedback.msg}</p>

                <input 
                    id="01" 
                    name="01"
                    className="visually-hidden" 
                    tabIndex={'-1'} 
                    autoComplete={'off'} 
                    value={honeypot} 
                    onChange={(e)=>setHoneypot(e.target.value)} 
                    type="text"
                    aria-hidden="true"
                    >
                </input>
                 
                <Button
                    classe={"bg-indigo-50 hover:bg-purple-100 hover:text-purple-500 duration-100 ease-in"}
                    disabled={enviando}
                    text={enviando ? "Enviando...": 'Enviar'}
                />
            </form>
        </div>
    </section>
  )
}

export default ContactUs