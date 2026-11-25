// Caminhos de arquivos da pasta public/ e âncoras da home, respeitando a base do site.
// No GitHub Pages o site fica em /i4brasil/ (vite.config.js → base); caminhos começando
// com "/" apontariam para a raiz do domínio e quebrariam lá.
//   publico('video/abertura-logo.mp4')  →  /i4brasil/video/abertura-logo.mp4
//   publico('#quem-somos')              →  /i4brasil/#quem-somos
export const publico = (caminho) => import.meta.env.BASE_URL + String(caminho).replace(/^\//, '')
