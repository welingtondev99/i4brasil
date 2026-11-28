import { useEffect } from 'react'

// Pede aos buscadores (Google etc.) que NÃO mostrem esta página nos resultados.
// Usado em Termos de uso e Política de privacidade, que devem existir para quem
// está no site, mas não aparecer como link direto na busca.
// O aviso vale só enquanto a página está aberta e sai ao navegar para outra.
export function useSemIndexacao() {
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, follow'
    document.head.appendChild(meta)
    return () => meta.remove()
  }, [])
}
