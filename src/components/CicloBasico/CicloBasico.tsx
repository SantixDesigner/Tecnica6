import { useState } from "react"
import HeaderAlt from "../HeaderAlternativo/HeaderAlt"
import '../Informatica/Informatica.css'
const CicloBasico = () => {

    const [scroll, setScroll] = useState(false)
    if (!scroll) {
        window.scrollTo(0, 0)
        setScroll(true)
    }
    return (
        <>
            <HeaderAlt assets="../assets/carpinteria3.jpg" textH2="CICLO BÁSICO" />
            <h2 className="text-center mt-2">Plan de estudio de Ciclo Básico</h2>
            <h3 className="text-center display-cel mb-2">Contenido deslizable</h3>
            <main className="container-informatica">
                <table className="ms-auto me-auto">
                    <tbody>
                        <tr>
                            <th>PRIMER AÑO</th>
                            <th>SEGUNDO AÑO</th>
                            <th>TERCER AÑO</th>
                        </tr>
                        <tr>
                            <th>FORMACIÓN GENERAL</th>
                            <th>FORMACIÓN GENERAL</th>
                            <th>FORMACIÓN GENERAL</th>
                        </tr>
                        <tr>
                            <td>Prácticas del Lenguaje</td>
                            <td>Prácticas del Lenguaje</td>
                            <td>Prácticas del Lenguaje</td>
                        </tr>
                        <tr>
                            <td>Inglés</td>
                            <td>Inglés</td>
                            <td>Inglés</td>
                        </tr>
                        <tr>
                            <td>Educación Física</td>
                            <td>Educación Física</td>
                            <td>Educación Física</td>
                        </tr>
                        <tr>
                        </tr>
                        <tr>
                            <td>Ciencias Sociales</td>
                            <td>Historia</td>
                            <td>Historia</td>
                        </tr>
                        <tr>
                            <td>Ciencias Naturales</td>
                            <td>Geografía</td>
                            <td>Geografía</td>
                        </tr>
                        <tr>
                            <td>Matemática</td>
                            <td>Matemática</td>
                            <td>Matemática</td>
                        </tr>
                        <tr>
                            <td>Construcción de la Ciudadanía</td>
                            <td>Construcción de la Ciudadanía</td>
                            <td>Construcción de la Ciudadanía</td>
                        </tr>
                        <tr>
                            <td>Educación Artística</td>
                            <td>Educación Artística</td>
                            <td>Educación Artística</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Biología</td>
                            <td>Biología</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>Físico Química</td>
                            <td>Físico Química</td>
                        </tr>
                        <tr>
                            <th>FORMACIÓN TÉCNICO ESPECÍFICO</th>
                            <th>FORMACIÓN TÉCNICO ESPECÍFICO</th>
                            <th>FORMACIÓN TÉCNICO ESPECÍFICO</th>
                        </tr>
                        <tr>
                            <td>Procedimientos Técnicos</td>
                            <td>Procedimientos Técnicos</td>
                            <td>Procedimientos Técnicos</td>
                        </tr>
                        <tr>
                            <td>Sistemas Tecnológicos</td>
                            <td>Sistemas Tecnológicos</td>
                            <td>Sistemas Tecnológicos</td>
                        </tr>
                        <tr>
                            <td>Lenguajes Tecnológicos</td>
                            <td>Lenguajes Tecnológicos</td>
                            <td>Lenguajes Tecnológicos</td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </>
    )
}

export default CicloBasico