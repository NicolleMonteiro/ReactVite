import { Link } from "react-router-dom"
 
function Menu() {
  return (
    <header className="menu">
      <div className="logo">TechSolutions</div>
 
      <nav>
        <Link to="/">Home</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/empresa">Empresa</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  )
}
 
export default Menu