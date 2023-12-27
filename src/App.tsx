import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './components/Inicio/Inicio.tsx'
import Footer from './components/Footer/Footer.tsx';
import Preinscripcion from './components/Preinscripcion/Main.tsx'
import Informatica from './components/Informatica/Infomatica.tsx';
import Electronica from './components/Electronica/Electronica.tsx';
import CicloBasico from './components/CicloBasico/CicloBasico.tsx';
AOS.init()
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/preinscripcion' element={<Preinscripcion />} />
          <Route path='/informatica' element={<Informatica />} />
          <Route path='/electronica' element={<Electronica />} />
          <Route path='/ciclobasico' element={<CicloBasico />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
