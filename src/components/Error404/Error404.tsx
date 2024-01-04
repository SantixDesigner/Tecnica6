import HeaderAlt from '../HeaderAlternativo/HeaderAlt'
import { Link } from 'react-router-dom'
import './error404.css'
import { useEffect } from 'react'
const Error404 = () => {
    useEffect(() => {
        document.title = 'Técnica 6 - Error 404'
    },[])
    return (
        <>
        <HeaderAlt textH2='Error 404' assets='./assets/error404.png'/>
            <div className="error">
                <h1 className="error-heading">Error 404</h1>
                <p className="error-message">Lo sentimos, la página que estás buscando no se encuentra.</p>
                <p className="error-message">Puede que la dirección sea incorrecta o que la página haya sido eliminada.</p>
                <p className="error-message">Por favor, verifica la URL o regresa a la <Link to='/' className="error-link">página de inicio</Link>.</p>
            </div>
        </>
    )
}

export default Error404