import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Política de segurança de conteúdo (CSP). O GitHub Pages não deixa configurar
// cabeçalhos HTTP, então ela vai como <meta> no index.html do build.
// Só libera o que o site usa: fontes do Google, mapa do Google, envio pelo
// EmailJS e a planilha opcional do mapa de presença.
// Fica fora do modo dev porque o recarregamento automático do Vite usa scripts inline.
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "media-src 'self'",
  "connect-src 'self' https://api.emailjs.com https://docs.google.com https://*.googleusercontent.com",
  "frame-src https://www.google.com https://maps.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests',
].join('; ')

const politicaDeSeguranca = () => ({
  name: 'i4-csp',
  apply: 'build',
  transformIndexHtml(html) {
    return html.replace(
      '<meta charset="UTF-8" />',
      `<meta charset="UTF-8" />\n    <meta http-equiv="Content-Security-Policy" content="${CSP}" />`,
    )
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    politicaDeSeguranca(),
  ],
  base: '/i4brasil/',
})
