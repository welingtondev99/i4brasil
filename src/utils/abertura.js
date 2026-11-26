// Escolha da abertura do site, guardada no navegador (só a preferência, nada pessoal).
const CHAVE = 'i4-abertura'
export const ABERTURAS = [
  { id: 'cidade', nome: 'Cidade na logo' },
  { id: 'traco', nome: 'Traço da logo' },
  { id: 'video', nome: 'Vídeo da obra' },
  { id: 'nenhuma', nome: 'Sem abertura' },
]
export const ABERTURA_PADRAO = 'cidade'

export const lerAbertura = () => {
  try {
    const salva = localStorage.getItem(CHAVE)
    return ABERTURAS.some((a) => a.id === salva) ? salva : ABERTURA_PADRAO
  } catch { return ABERTURA_PADRAO }
}

export const salvarAbertura = (id) => {
  try { localStorage.setItem(CHAVE, id) } catch { /* sem armazenamento: vale só nesta visita */ }
}
