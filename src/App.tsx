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
import Galeria from './components/Galeria/Galeria.tsx';
import Prueba from './pruebas/prueba.tsx';
import Error404 from './components/Error404/Error404.tsx'
import { useEffect } from 'react';
AOS.init()
function App() {
  const changeFavicon = (newFaviconPath:string) => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = newFaviconPath;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = newFaviconPath;
      document.head.appendChild(newLink);
    }
  };
  useEffect(() => {
    changeFavicon('./assets/tecnica-img.png')
  },[])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/*' element={<Error404/>}/>
          <Route path='/preinscripcion' element={<Preinscripcion />} />
          <Route path='/informatica' element={<Informatica />} />
          <Route path='/electronica' element={<Electronica />} />
          <Route path='/ciclobasico' element={<CicloBasico />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/pruebas' element={<Prueba/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
