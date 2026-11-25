// Configuração da abertura cinematográfica.
//
// Enquanto `total` for 0, a abertura usa a foto de fundo com zoom lento
// ligado à rolagem. Para usar vídeo de verdade:
//   1. gere os quadros (ver skill site-cinematografico):
//      bash ~/.claude/skills/site-cinematografico/scripts/fatiar_frames.sh \
//           video.mp4 public/frames 160
//   2. coloque aqui o total impresso pelo script e a extensão usada.
import { publico } from '../utils/publico'

export const cinema = {
  total: 0,
  desktop: publico('frames/desktop/f_{n}.webp'),
  mobile: publico('frames/mobile/f_{n}.webp'),
}

// Pontos da rolagem (0 a 1) em que cada momento de texto aparece.
export const momentos = [
  { de: 0, ate: 0.5 },
  { de: 0.5, ate: 1.01 },
]
