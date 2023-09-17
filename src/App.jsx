
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
     <Banner bannerImage={reactBanner} bannerAlt="perro"/>
     <Foto fotografia={reactFoto} fotografiaAlt="chica"/>
     <Banner bannerImage={reactFoto} bannerAlt="chica"/>
     <Fotos/>
     <Animal/>
    </>
  )
}

export default App
