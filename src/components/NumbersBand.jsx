import { faixaNumeros } from '../data/site'
import usePresenca from '../data/usePresenca'
import './numbersBand.css'

const NumbersBand = () => {
  const { estatisticas } = usePresenca()

  return (
    <section className="faixaNumeros" aria-label="A i4 Brasil em números">
      <ul className="container faixaLista">
        {faixaNumeros.map((n) => (
          <li key={n.rotulo}>
            <strong>{n.chave ? `+${estatisticas[n.chave]}` : n.valor}</strong>
            <span>{n.rotulo}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default NumbersBand
