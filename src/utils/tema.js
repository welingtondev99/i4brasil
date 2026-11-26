// Tema visual: o padrão da cliente (guia de design: Bebas Neue, Lato e as cores dela) vem LIGADO.
// Quem desliga fica com o padrão antigo, e a escolha é lembrada. Só guarda a preferência, nada pessoal.
const CHAVE = 'i4-tema'
export const TEMA_CLIENTE = 'cliente'
const DESLIGADO = 'padrao' // valor guardado quando a pessoa desliga o padrão da cliente

export const lerTema = () => {
  try { return localStorage.getItem(CHAVE) === DESLIGADO ? '' : TEMA_CLIENTE } catch { return TEMA_CLIENTE }
}

export const aplicarTema = (tema) => {
  const raiz = document.documentElement
  if (tema) raiz.setAttribute('data-tema', tema)
  else raiz.removeAttribute('data-tema')
}

export const salvarTema = (tema) => {
  try { localStorage.setItem(CHAVE, tema ? TEMA_CLIENTE : DESLIGADO) } catch { /* sem armazenamento: vale só nesta visita */ }
}

// Aplica o tema salvo antes da primeira pintura (chamado em main.jsx)
export const iniciarTema = () => aplicarTema(lerTema())
