const links = [
  { href: "#inicio", texto: "Início" },
  { href: "#sobre", texto: "Sobre"},
  { href: "#destaques", texto: "Diferenciais" },
  { href: "#produtos", texto: "Produtos" },
  { href: "#contato", texto: "Contato" },
]

export default function Navbar() {
  return (
    <>
      <header>
        <div className="header-topo">
          <a href="#inicio" className="logo">
            <img
              src="/Imagens/W_AMORAESLOGO.png"
              alt="W.A Moraes Peças e Acessórios Automotivos"
              className="logo-icone"
            />
            <div className="logo-texto">
              <span>W.A Moraes</span>
              <small>Peças e Acessórios Automotivos</small>
            </div>
          </a>
        </div>
      </header>

      <nav>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.texto}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}