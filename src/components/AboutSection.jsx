import { site, sobre } from '../data/site'
import TitleSection from './TitleSection'
import { publico } from '../utils/publico'
import './sections.css'

const AboutSection = () => {
  const temVideo = Boolean(site.videoInstitucional)

  return (
    <section id="quem-somos" className="section secaoSobre">
      <div className="container">
        <TitleSection title="Quem somos" />

        <div className={`sobreGrid ${temVideo ? 'sobreGrid--video' : ''}`}>
          <div className="sobreTexto">
            <p className="lead sobreFrase">{sobre.frase}</p>
            {sobre.paragrafos.map((t) => <p key={t}>{t}</p>)}
            <ul className="pilares">
              {sobre.pilares.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </div>

          {temVideo && (
            <figure className="videoInstitucional">
              <video
                controls
                preload="metadata"
                poster={site.videoPoster ? publico(site.videoPoster) : undefined}
                src={publico(site.videoInstitucional)}
              >
                Seu navegador não reproduz este vídeo.
              </video>
              <figcaption>Vídeo institucional da i4 Brasil</figcaption>
            </figure>
          )}
        </div>

        <dl className="mvv">
          {sobre.mvv.map((i) => (
            <div key={i.titulo}>
              <dt>{i.titulo}</dt>
              <dd>{i.texto}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default AboutSection
