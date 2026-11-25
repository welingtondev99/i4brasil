// Fornece os dados de atuação para o mapa.
//
// Padrão: usa a lista de src/data/states.js.
//
// Planilha (a equipe edita sem tocar no código):
//   1. Crie uma planilha com as colunas: uf, municipio, setor, icone, projetos
//        uf        sigla do estado (MG)                        — obrigatório
//        municipio nome do município                           — obrigatório
//        setor     frase curta (só numa linha do estado)       — opcional, gera o card
//        icone     energia | saneamento | administrativo | governanca | concessoes
//        projetos  nº de projetos do município (padrão 1)
//   2. Arquivo > Compartilhar > Publicar na web > formato CSV.
//   3. Coloque o link em VITE_PRESENCA_CSV (arquivo .env) e refaça o deploy uma vez.
//   Depois disso, editar a planilha atualiza o site sozinho. Se a planilha falhar,
//   o site continua mostrando a lista local.
import { useEffect, useState } from 'react'
import { atuacoes, estatisticasManuais } from './states'

const CSV_URL = import.meta.env.VITE_PRESENCA_CSV

// Resumo calculado: estados distintos e soma de projetos.
const resumir = (lista) => ({
  estados: new Set(lista.map((a) => a.uf)).size,
  projetos: lista.reduce((t, a) => t + (a.projetos ?? Math.max(a.municipios.length, 1)), 0),
})

const dadosLocais = () => ({
  atuacoes,
  estatisticas: {
    ...resumir(atuacoes),
    ...(estatisticasManuais ?? {}),
  },
  origem: 'local',
})

// CSV simples, com suporte a campos entre aspas.
const linhasCsv = (texto) => {
  const linhas = []
  let campo = ''
  let linha = []
  let aspas = false
  for (let i = 0; i < texto.length; i++) {
    const c = texto[i]
    if (aspas) {
      if (c === '"' && texto[i + 1] === '"') { campo += '"'; i++ }
      else if (c === '"') aspas = false
      else campo += c
    } else if (c === '"') aspas = true
    else if (c === ',') { linha.push(campo); campo = '' }
    else if (c === '\n' || c === '\r') {
      if (c === '\r' && texto[i + 1] === '\n') i++
      linha.push(campo); campo = ''
      if (linha.some((v) => v.trim())) linhas.push(linha)
      linha = []
    } else campo += c
  }
  linha.push(campo)
  if (linha.some((v) => v.trim())) linhas.push(linha)
  return linhas
}

export const lerPlanilha = (texto) => {
  const [cab, ...linhas] = linhasCsv(texto)
  const col = (nome) => cab.findIndex((h) => h.trim().toLowerCase() === nome)
  const iUf = col('uf'), iMun = col('municipio'), iSet = col('setor'), iIco = col('icone'), iProj = col('projetos')
  if (iUf < 0 || iMun < 0) throw new Error('Planilha sem as colunas uf e municipio')

  const porUf = new Map()
  for (const l of linhas) {
    const uf = (l[iUf] || '').trim().toUpperCase()
    if (!uf) continue
    const item = porUf.get(uf) ?? { uf, municipios: [], projetos: 0 }
    const mun = (l[iMun] || '').trim()
    if (mun) item.municipios.push(mun)
    item.projetos += Number(l[iProj]) || 1
    if (iSet >= 0 && l[iSet]?.trim()) item.setor = l[iSet].trim()
    if (iIco >= 0 && l[iIco]?.trim()) item.icone = l[iIco].trim().toLowerCase()
    porUf.set(uf, item)
  }
  const lista = [...porUf.values()]
  if (!lista.length) throw new Error('Planilha vazia')
  return { atuacoes: lista, estatisticas: resumir(lista), origem: 'planilha' }
}

export default function usePresenca() {
  const [dados, setDados] = useState(dadosLocais)

  useEffect(() => {
    if (!CSV_URL) return
    let cancelado = false
    fetch(CSV_URL)
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.text() })
      .then((t) => { if (!cancelado) setDados(lerPlanilha(t)) })
      .catch(() => { /* mantém os dados locais */ })
    return () => { cancelado = true }
  }, [])

  return dados
}
