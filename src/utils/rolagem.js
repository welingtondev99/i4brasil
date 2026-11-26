// Barra de rolagem discreta: o CSS (index.css) só mostra o polegar enquanto
// o atributo data-rolando está no <html>. Aqui ele liga ao rolar e some ~1s depois.
const ATRASO = 1000

export const iniciarRolagem = () => {
  const raiz = document.documentElement
  let timer
  const aoRolar = () => {
    raiz.setAttribute('data-rolando', '')
    clearTimeout(timer)
    timer = setTimeout(() => raiz.removeAttribute('data-rolando'), ATRASO)
  }
  window.addEventListener('scroll', aoRolar, { passive: true })
}
