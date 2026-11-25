// =====================================================================
// DADOS DE ATUAÇÃO — alimenta o mapa, os cards e os números da home.
//
// Para incluir um estado ou município, edite a lista `atuacoes` abaixo:
//   uf         sigla do estado (ex.: 'MG')
//   setor      (opcional) frase curta; se existir, o estado ganha um card em destaque
//   icone      (opcional) energia | saneamento | administrativo | governanca | concessoes
//   municipios lista de municípios atendidos
//
// Os números "+60 projetos" e "+20 estados" abaixo são manuais porque a lista de
// municípios ainda não está completa. Defina como `null` para calcular a partir da lista.
//
// Opção sem mexer no código: ver src/data/usePresenca.js (planilha publicada).
// =====================================================================
import energia from '../assets/eficiencia-energetica.svg'
import saneamento from '../assets/infraestrutura-saneamento.svg'
import administrativo from '../assets/centro-administrativo.svg'
import governanca from '../assets/governanca-corporativa.svg'
import concessoes from '../assets/concessoes-modelagem.svg'

export const icones = { energia, saneamento, administrativo, governanca, concessoes }

export const estatisticasManuais = { projetos: 60, estados: 20 }

export const atuacoes = [
  { uf: 'RR', setor: 'Eficiência energética e PPPs municipais', icone: 'energia', municipios: [] },
  { uf: 'AL', setor: 'Infraestrutura e saneamento', icone: 'saneamento', municipios: ['Maceió'] },
  { uf: 'SE', setor: 'Centro administrativo', icone: 'administrativo', municipios: ['Aracaju', 'Governo do Estado de Sergipe'] },
  {
    uf: 'MG',
    setor: 'Governança corporativa e modelagem',
    icone: 'governanca',
    municipios: ['Alpercata', 'Belo Horizonte', 'Cataguases', 'Município do Alto Rio Pardo', 'Juatuba', 'Periquito', 'Serro'],
  },
  {
    uf: 'SC',
    setor: 'Modelagem e concessões em Brusque e região',
    icone: 'concessoes',
    municipios: ['Brusque', 'Laguna', 'Mafra', 'Monte Carlo', 'São Miguel do Oeste', 'Cocal do Sul'],
  },
  { uf: 'AP', municipios: ['Santana'] },
  { uf: 'RO', municipios: ['Ariquemes', 'Porto Velho'] },
  { uf: 'MT', municipios: ['Nova Mutum', 'Água Boa'] },
  { uf: 'GO', municipios: ['Caldas Novas', 'São Simão', 'Jaraguá'] },
  { uf: 'MS', municipios: ['Corumbá'] },
  { uf: 'SP', municipios: ['Olímpia', 'Pontal', 'Polo Cuesto'] },
  { uf: 'BA', municipios: ['Brumado'] },
  { uf: 'RS', municipios: ['Cachoeira do Sul'] },
]
