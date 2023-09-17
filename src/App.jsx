
import './App.css'
import Header from "./components/Header/Header"
import Banner from './components/Banner/Banner'
import reactBanner from "./assets/imagenes/Matias.jpg"
import Foto from './components/Foto/Foto'
import reactFoto from "./assets/imagenes/rebecca.png"
import Fotos  from './components/Fotos/Fotos'
import Animal from './components/Animal/Animal'

function App() {
  return (
    <>
     <Header/>
     <Banner bannerImage={reactBanner} bannerAlt="ReactJS Banner"/>
     <Foto fotografia={reactFoto} fotografiaAlt="ReactJs Banner"/>
     <Fotos/>
     <Animal/>
    </>
  )
}

export default App
