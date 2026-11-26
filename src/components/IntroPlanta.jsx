import { useMemo } from 'react'

// Planta técnica que se desenha atrás da logo, com cara de projeto: malha que nasce das bordas,
// moldura com cantos em volta da logo, cotas, rotas que chegam à moldura e carimbo de prancha.
// As medidas vêm do tamanho real da tela (em px), para a malha chegar de verdade às pontas.
const PASSO = 64 // espaço entre as linhas da malha

const juntar = (pts) => pts.map((p) => p.join(',')).join(' ')

const montar = (w, h) => {
  const cx = w / 2
  const cy = h / 2
  // moldura em volta da logo (a logo ocupa min(86vw, 64rem) e tem proporção 2400:724)
  const logoL = Math.min(w * 0.86, 1024)
  const logoA = logoL * (724 / 2400)
  const mx = Math.max(16, logoL * 0.04)
  const f = {
    x0: cx - logoL / 2 - mx,
    x1: cx + logoL / 2 + mx,
    y0: cy - logoA / 2 - mx * 1.4,
    y1: cy + logoA / 2 + mx * 1.4,
  }
  const canto = Math.min(34, (f.x1 - f.x0) * 0.08)

  // malha: cada linha nasce de uma borda (alternando) e vai até a oposta
  const linhas = []
  let i = 0
  for (let x = PASSO / 2; x < w; x += PASSO, i++) {
    linhas.push(i % 2 ? [x, h, x, 0] : [x, 0, x, h])
  }
  for (let y = PASSO / 2; y < h; y += PASSO, i++) {
    linhas.push(i % 2 ? [w, y, 0, y] : [0, y, w, y])
  }

  // rotas: saem de uma borda, dobram em 45° e chegam ao meio de um lado da moldura
  const dy = Math.min(h * 0.22, 150)
  const dx = Math.min(w * 0.22, 150)
  const rotas = [
    [[0, cy + dy], [Math.max(8, f.x0 - dy - 24), cy + dy], [Math.max(8, f.x0 - 24), cy], [f.x0, cy]],
    [[w, cy - dy], [Math.min(w - 8, f.x1 + dy + 24), cy - dy], [Math.min(w - 8, f.x1 + 24), cy], [f.x1, cy]],
    [[cx - dx, 0], [cx - dx, Math.max(8, f.y0 - dx - 20)], [cx, Math.max(8, f.y0 - 20)], [cx, f.y0]],
    [[cx + dx, h], [cx + dx, Math.min(h - 8, f.y1 + dx + 20)], [cx, Math.min(h - 8, f.y1 + 20)], [cx, f.y1]],
  ].map(juntar)
  const nos = [[f.x0, cy], [f.x1, cy], [cx, f.y0], [cx, f.y1]]

  // cotas: linhas de medida acima e à esquerda da moldura, com marcas nas pontas
  return { w, h, f, canto, linhas, rotas, nos, cotaY: f.y0 - 18, cotaX: f.x0 - 18 }
}

const IntroPlanta = () => {
  const m = useMemo(() => montar(window.innerWidth, window.innerHeight), [])
  const { w, h, f, canto, linhas, rotas, nos, cotaY, cotaX } = m

  return (
    <svg className="introPlanta" viewBox={`0 0 ${w} ${h}`} aria-hidden="true">
      <g className="introGrade">
        {linhas.map(([x1, y1, x2, y2], i) => (
          <line key={i} className="introTr" x1={x1} y1={y1} x2={x2} y2={y2} pathLength="1" style={{ '--d': `${0.05 + i * 0.022}s`, '--t': '1.3s' }} />
        ))}
      </g>

      {rotas.map((pts, i) => (
        <polyline key={i} className="introTr introRota" points={pts} pathLength="1" style={{ '--d': `${0.5 + i * 0.18}s`, '--t': '1.4s' }} />
      ))}

      <g className="introCota">
        <line className="introTr" x1={f.x0} y1={cotaY} x2={f.x1} y2={cotaY} pathLength="1" style={{ '--d': '1.3s', '--t': '.7s' }} />
        <line className="introTr" x1={f.x0} y1={cotaY - 7} x2={f.x0} y2={cotaY + 7} pathLength="1" style={{ '--d': '1.9s', '--t': '.3s' }} />
        <line className="introTr" x1={f.x1} y1={cotaY - 7} x2={f.x1} y2={cotaY + 7} pathLength="1" style={{ '--d': '1.9s', '--t': '.3s' }} />
        <line className="introTr" x1={cotaX} y1={f.y0} x2={cotaX} y2={f.y1} pathLength="1" style={{ '--d': '1.5s', '--t': '.7s' }} />
        <line className="introTr" x1={cotaX - 7} y1={f.y0} x2={cotaX + 7} y2={f.y0} pathLength="1" style={{ '--d': '2.1s', '--t': '.3s' }} />
        <line className="introTr" x1={cotaX - 7} y1={f.y1} x2={cotaX + 7} y2={f.y1} pathLength="1" style={{ '--d': '2.1s', '--t': '.3s' }} />
      </g>

      {/* moldura: quatro cantos que crescem de cada vértice */}
      <g className="introMoldura">
        {[
          [f.x0, f.y0, 1, 1], [f.x1, f.y0, -1, 1], [f.x0, f.y1, 1, -1], [f.x1, f.y1, -1, -1],
        ].map(([x, y, sx, sy], i) => (
          <polyline key={i} className="introTr" points={`${x + sx * canto},${y} ${x},${y} ${x},${y + sy * canto}`} pathLength="1" style={{ '--d': `${0.9 + i * 0.1}s`, '--t': '.7s' }} />
        ))}
      </g>

      {nos.map(([x, y], i) => (
        <circle key={i} className="introNo" cx={x} cy={y} r="4" style={{ '--d': `${1.5 + i * 0.1}s` }} />
      ))}

      {/* carimbo de prancha nos cantos da tela */}
      <text className="introTexto" x="20" y={h - 22} style={{ '--d': '1.8s' }}>i4 BRASIL · PLANTA GERAL</text>
      <text className="introTexto" x={w - 20} y={h - 22} textAnchor="end" style={{ '--d': '2s' }}>ESC. 1:500 · FOLHA 01/01</text>
    </svg>
  )
}

export default IntroPlanta
