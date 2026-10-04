const destaques = [
  {
    id: 1,
    icone: "🔧",
    titulo: "Qualidade Garantida",
    texto: "Trabalhamos apenas com marcas reconhecidas e produtos de procedência confiável para o seu veículo.",
  },
  { id: 2, icone: "TROQUE", titulo: "TROQUE", texto: "TROQUE" },
  { id: 3, icone: "TROQUE", titulo: "TROQUE", texto: "TROQUE" },
]

export default function Destaques() {
  return (
    <section id="destaques" className="py-5 bg-light">
      <div className="container">
        <h2 className="titulo-secao">Por que escolher a W.A Moraes?</h2>
        <div className="destaques">
          {destaques.map((d) => (
            <div className="card-destaque" key={d.id}>
              <div className="icone-destaque">{d.icone}</div>
              <h3>{d.titulo}</h3>
              <p>{d.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}