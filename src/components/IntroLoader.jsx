import { useCallback, useEffect, useState } from 'react'
import traco from '../images/logo-i4-traco.webp'
import tracoMobile from '../images/logo-i4-traco-mobile.webp'
import cheia from '../images/logo-i4-intro-cheia.webp'
import fotoCidade from '../images/hero-municipio.avif'
import fotoCidadeMobile from '../images/hero-municipio-mobile.webp'
import { lerAbertura } from '../utils/abertura'
import IntroPlanta from './IntroPlanta'
import './introLoader.css'

// Abertura do site com a logo. Três estilos:
//  - 'cidade': a foto da cidade aparece dentro das letras da logo, que depois sobe e some,
//    revelando o site (feito em código, usa a mesma foto do hero);
//  - 'traco': o contorno da logo é revelado em linha fina, a logo se preenche de branco e a
//    cortina sobe (feito em código, leve e nítido em qualquer tela);
//  - 'planta': o mesmo traço, com uma planta técnica (malha, rotas e nós) se desenhando atrás.
// A escolha vem do botão "Abertura" (utils/abertura.js); o padrão é 'cidade'.
const TIPO = lerAbertura()

// Quando aparece:
//  - desenvolvimento: a cada carregamento/recarga da página, para poder revisar;
//  - produção: uma vez por sessão do navegador (MOSTRAR_SEMPRE = true muda isso).
// Navegar para outra página do site e voltar à home não repete.
// Pulada com movimento reduzido ou quando a escolha é "sem abertura".
const MOSTRAR_SEMPRE = import.meta.env.DEV
const CHAVE = 'i4-intro-vista'

// ms até a saída começar (a abertura da cidade é mais curta que as de traço)
const DURACAO = { cidade: 2600, traco: 3900, planta: 3900 }
const LIMITE_SEGURANCA = 12000 // nunca prende o visitante mais que isso

let jaMostrada = false

// em desenvolvimento, explica no console por que a abertura terminou
const motivo = (texto, detalhe) => {
  if (import.meta.env.DEV) console.debug(`[abertura] ${texto}`, detalhe ?? '')
}

const vistaNaSessao = () => {
  try { return sessionStorage.getItem(CHAVE) === '1' } catch { return false }
}

const IntroLoader = () => {
  const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [fase, setFase] = useState(() => {
    if (reduzido || jaMostrada || TIPO === 'nenhuma') return 'fim'
    if (!MOSTRAR_SEMPRE && vistaNaSessao()) return 'fim'
    return 'entrando'
  })

  const sair = useCallback(() => {
    setFase((f) => (f === 'entrando' ? 'saindo' : f))
  }, [])

  // marca como vista e trava a rolagem enquanto a abertura cobre a tela
  useEffect(() => {
    if (fase === 'fim') return
    jaMostrada = true
    try { sessionStorage.setItem(CHAVE, '1') } catch { /* sem armazenamento */ }
    const html = document.documentElement
    const anterior = html.style.overflow
    window.scrollTo(0, 0) // a abertura sempre começa no topo (o navegador restaura a rolagem ao recarregar)
    // o espaço da barra continua reservado por scrollbar-gutter (index.css), então o layout não pula
    html.style.overflow = 'hidden'
    return () => { html.style.overflow = anterior }
  }, [fase])

  // tempos da abertura
  useEffect(() => {
    if (fase !== 'entrando') return

    const trava = setTimeout(() => { motivo('limite de segurança'); sair() }, LIMITE_SEGURANCA)
    const fim = setTimeout(sair, DURACAO[TIPO] ?? 3900)
    return () => { clearTimeout(trava); clearTimeout(fim) }
  }, [fase, sair])

  // cortina sobe e some depois da transição
  useEffect(() => {
    if (fase !== 'saindo') return
    const t = setTimeout(() => setFase('fim'), 900)
    return () => clearTimeout(t)
  }, [fase])

  if (fase === 'fim') return null

  return (
    <div className={`intro intro--${fase} intro--${TIPO}`} role="region" aria-label="Abertura da i4 Brasil">
      {TIPO === 'cidade' ? (
        <div
          className="introCidade"
          aria-hidden="true"
          style={{ '--foto': `url(${fotoCidade})`, '--foto-mobile': `url(${fotoCidadeMobile})`, '--logo': `url(${cheia})` }}
        >
          <div className="introCidadeTraco" />
          <div className="introCidadeFoto" />
        </div>
      ) : (
        <>
        {TIPO === 'planta' && <IntroPlanta />}
        <div className="introMarca" aria-hidden="true">
          <picture>
            <source media="(max-width: 640px)" srcSet={tracoMobile} />
            <img className="introTraco" src={traco} alt="" />
          </picture>
          <img className="introCheia" src={cheia} alt="" />
        </div>
        </>
      )}
      <button type="button" className="introPular" onClick={sair}>
        Pular abertura
      </button>
    </div>
  )
}

export default IntroLoader
