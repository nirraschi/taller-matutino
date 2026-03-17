import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Process from "./components/Process"
import Gallery from "./components/Gallery"
import Tools from "./components/Tools"
import Academic from "./components/Academic"
import Footer from "./components/Footer"
import News from "./components/News"
import Espacios from "./components/Espacios"
import Equipo from "./components/Equipo"

import { Routes, Route } from "react-router-dom"


function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Process/>
      <Gallery/>
      <Tools/>
      <Academic/>
    </>
  )
}

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novedades" element={<News />} />
        <Route path="/espacios" element={<Espacios />} />
        <Route path="/equipo-docente" element={<Equipo />} />
      </Routes>

      <Footer />
    </>

  )
}

export default App
