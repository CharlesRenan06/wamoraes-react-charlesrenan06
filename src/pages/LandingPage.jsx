import Navbar from "../components/Navbar"
import Produtos from "../sections/Produtos"
import ChamadaFinal from "../sections/ChamadaFinal"
import Footer from "../components/Footer"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main className="landing">
        <Produtos />
        <ChamadaFinal />
      </main>
      <Footer />
    </>
  )
}