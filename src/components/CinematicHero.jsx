import { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { cinema, momentos } from '../data/cinema'
import poster from '../images/hero-municipio.webp'
import './cinematicHero.css'

const clamp = (v) => Math.min(1, Math.max(0, v))

const CinematicHero = () => {
  const cineRef = useRef(null)
  const canvasRef = useRef(null)
  const [estatico] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    const cine = cineRef.current
    if (!cine || estatico) return

    const stage = cine.querySelector('.cineStage')
    const itens = [...cine.querySelectorAll('.momento')]
    const total = cinema.total
    const canvas = canvasRef.current
    const ctx = total && canvas ? canvas.getContext('2d') : null

    const celular = window.matchMedia('(max-width: 760px)').matches
    const padrao = celular ? cinema.mobile : cinema.desktop
    const src = (i) => padrao.replace('{n}', String(i + 1).padStart(4, '0'))
    const quadros = new Array(total)

    let alvo = 0
    let atual = 0
    let desenhado = -1
    let visivel = true
    let raf = 0

    const pronto = (i) => quadros[i] && quadros[i].complete && quadros[i].naturalWidth
    const maisProximo = (i) => {
      for (let d = 0; d < total; d++) {
        if (pronto(i - d)) return i - d
        if (pronto(i + d)) return i + d
      }
      return -1
    }

    const desenhar = (i, forcar) => {
      if (!ctx) return
      const j = maisProximo(i)
      if (j < 0 || (j === desenhado && !forcar)) return
      const img = quadros[j]
      const cw = canvas.width
      const ch = canvas.height
      const escala = Math.max(cw / img.naturalWidth, ch / img.naturalHeight) // cover
      const w = img.naturalWidth * escala
      const h = img.naturalHeight * escala
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h)
      desenhado = j
    }

    const carregar = (i) => {
      if (quadros[i]) return
      const img = new Image()
      img.decoding = 'async'
      img.src = src(i)
      img.onload = () => {
        if (desenhado === -1 || Math.round(atual * (total - 1)) === i) desenhar(i, true)
      }
      quadros[i] = img
    }

    const ajustar = () => {
      if (!ctx) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(canvas.clientWidth * dpr)
      canvas.height = Math.round(canvas.clientHeight * dpr)
      desenharAtual(true)
    }
    const desenharAtual = (forcar) => desenhar(Math.round(atual * (total - 1)), forcar)

    // Carrega em passadas (1 a cada 8, 4, 2, 1) para cobrir o filme inteiro cedo.
    let timer = 0
    if (total) {
      carregar(0)
      const fila = []
      for (const passo of [8, 4, 2, 1]) {
        for (let i = 0; i < total; i += passo) if (!fila.includes(i)) fila.push(i)
      }
      let k = 0
      const lote = () => {
        for (let n = 0; n < 6 && k < fila.length; n++) carregar(fila[k++])
        if (k < fila.length) timer = setTimeout(lote, 40)
      }
      lote()
      ajustar()
    }

    const progresso = () => {
      const r = cine.getBoundingClientRect()
      const curso = cine.offsetHeight - window.innerHeight
      return clamp(-r.top / (curso || 1))
    }

    const loop = () => {
      raf = requestAnimationFrame(loop)
      if (!visivel) return
      alvo = progresso()
      atual += (alvo - atual) * 0.14 // suaviza: sensação de filme, não de slide
      if (Math.abs(alvo - atual) < 0.0005) atual = alvo

      desenharAtual(false)
      stage.style.setProperty('--p', atual.toFixed(4))
      itens.forEach((el, i) => {
        const { de, ate } = momentos[i]
        const ativo = atual >= de && (atual < ate || (ate > 1 && atual >= de))
        el.classList.toggle('ativo', ativo)
      })
      stage.classList.toggle('andou', atual > 0.02)
    }

    const observador = new IntersectionObserver(([e]) => { visivel = e.isIntersecting })
    observador.observe(cine)
    window.addEventListener('resize', ajustar)
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timer)
      observador.disconnect()
      window.removeEventListener('resize', ajustar)
    }
  }, [estatico])

  return (
    <section
      ref={cineRef}
      id="inicio"
      className={`cine ${estatico ? 'cine--static' : ''}`}
      aria-label="Apresentação da i4 Brasil"
    >
      <div className="cineStage">
        <div className="cinePoster" style={{ backgroundImage: `url(${poster})` }} />
        {cinema.total > 0 && <canvas ref={canvasRef} className="cineCanvas" aria-hidden="true" />}
        <div className="cineShade" />

        <div className="container cineMoments">
          <article className="momento ativo">
            <div className="painel">
              <h1>Expertise técnica para transformar projetos públicos em resultados.</h1>
              <p className="lead">
                Estruturamos PPPs, concessões e projetos de infraestrutura integrando as
                dimensões técnica, jurídica, econômico-financeira e institucional.
              </p>
              <div className="btnGroup">
                <Button variant="inverso" size="lg" text="Quem somos" href="#quem-somos" />
                <Button variant="outline" size="lg" text="Entre em contato" to="/contato" />
              </div>
            </div>
          </article>

          <article className="momento">
            <div className="painel">
              <h2>Presença em todo o país</h2>
              <p className="lead">
                Atuamos em todo o território nacional, com projetos em setores estratégicos como
                cidades inteligentes, segurança pública, saneamento e eficiência energética.
              </p>
              <div className="btnGroup">
                <Button variant="inverso" size="lg" text="Entre em contato" to="/contato" />
                <a className="btn btn--outline btn--lg" href="#presenca">Ver onde atuamos</a>
              </div>
            </div>
          </article>
        </div>

        <div className="cineProgress" aria-hidden="true"><span /></div>
        <p className="cineDica" aria-hidden="true">Role para continuar</p>
      </div>
    </section>
  )
}

export default CinematicHero
