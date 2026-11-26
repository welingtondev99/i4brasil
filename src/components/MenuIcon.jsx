// Ícone do menu: três barras que se transformam em um X quando o menu está aberto.
// Só CSS (header.css), sem trocar de SVG, então a animação é contínua.
const MenuIcon = ({ aberto = false }) => (
  <span className={`menuBarras ${aberto ? 'menuBarras--aberto' : ''}`} aria-hidden="true">
    <span />
    <span />
    <span />
  </span>
)

export default MenuIcon
