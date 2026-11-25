// Dados editáveis da home. Textos retirados do site atual (i4brasil.org)
// e do guia de design.

export const site = {
  nome: 'i4 Brasil',
  nomeCompleto: 'Instituto de Infraestrutura, Inteligência e Inovação',

  // Vídeo institucional (aparece logo após "Quem somos").
  // Coloque o arquivo em public/video/ e informe o caminho. Vazio = não mostra.
  videoInstitucional: '', // ex.: 'video/institucional.mp4' (já respeita a base /i4brasil/)
  videoPoster: '',        // ex.: 'video/institucional.jpg'
}

// Faixa de números logo após a abertura. Projetos e estados vêm do mapa
// (src/data/states.js ou planilha); os demais são fixos e vêm do site atual.
export const faixaNumeros = [
  { chave: 'projetos', rotulo: 'projetos realizados' },
  { chave: 'estados', rotulo: 'estados impactados' },
  { valor: '+20', rotulo: 'áreas estratégicas de atuação' },
  { valor: '7', rotulo: 'projetos selecionados no UNECE International PPP Forum' },
]

export const sobre = {
  frase: 'Transformando cidades, conectando o futuro.',
  paragrafos: [
    'A i4 Brasil nasceu com um propósito claro: redefinir o futuro dos municípios brasileiros por meio da inovação e da estruturação de projetos viáveis. Somos uma instituição especializada na modelagem de infraestrutura e gestão pública, garantindo o rigor técnico e a segurança jurídica necessários para transformar os conceitos de Cidades Inteligentes (Smart Cities) em realidade prática para a vida dos cidadãos.',
    'Trabalhamos lado a lado com gestores públicos e parceiros privados para criar ecossistemas urbanos mais eficientes, seguros e sustentáveis, aliando profundo conhecimento em conformidade legal à execução de soluções integradas.',
  ],
  pilares: [
    'Experiência prática',
    'Relacionamento institucional qualificado',
    'Produção de conhecimento técnico',
  ],
  mvv: [
    {
      titulo: 'Missão',
      texto: 'Estruturar e viabilizar projetos de infraestrutura e gestão pública, integrando competências técnicas e jurídicas para transformar desafios urbanos em soluções inteligentes, seguras e sustentáveis para os municípios brasileiros.',
    },
    {
      titulo: 'Visão',
      texto: 'Ser a instituição de referência nacional na modelagem de PPPs, concessões e cidades inteligentes, reconhecida pela excelência, transparência e capacidade de entregar resultados concretos para o poder público e a iniciativa privada.',
    },
    {
      titulo: 'Valores',
      texto: 'Excelência técnica e segurança jurídica, com transparência, ética e imparcialidade, promovendo a inovação e a sustentabilidade para gerar resultados duradouros para a gestão pública.',
    },
  ],
}

export const reconhecimento = {
  titulo: 'A i4 Brasil no UNECE International PPP Forum',
  texto: 'A i4 Brasil marcou presença no 10º UNECE International PPP Forum, o maior evento de parcerias público-privadas do mundo, sediado na IESE Business School em Barcelona.',
  destaque: 'O caso de Brusque Saneamento foi chancelado entre os 20 melhores projetos do mundo.',
  numeros: [
    { valor: '180', rotulo: 'iniciativas globais inscritas' },
    { valor: '69', rotulo: 'selecionadas para o fórum' },
    { valor: '7', rotulo: 'eram da i4 Brasil' },
  ],
}

export const localizacao = {
  intro: 'A i4 Brasil mantém uma presença estratégica na Região Metropolitana de Belo Horizonte, estruturada em duas unidades com funções distintas para garantir eficiência operacional e solidez institucional.',
  unidades: [
    {
      id: 'bh',
      nome: 'Centro Operacional',
      cidade: 'Belo Horizonte',
      endereco: 'Rua Matias Cardoso, 169, 7º andar, Santo Agostinho, Belo Horizonte, MG, 30170-050',
      descricao: 'No coração do bairro Santo Agostinho, é o núcleo de produtividade: onde ocorrem as atividades cotidianas do instituto, a equipe técnica se reúne e recebemos parceiros e clientes para reuniões presenciais.',
    },
    {
      id: 'nl',
      nome: 'Sede Institucional',
      cidade: 'Nova Lima',
      endereco: 'Rua da Paisagem, 220, Vila da Serra, Nova Lima, MG',
      descricao: 'Concentra a representação oficial e jurídica da i4 Brasil. É o ponto de ancoragem institucional e administrativo na região.',
    },
  ],
}
