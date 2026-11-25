// Tema visual: padrão atual ou "cliente" (guia de design: Bebas Neue, Lato e as cores dela).
// Só guarda a preferência de tema, nada pessoal.
const CHAVE = 'i4-tema'
export const TEMA_CLIENTE = 'cliente'

export const lerTema = () => {
  try { return localStorage.getItem(CHAVE) === TEMA_CLIENTE ? TEMA_CLIENTE : '' } catch { return '' }
}

export const aplicarTema = (tema) => {
  const raiz = document.documentElement
  if (tema) raiz.setAttribute('data-tema', tema)
  else raiz.removeAttribute('data-tema')
}

export const salvarTema = (tema) => {
  try {
    if (tema) localStorage.setItem(CHAVE, tema)
    else localStorage.removeItem(CHAVE)
  } catch { /* sem armazenamento: vale só nesta visita */ }
}

// Aplica o tema salvo antes da primeira pintura (chamado em main.jsx)
export const iniciarTema = () => aplicarTema(lerTema())
