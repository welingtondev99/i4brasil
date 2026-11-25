import { useCallback, useEffect, useRef, useState } from 'react'
import traco from '../images/logo-i4-traco.webp'
import tracoMobile from '../images/logo-i4-traco-mobile.webp'
import cheia from '../images/logo-i4-intro-cheia.webp'
import { publico } from '../utils/publico'
import './introLoader.css'

// Abertura do site com a logo. Dois estilos:
//  - 'traco': o contorno da logo é revelado em linha fina, a logo se preenche de branco e a
//    cortina sobe (feito em código, leve e nítido em qualquer tela);
//  - 'video': animação da equipe de obra montando a logo (public/video/abertura-logo.mp4).
const TIPO = 'traco'

// Quando aparece:
//  - desenvolvimento: a cada carregamento/recarga da página, para poder revisar;
//  - produção: uma vez por sessão do navegador (MOSTRAR_SEMPRE = true muda isso).
// Navegar para outra página do site e voltar à home não repete.
// Pulada com movimento reduzido, se o vídeo não carregar ou se o navegador bloquear o play.
const MOSTRAR_SEMPRE = import.meta.env.DEV
const CHAVE = 'i4-intro-vista'

const DURACAO_TRACO = 3900 // ms até a cortina começar a subir (estilo 'traco')
const VIDEO = publico('video/abertura-logo.mp4')
const POSTER = publico('video/abertura-logo.jpg')
const FIM_ANTECIPADO = 0.5 // estilo 'video': a cortina começa meio segundo antes do fim
const TEMPO_PARA_COMECAR = 6000 // estilo 'video': se não começar em 6 s, segue sem a abertura
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
    if (reduzido || jaMostrada) return 'fim'
    if (!MOSTRAR_SEMPRE && vistaNaSessao()) return 'fim'
    return 'entrando'
  })
  const videoRef = useRef(null)

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
    html.style.overflow = 'hidden'
    return () => { html.style.overflow = anterior }
  }, [fase])

  // tempos da abertura
  useEffect(() => {
    if (fase !== 'entrando') return

    const trava = setTimeout(() => { motivo('limite de segurança'); sair() }, LIMITE_SEGURANCA)
    const timers = [trava]

    if (TIPO === 'traco') {
      timers.push(setTimeout(sair, DURACAO_TRACO))
    } else {
      // Rede lenta ou travada: se o vídeo nem começou a tocar, pula.
      timers.push(setTimeout(() => {
        if (videoRef.current && videoRef.current.currentTime === 0) {
          motivo('vídeo não começou a tempo')
          setFase('fim')
        }
      }, TEMPO_PARA_COMECAR))
    }

    // O navegador pausa o vídeo em aba oculta; ao voltar para a aba, retoma de onde parou.
    const aoVoltar = () => {
      const v = videoRef.current
      if (document.visibilityState === 'visible' && v && v.paused && !v.ended) {
        v.play().catch(() => {})
      }
    }
    document.addEventListener('visibilitychange', aoVoltar)

    return () => {
      timers.forEach(clearTimeout)
      document.removeEventListener('visibilitychange', aoVoltar)
    }
  }, [fase, sair])

  // cortina sobe e some depois da transição
  useEffect(() => {
    if (fase !== 'saindo') return
    const t = setTimeout(() => setFase('fim'), 800)
    return () => clearTimeout(t)
  }, [fase])

  if (fase === 'fim') return null

  // Só manda o vídeo tocar quando está pronto (chamar antes cancela o play com AbortError).
  const aoFicarPronto = (e) => {
    const p = e.currentTarget.play()
    if (p?.catch) {
      p.catch((erro) => {
        if (erro?.name === 'AbortError') return
        motivo('play() recusado', erro?.name)
        setFase('fim')
      })
    }
  }

  const aoAtualizar = (e) => {
    const v = e.currentTarget
    if (v.duration && v.currentTime >= v.duration - FIM_ANTECIPADO) {
      motivo('vídeo chegou ao fim', v.currentTime.toFixed(2))
      sair()
    }
  }

  return (
    <div className={`intro intro--${fase}`} role="region" aria-label="Abertura da i4 Brasil">
      {TIPO === 'traco' ? (
        <div className="introMarca" aria-hidden="true">
          <picture>
            <source media="(max-width: 640px)" srcSet={tracoMobile} />
            <img className="introTraco" src={traco} alt="" />
          </picture>
          <img className="introCheia" src={cheia} alt="" />
        </div>
      ) : (
        <video
          ref={videoRef}
          className="introVideo"
          src={VIDEO}
          poster={POSTER}
          muted
          playsInline
          preload="auto"
          autoPlay
          aria-hidden="true"
          onCanPlay={aoFicarPronto}
          onTimeUpdate={aoAtualizar}
          onEnded={sair}
          onError={(e) => { motivo('erro no vídeo', e.currentTarget.error?.message); setFase('fim') }}
        />
      )}
      <button type="button" className="introPular" onClick={sair} autoFocus>
        Pular abertura
      </button>
    </div>
  )
}

export default IntroLoader
