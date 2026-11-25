import ods from '../data/ods'
import './sections.css'

const OdsSection = () => {
  return (
    <section id="ods" className="section secaoOds">
      <div className="container odsLayout">
        <div className="odsTexto">
          <h2>Compromisso com os ODS e a Agenda 2030</h2>
          <p className="lead">
            Nossa atuação está alinhada aos Objetivos de Desenvolvimento Sustentável da ONU,
            com o compromisso de gerar impacto positivo que vai além dos projetos que avaliamos.
          </p>
          <p>
            Como signatários do Pacto Global, incorporamos os princípios da ONU em nossa
            estratégia e operação, contribuindo para um modelo de negócios responsável,
            transparente e orientado ao longo prazo.
          </p>
          <p>
            Entendemos que o setor privado tem papel essencial na construção de cidades mais
            justas, na redução das desigualdades e na transição para uma economia de baixo
            carbono. É nessa interseção entre desenvolvimento e sustentabilidade que atuamos.
          </p>
          <a
            className="btn btn--outline btn--md"
            href="https://www.pactoglobal.org.br/ods-e-agenda-2030/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Conheça a Agenda 2030
          </a>
        </div>

        <ol className="odsGrade" aria-label="Objetivos de Desenvolvimento Sustentável">
          {ods.map((o) => (
            <li
              key={o.n}
              className={`odsItem ${o.escuro ? 'odsItem--escuro' : ''}`}
              style={{ backgroundColor: o.cor }}
            >
              <span className="odsNumero">{o.n}</span>
              <span className="odsNome">{o.nome}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default OdsSection
