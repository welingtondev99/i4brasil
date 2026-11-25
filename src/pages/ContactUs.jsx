import "../components/contactUs.css"
import Button from "../components/Button"
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import FooterIcon from "../components/FooterIcon"
import Header from "../components/Header"
import Footer from "../components/Footer"
import TitleSection from "../components/TitleSection"
import "../components/button.css"
import { localizacao } from "../data/site"

// =====================================================================
// SEGURANÇA DO FORMULÁRIO
// - Nada do que a pessoa digita é guardado no navegador, em cookies ou em
//   ferramentas de análise. Os dados vão uma única vez, por HTTPS, para o
//   EmailJS, que entrega a mensagem no e-mail da i4.
// - Limites de tamanho, remoção de caracteres de controle e lista fechada
//   de assuntos evitam mensagens gigantes e injeção de cabeçalhos.
// - Anti-spam em camadas: campo isca (honeypot), tempo mínimo de
//   preenchimento, bloqueio de navegador automatizado e limite de 1 envio
//   por minuto (estes dois últimos feitos pelo próprio EmailJS).
// =====================================================================

const LIMITES = { nome: 100, email: 254, mensagem: 2000 }

const ASSUNTOS = [
  { valor: 'orcamento', rotulo: 'Orçamento' },
  { valor: 'parcerias', rotulo: 'Parcerias' },
  { valor: 'novos-projetos', rotulo: 'Novos projetos' },
  { valor: 'duvidas', rotulo: 'Dúvidas' },
  { valor: 'outro', rotulo: 'Outro' },
]

const TEMPO_MINIMO_MS = 4000 // pessoas levam mais que isso para preencher
const INTERVALO_ENVIO_MS = 60000 // 1 envio por minuto neste navegador

const EMAILJS = {
  servico: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  modelo: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  chavePublica: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
}

// Remove caracteres de controle. Em campos de uma linha, quebras de linha
// também saem (evita injeção de cabeçalho no e-mail).
// As regras abaixo procuram caracteres de controle de propósito.
/* eslint-disable no-control-regex */
const CONTROLE_LINHA_UNICA = /[\u0000-\u001F\u007F-\u009F\u2028\u2029]/g
const CONTROLE_TEXTO = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F-\u009F]/g
/* eslint-enable no-control-regex */

const limparLinha = (v, max) => v.replace(CONTROLE_LINHA_UNICA, ' ').replace(/\s+/g, ' ').trim().slice(0, max)
const limparTexto = (v, max) => v.replace(CONTROLE_TEXTO, '').replace(/\n{3,}/g, '\n\n').trim().slice(0, max)

const EMAIL_VALIDO = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[a-z]{2,}$/i

const VAZIO = { nome: '', email: '', assunto: '', mensagem: '', consentimento: false }

const ContactUs = () => {
  const [campos, setCampos] = useState(VAZIO)
  const [isca, setIsca] = useState('')
  const [enviando, setEnviando] = useState(false)
  const [feedback, setFeedback] = useState({ tipo: '', msg: '' })

  // Hora em que o formulário apareceu (definida depois da montagem)
  const abertoEm = useRef(0)
  useEffect(() => {
    abertoEm.current = Date.now()
  }, [])

  const alterar = (campo) => (e) => {
    const valor = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setCampos((c) => ({ ...c, [campo]: valor }))
  }

  const limparFormulario = () => {
    setCampos(VAZIO)
    setIsca('')
    abertoEm.current = Date.now()
  }

  // Robôs recebem a mesma resposta de sucesso, sem saber que foram barrados
  const fingirSucesso = () => {
    setFeedback({ tipo: 'sucesso', msg: 'Mensagem enviada com sucesso!' })
    limparFormulario()
  }

  async function enviar(e) {
    e.preventDefault()
    if (enviando) return

    if (isca.trim() !== '' || Date.now() - abertoEm.current < TEMPO_MINIMO_MS) {
      fingirSucesso()
      return
    }

    const nome = limparLinha(campos.nome, LIMITES.nome)
    const email = limparLinha(campos.email, LIMITES.email).toLowerCase()
    const mensagem = limparTexto(campos.mensagem, LIMITES.mensagem)
    const assunto = ASSUNTOS.find((a) => a.valor === campos.assunto)

    if (nome.length < 2 || !EMAIL_VALIDO.test(email) || !assunto || mensagem.length < 10) {
      setFeedback({ tipo: 'atencao', msg: 'Preencha nome, e-mail válido, assunto e uma mensagem de pelo menos 10 caracteres.' })
      return
    }

    if (!campos.consentimento) {
      setFeedback({ tipo: 'atencao', msg: 'Para enviar, confirme que concorda com o uso dos dados para responder a sua mensagem.' })
      return
    }

    if (!EMAILJS.servico || !EMAILJS.modelo || !EMAILJS.chavePublica) {
      setFeedback({ tipo: 'erro', msg: 'O formulário está indisponível no momento. Use o WhatsApp ou o e-mail ao lado.' })
      return
    }

    setEnviando(true)
    try {
      await emailjs.send(
        EMAILJS.servico,
        EMAILJS.modelo,
        // Só o necessário para responder: nada de IP, navegador ou localização
        { name: nome, email, assunto: assunto.rotulo, message: mensagem },
        {
          publicKey: EMAILJS.chavePublica,
          blockHeadless: true,
          limitRate: { id: 'i4-contato', throttle: INTERVALO_ENVIO_MS },
        },
      )
      setFeedback({ tipo: 'sucesso', msg: 'Mensagem enviada com sucesso! Responderemos pelo e-mail informado.' })
      limparFormulario()
    } catch (erro) {
      // Sem console.log: o erro pode conter os dados digitados
      const status = erro?.status
      if (status === 429) {
        setFeedback({ tipo: 'atencao', msg: 'Você acabou de enviar uma mensagem. Aguarde um minuto para enviar outra.' })
      } else if (status === 451) {
        fingirSucesso()
      } else {
        setFeedback({ tipo: 'erro', msg: 'Não foi possível enviar agora. Tente novamente mais tarde ou use o WhatsApp ao lado.' })
      }
    } finally {
      setEnviando(false)
    }
  }

  const restante = LIMITES.mensagem - campos.mensagem.length

  return (
    <>
    <Header />
    <main className='paginaInterna'>
    <section className='containerPages'>
        <TitleSection title='Fale conosco' />
        <div className='contatoLayout'>
        <div className='styleContactUs'>
            <form onSubmit={enviar} className="styleDados" noValidate>
                <label htmlFor="nome">Nome completo</label>
                <input
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    maxLength={LIMITES.nome}
                    required
                    value={campos.nome}
                    onChange={alterar('nome')}
                />

                <label htmlFor="email">E-mail</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    maxLength={LIMITES.email}
                    required
                    value={campos.email}
                    onChange={alterar('email')}
                />

                <label htmlFor="assunto">Assunto</label>
                <select
                    id="assunto"
                    name="assunto"
                    required
                    value={campos.assunto}
                    onChange={alterar('assunto')}
                >
                    <option value="" disabled>Selecione...</option>
                    {ASSUNTOS.map((a) => (
                        <option key={a.valor} value={a.valor}>{a.rotulo}</option>
                    ))}
                </select>

                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                    id="mensagem"
                    name="mensagem"
                    maxLength={LIMITES.mensagem}
                    required
                    aria-describedby="mensagem-limite"
                    value={campos.mensagem}
                    onChange={alterar('mensagem')}
                />
                <span id="mensagem-limite" className="contadorMensagem">
                    {restante} caracteres restantes
                </span>

                {/* Campo isca: invisível para pessoas, preenchido por robôs */}
                <div className="visually-hidden" aria-hidden="true">
                    <label htmlFor="site">Site</label>
                    <input
                        id="site"
                        name="site"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={isca}
                        onChange={(e) => setIsca(e.target.value)}
                    />
                </div>

                <label className="consentimento" htmlFor="consentimento">
                    <input
                        id="consentimento"
                        name="consentimento"
                        type="checkbox"
                        required
                        checked={campos.consentimento}
                        onChange={alterar('consentimento')}
                    />
                    <span>
                        Concordo que meu nome, e-mail e mensagem sejam usados apenas para a i4 Brasil
                        responder a este contato.
                    </span>
                </label>

                <p className="avisoPrivacidade">
                    Seus dados são enviados por conexão criptografada (HTTPS) pelo serviço EmailJS
                    direto para o e-mail da i4 Brasil. Este formulário não guarda o que você digita,
                    não usa cookies e não compartilha seus dados para marketing.
                </p>

                <p
                    role="status"
                    aria-live="polite"
                    className={`feedback ${feedback.tipo === "erro" ? 'red' : feedback.tipo === "atencao" ? 'orange' : 'green'}`}
                >
                    {feedback.msg}
                </p>

                <Button
                    variant='inverso'
                    size='lg'
                    disabled={enviando}
                    text={enviando ? 'Enviando...' : 'Enviar'}
                />
            </form>
        </div>

        <aside className='contatoInfo' aria-label='Informações de contato'>
            <h3>Fale com a equipe</h3>
            <p className='contatoIntro'>Prefere falar direto? Estes são os canais e as unidades da i4 Brasil.</p>

            <ul className='contatoCanais'>
                <li>
                    <a href='https://wa.me/5531996995369' target='_blank' rel='noopener noreferrer'>
                        <FooterIcon nome='whatsapp' />
                        <span>+55 (31) 99699-5369</span>
                    </a>
                </li>
                <li>
                    <a href='mailto:i4brasil@gmail.com'>
                        <FooterIcon nome='email' />
                        <span>i4brasil@gmail.com</span>
                    </a>
                </li>
            </ul>

            <div className='contatoUnidades'>
                {localizacao.unidades.map((u) => (
                    <div key={u.id} className='contatoUnidade'>
                        <span className='contatoCidade'>{u.cidade}</span>
                        <h4>{u.nome}</h4>
                        <address>
                            <FooterIcon nome='localizacao' />
                            <span>{u.endereco}</span>
                        </address>
                    </div>
                ))}
            </div>
        </aside>
        </div>
    </section>
    </main>
    <Footer />
    </>
  )
}

export default ContactUs
