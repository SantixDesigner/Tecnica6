import HeaderAlt from "../HeaderAlternativo/HeaderAlt"
import './Informatica.css'

const Informatica = () => {
    window.scrollTo(0, 0);
    return(
        <>
        <HeaderAlt assets="../assets/pc.jpg" textH2="INFORMÁTICA"/>
        <main>
        <h2 className="text-center mt-2">Plan de estudio de la modalidad Informática</h2>
        <h3 className="text-center display-cel mb-2">Contenido deslizable</h3>
        <div className="container-informatica">
            <table className="ms-auto me-auto">
                <tr>
                    <th>CUARTO AÑO</th>
                    <th>QUINTO AÑO</th>
                    <th>SEXTO AÑO</th>
                    <th>SÉPTIMO AÑO</th>
                </tr>
                <tr>
                    <th>FORMACIÓN GENERAL</th>
                    <th>FORMACIÓN GENERAL</th>
                    <th>FORMACIÓN GENERAL</th>
                    <th>PRÁCTICAS PROFESIONALIZANTES</th>
                </tr>
                <tr>
                    <td>Literatura</td>
                    <td>Literatura</td>
                    <td>Literatura</td>
                    <td>Practicas Profesionalizantes del Sector Informático</td>
                </tr>
                <tr>
                    <td>Inglés</td>
                    <td>Inglés</td>
                    <td>Inglés</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Educación Física</td>
                    <td>Educación Física</td>
                    <td>Educación Física</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Salud y Adolescencia</td>
                    <td>Política y Ciudadanía</td>
                    <td>Filosofía</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Historia</td>
                    <td>Historia</td>
                    <td>Arte</td>
                    <td></td>
                </tr>
                <tr>
                    <td>Geografía</td>
                    <td>Geografía</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <th>FORMACIÓN CIENTÍFICO TECNOLÓGICO</th>
                    <th>FORMACIÓN CIENTÍFICO TECNOLÓGICO</th>
                    <th>FORMACIÓN CIENTÍFICO TECNOLÓGICO</th>
                    <th>FORMACIÓN CIENTÍFICO TECNOLÓGICO</th>
                </tr>
                <tr>
                    <td>Matemática Ciclo Superior</td>
                    <td>Análisis Matemático</td>
                    <td>Matemática Aplicada</td>
                    <td>Emprendimientos Productivos y Desarrollo Local</td>
                </tr>
                <tr>
                    <td>Física</td>
                    <td>Sistemas Digitales</td>
                    <td>Sistemas Digitales</td>
                    <td>Evaluación de Proyectos</td>
                </tr>
                <tr>
                    <td>Química</td>
                    <td>Teleinformática</td>
                    <td>Investigación Operativa</td>
                    <td>Modelos y Sistemas</td>
                </tr>
                <tr>
                    <td>Tecnologías Electrónicas</td>
                    <td></td>
                    <td>Seguridad Informática</td>
                    <td>Base de Datos</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>Derechos del Trabajo</td>
                    <td></td>
                </tr>
                <tr>
                    <th>FORMACIÓN TÉCNICO ESPECÍFICA</th>
                    <th>FORMACIÓN TÉCNICO ESPECÍFICA</th>
                    <th>FORMACIÓN TÉCNICO ESPECÍFICA</th>
                    <th>FORMACIÓN TÉCNICO ESPECÍFICA</th>
                </tr>
                <tr>
                    <td>Laboratorio de Programación</td>
                    <td>Laboratorio de Programación</td>
                    <td>Laboratorio de Programación</td>
                    <td>Proyecto, Diseño e Implementación de Sistemas Computacionales</td>
                </tr>
                <tr>
                    <td>Laboratorio de Hardware</td>
                    <td>Laboratorio de Hardware</td>
                    <td>Laboratorio de Hardware</td>
                    <td>Instalación, Mantenimiento y Reparación de Sistemas Computacionales</td>
                </tr>
                <tr>
                    <td>Laboratorio de Sistemas Operativos</td>
                    <td>Laboratorio de Sistemas Operativos</td>
                    <td>Laboratorio de Sistemas Operativos</td>
                    <td>Instalación, Mantenimiento y Reparación de Redes Informáticas</td>
                </tr>
                <tr>
                    <td>Laboratorio de Aplicaciones</td>
                    <td>Laboratorio de Aplicaciones</td>
                    <td>Laboratorio de Aplicaciones</td>
                    <td></td>
                </tr>
            </table>
        </div>
    </main>
        </>
    )
}

export default Informatica