import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './Header.css'
import { useState, useEffect } from "react"
const HeaderMain = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)
    const indices = 5
    useEffect(() => {
        const cantIndexs = document.querySelectorAll('.item');
        const showItem = (index: number) => {
            cantIndexs.forEach(item => item.classList.remove('active'))
            cantIndexs[index].classList.add('active')
        }
        const intervalId = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % indices)
            showItem(activeIndex)
        }, 4500);
        return () => clearInterval(intervalId);
    }, [activeIndex, indices]);
    return (
        <>
            <header className="header">
                <div className="carousel">
                    <div className="border-carousel">
                        <div className="item index-0 active" style={{backgroundImage: 'url("./assets/entrada.jpg")'}}>
                        </div>
                        <div className="item index-1" style={{backgroundImage: 'url("./assets/básico.jpg")'}}>
                        </div>
                        <div className="item index-2" style={{backgroundImage: 'url("./assets/superior.jpg")'}}>
                        </div>
                        <div className="item index-3" style={{backgroundImage: 'url("./assets/talleres.jpg")'}}>
                        </div>
                        <div className="item index-4" style={{backgroundImage: 'url("./assets/trofeos.jpg")'}}>
                        </div>
                        <div className="border-inner" style={{backgroundImage: `url("../assets/borde.jpg")`}}>
                            <FontAwesomeIcon icon={faBars} size="3x" className="bars" onClick={() => setMenuOpen((prevMenu) => !prevMenu)}/>
                            <nav className={`nav menu ${menuOpen && "open"}`}>
                                <Link to={'/'}><img src="./assets/tecnica-img.png" className={`logo-tecnica ${menuOpen && "borrar"}`} /></Link>
                                <ul>
                                    <li><a href="/#Historia">Historia</a></li>
                                    <li><a href="/#Niveles">Niveles</a></li>
                                    <li><Link to={'/preinscripcion'}>Pre-inscripcion</Link></li>
                                </ul>
                            </nav>
                            <h2 className="h2-bienvenida">Bienvenido a la Técnica 6</h2>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderMain