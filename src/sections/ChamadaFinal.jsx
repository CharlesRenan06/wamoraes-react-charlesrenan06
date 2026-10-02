const numero = "552127564682" 
const mensagem =
  "Olá! Visitei o site da W.A Moraes Peças e Acessórios Automotivos e gostaria de obter mais informações sobre os produtos e serviços oferecidos. Aguardo seu retorno. Obrigado!"

export default function ChamadaFinal() {
  return (
    <section id="contato" className="chamada-final">
      <div className="container text-center">
        <h2>Precisa de peças para o seu veículo?</h2>
        <p>Fale com a nossa equipe e receba atendimento rápido.</p>
        
          className="btn-amarelo"
          href={`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`}
          target="_blank"
          rel="noreferrer"
        >
          Falar pelo WhatsApp
        </a>
        <p className="mt-3 small">Segunda a Sexta: 8h às 18h | Sábado: 8h às 13h</p>
      </div>
    </section>
  )
}