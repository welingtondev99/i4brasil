import { useCallback, useEffect, useState } from 'react'
import traco from '../images/logo-i4-traco.webp'
import tracoMobile from '../images/logo-i4-traco-mobile.webp'
import cheia from '../images/logo-i4-intro-cheia.webp'
import fotoCidade from '../images/hero-municipio.avif'
import fotoCidadeMobile from '../images/hero-municipio-mobile.webp'
import { lerAbertura } from '../utils/abertura'
import './introLoader.css'

// Abertura do site com a logo. Dois estilos:
//  - 'cidade': a foto da cidade aparece dentro das letras da logo, que depois sobe e some,
//    revelando o site (feito em código, usa a mesma foto do hero);
//  - 'traco': o contorno da logo é revelado em linha fina, a logo se preenche de branco e a
//    cortina sobe (feito em código, leve e nítido em qualquer tela).
// A escolha vem do botão "Abertura" (utils/abertura.js); o padrão é 'cidade'.
const TIPO = lerAbertura()

// Quando aparece:
//  - desenvolvimento: a cada carregamento/recarga da página, para poder revisar;
//  - produção: uma vez por sessão do navegador (MOSTRAR_SEMPRE = true muda isso).
// Navegar para outra página do site e voltar à home não repete.
// Pulada com movimento reduzido ou quando a escolha é "sem abertura".
const MOSTRAR_SEMPRE = import.meta.env.DEV
const CHAVE = 'i4-intro-vista'

// Planta técnica que se desenha atrás da logo: malha, rotas (adutora, rodovia, ferrovia) e nós.
const GRADE_X = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100]
const GRADE_Y = [100, 200, 300, 400, 500, 600]
// as rotas chegam ao anel em volta da logo, sem cruzar as letras
const ROTAS = [
  { pontos: '0,520 220,520 300,430 340,350', atraso: 0.3 },
  { pontos: '1200,160 960,160 880,250 860,350', atraso: 0.5 },
  { pontos: '120,0 120,70 600,70 600,90', atraso: 0.7 },
  { pontos: '1080,700 1080,640 600,640 600,610', atraso: 0.9 },
]
const NOS = [[300, 430], [340, 350], [880, 250], [860, 350], [120, 70], [600, 90], [1080, 640], [600, 610]]

const DURACAO_TRACO = 2600 // ms até a saída começar
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
    const fim = setTimeout(sair, DURACAO_TRACO)
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
        <svg className="introPlanta" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <g className="introGrade">
            {GRADE_X.map((x, i) => (
              <line key={`x${x}`} x1={x} y1="0" x2={x} y2="700" pathLength="1" style={{ '--d': `${i * 0.05}s` }} />
            ))}
            {GRADE_Y.map((y, i) => (
              <line key={`y${y}`} x1="0" y1={y} x2="1200" y2={y} pathLength="1" style={{ '--d': `${i * 0.07}s` }} />
            ))}
          </g>
          <circle className="introAnel" cx="600" cy="350" r="260" pathLength="1" />
          {ROTAS.map((r, i) => (
            <polyline key={i} className="introRota" points={r.pontos} pathLength="1" style={{ '--d': `${r.atraso}s` }} />
          ))}
          {NOS.map(([x, y], i) => (
            <circle key={i} className="introNo" cx={x} cy={y} r="5" style={{ '--d': `${0.9 + i * 0.12}s` }} />
          ))}
        </svg>
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
