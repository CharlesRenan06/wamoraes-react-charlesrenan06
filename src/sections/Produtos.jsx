const produtos = [
  {
    id: 1,
    nome: "Óleo de Motor 5W30",
    descricao: "Óleo sintético de alta performance para motores a gasolina e flex. Protege o motor e melhora o desempenho do veículo. Recomendado a cada 5.000 km.",
    preco: "R$ 42,50",
    imagem: "/Imagens/Oleo_de_Motor_5W30.png",
  },
  {
    id: 2,
    nome: "Fluido de Transmissão",
    descricao: "Fluido para câmbio automático e manual de alta qualidade. Garante a lubrificação adequada e o funcionamento suave da transmissão.",
    preco: "R$ 58,00",
    imagem: "/Imagens/images.fluidodetransmissao.jpg",
  },
  {
    id: 3,
    nome: "Aditivo para Radiador",
    descricao: "Aditivo concentrado para radiador que evita a corrosão e o superaquecimento do motor. Compatível com radiadores de alumínio e ferro fundido.",
    preco: "R$ 25,00",
    imagem: "/Imagens/images.aditivoradiador.jpg",
  },
  {
    id: 4,
    nome: "Fluido Hidráulico",
    descricao: "Fluido hidráulico de alta performance para sistemas de direção e transmissão. Protege os componentes e melhora a resposta do veículo. Recomendado a cada 50.000 km.",
    preco: "R$ 30,00",
    imagem: "/Imagens/fluidohidraulico.jpg",
  },
]

export default function Produtos() {
  return (
    <section id="produtos" className="py-5">
      <div className="container">
        <h2 className="titulo-secao">Óleos e Lubrificantes</h2>
        <p className="desc-categoria">
          Proteja o motor e os sistemas do seu veículo com nossos óleos e lubrificantes de qualidade.
        </p>

        <div className="row g-4">
          {produtos.map((p) => (
            <div className="col-12 col-sm-6 col-lg-3" key={p.id}>
              <div className="card card-produto-bs">
                <div className="card-img-placeholder">
                  <img src={p.imagem} alt={p.nome} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{p.nome}</h5>
                  <p className="card-text">{p.descricao}</p>
                  <p className="preco-produto-bs mt-auto">{p.preco}</p>
                  <a href="#contato" className="btn-amarelo text-center">Solicitar</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}