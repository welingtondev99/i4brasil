# Direção visual — i4 Brasil (home)

Fonte: "Guia para design do site". Os valores vivem como variáveis em `src/index.css`; não use valores soltos nos componentes.

## Cor
| Papel | Token | Valor |
|---|---|---|
| Principal (títulos, fundos de destaque) | `--roxo-primario` | #422774 |
| Secundária | `--roxo-secundario` | #594195 |
| Acento e CTA primário | `--verde-agua` | #069790 |
| Texto corrido | `--paragraph` | #4A4A55 |
| Fundo claro | `--background` | #F3F5F7 |

Contrastes não foram medidos com ferramenta; conferir antes da entrega.

## Tipografia
- Títulos: Bebas Neue (`--font-title`). Resto: Lato (`--font-body`).
- Escala fluida: display (h1 do hero) · h2 (seção) · h3 (subtítulo) · h4 (título de card, Lato 700) · lead · body · small.
- Largura máxima de leitura: 62ch (`--measure`).

## Espaçamento e layout
- Escala de 4px: `--space-1` (4px) a `--space-10` (128px). Seções usam `--section-y`.
- Container único: `.container` (máx. 75rem, margem lateral `--gutter`).
- Breakpoints: sm 640 · md 960 · lg 1280.

## Botões
- Três alturas: sm 40px · md 48px (padrão) · lg 56px, formato pílula.
- Variantes: `primary` (verde-água), `outline` (contorno branco, fundo escuro), `secundary` (roxo, páginas internas).
- Hero usa `lg`; cabeçalho e demais usam `md`.

## Abertura cinematográfica
- `CinematicHero`: trecho de 420vh com palco fixo; a rolagem avança a cena e troca 3 momentos de texto (quem somos · o que fazemos · presença nacional).
- Todo texto sobre a cena fica em painel de vidro.
- Sem vídeo: foto com zoom lento. Com vídeo: quadros em `public/frames` e `total` em `src/data/cinema.js`.
- Movimento reduzido: sem rolagem animada, os três blocos ficam empilhados.
