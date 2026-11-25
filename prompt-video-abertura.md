# Prompts da abertura da home (vídeo de fundo ou foto)

Layout final: título e botões à **esquerda**, sobre uma sobreposição roxa mais densa à esquerda. Por isso a cena precisa de **espaço calmo à esquerda** e o assunto à **direita**. No celular a imagem é recortada ao centro, então o assunto também deve ter folga.

## A i4 em uma frase (base da cena)
Instituto de Infraestrutura, Inteligência e Inovação. Estrutura PPPs, concessões e projetos para prefeituras e governos: saneamento, eficiência energética, cidades inteligentes, segurança pública, centros administrativos. Tom: técnico, sério, institucional.

## Vídeo (Flow / Veo)
Configuração: 16:9 · 8 s · 1080p · **sem áudio** · um único plano, sem cortes.

```
Single continuous cinematic aerial shot, no cuts. A slow, steady forward glide at constant speed over a mid-sized Brazilian municipality at blue hour, just after sunset. Composition: the town and its landmarks are concentrated on the RIGHT two-thirds of the frame; the LEFT third is calm, dark, low-detail twilight sky and distant hills, left empty on purpose. Sober, institutional, trustworthy mood. Typical Brazilian urban fabric: low-rise houses with terracotta roofs mixed with mid-rise buildings, a church tower, hills in the distance, a river crossing the town. First half: wide view as the public street lights switch on in clean, orderly rows; on the right, a municipal water and sewage treatment plant with softly lit round tanks and a public building with a rooftop solar array come into view. Second half: the camera rises gently and settles over the municipal administrative center and its public square, fully lit and orderly, the town spread around it. Smooth, steady motion, no camera shake, no sudden changes, consistent lighting throughout. Photorealistic, 35mm lens look, light atmospheric haze, subtle film grain. Color palette: deep violet and indigo dusk sky, warm white and soft amber lights. No text, no letters, no logos, no watermark, no people looking at the camera, no cars driving toward the camera, no futuristic skyscrapers, no sci-fi, no holograms.
```

Prompt negativo (se houver o campo):

```
text, letters, logo, watermark, subtitles, cuts, jump cuts, fast motion, camera shake, zoom, morphing buildings, warping, flicker, cartoon, futuristic skyscrapers, sci-fi city, holograms, distorted structures, people staring at camera
```

## Foto (ChatGPT / Imagen / Flow imagem)
Para usar no lugar da foto atual (`src/images/hero-city.jpg`), sem vídeo.

```
Wide aerial photograph of a mid-sized Brazilian municipality at blue hour, just after sunset. 16:9, ultra-sharp, 3840x2160. Composition: the town and its landmarks sit on the RIGHT two-thirds of the frame; the LEFT third is calm, dark, low-detail twilight sky and distant hills, left empty on purpose for text. Sober, institutional, trustworthy mood. Brazilian urban fabric: low-rise houses with terracotta roofs mixed with mid-rise buildings, a church tower, a river crossing the town. Public street lights switched on in orderly rows, a municipal water treatment plant with softly lit round tanks, a public building with rooftop solar panels, the municipal administrative center and its public square lit in the center-right. Photorealistic, 35mm look, light haze, subtle grain. Color palette: deep violet and indigo dusk sky, warm white and soft amber lights. No text, no letters, no logos, no watermark, no people, no futuristic skyscrapers, no sci-fi.
```

## Como conferir o resultado
Veja se tem texto ou logo na imagem, prédio deformando, tremor, corte de cena ou mudança de luz no meio. Confira também se a **esquerda ficou vazia** (é onde entra o título).

## Depois que ficar pronto
Salve o `.mp4` (ou a foto) no disco E: e me avise. No caso do vídeo, eu fatio em cerca de 160 quadros, coloco em `public/frames` e preencho `src/data/cinema.js`. No caso da foto, eu troco `hero-city.jpg`.
