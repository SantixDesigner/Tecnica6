import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import '../Header/Header.css'
import { useState } from "react"
interface HeaderAlt {
    assets: string
    textH2: string
}
const HeaderAlt: React.FC<HeaderAlt> = ({ assets, textH2 }) => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <>
            <header className="header header-inscripcion">
                <div className="carousel">
                    <div className="border-carousel">
                        <div className="item active inscripcion" style={{ backgroundImage: `url(${assets})`}}>
                        </div>
                        <div className="border-inner inscripcion" style={{backgroundImage: `url("../assets/borde.jpg")`}}>
                            <FontAwesomeIcon icon={faBars} size="3x" className="bars" onClick={() => setMenuOpen((prevMenu) => !prevMenu)} />
                            <nav className={`nav menu ${menuOpen && "open"}`}>
                                <Link to={'/'}><img src="./assets/tecnica-img.png" className={`logo-tecnica ${menuOpen && "borrar"}`} /></Link>
                                <ul>
                                    <li><Link to={'/'}>Inicio</Link></li>
                                    <li><Link to={'/preinscripcion'}>Pre-inscripcion</Link></li>
                                </ul>
                            </nav>
                            <h2 className="h2-bienvenida">{textH2}</h2>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderAlt