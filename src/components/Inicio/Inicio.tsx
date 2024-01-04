import './main.css'
import Historia from "./Historia/Historia"
import PlanesDeEstudio from './PlanesDeEstudio/PlanesDeEstudio'
import Niveles from './Niveles/Niveles'
import Preinscripcion from './Preinscripcion/Preinscripcion'
import HeaderMain from '../Header/HeaderMain'
import { useEffect, useState } from 'react'
const Inicio = () => {
    useEffect(() => {
        document.title = 'Técnica 6 - Inicio'
    },[])
    const [scroll, setScroll] = useState(false)
    if(!scroll){
        window.scrollTo(0, 0)
        setScroll(true)
    }
    return (
        <>
            <HeaderMain />
            <main>
                <Historia />
                <Niveles />
                <PlanesDeEstudio />
                <Preinscripcion />
            </main>
        </>
    )
}

export default Inicio