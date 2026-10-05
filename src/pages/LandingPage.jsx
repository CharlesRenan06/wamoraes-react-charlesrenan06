import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import Apresentacao from "../sections/Apresentacao"
import Destaques from "../sections/Destaques"
import Produtos from "../sections/Produtos"
import ChamadaFinal from "../sections/ChamadaFinal"
import Footer from "../components/Footer"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="landing">
        <Hero />
        <Apresentacao />
        <Destaques />
        <Produtos />
        <ChamadaFinal />
      </main>
      <Footer />
    </>
  )
}