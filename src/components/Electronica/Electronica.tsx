import HeaderAlt from "../HeaderAlternativo/HeaderAlt";
import '../Informatica/Informatica.css'
const Electronica = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <HeaderAlt assets="../assets/electro.png" textH2="ELECTRÓNICA" />
            <h2 className="text-center mt-2">Plan de estudio de la modalidad Electrónica</h2>
            <h3 className="text-center display-cel mb-2">Contenido deslizable</h3>
            <main className="container-informatica">
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
                        <td>Practicas Profesionalizantes del Sector Electrónico</td>
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
                        <td>Análisis de Modelos Circuitales</td>
                        <td>Sistemas de Comunicaciones</td>
                        <td>Sistemas de Control</td>
                    </tr>
                    <tr>
                        <td>Química</td>
                        <td>Lenguajes Electrónicos</td>
                        <td>Instalaciones y Máquinas Eléctricas</td>
                        <td>Sistemas de Comunicaciones</td>
                    </tr>
                    <tr>
                        <td>Fundamentos de los Modelos Circuitales</td>
                        <td></td>
                        <td>Sistemas Productivos</td>
                        <td>Seguridad, Higiene y Protección Ambiental</td>
                    </tr>
                    <tr>
                        <td>Tecnología Electrónica</td>
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
                        <td></td>
                        <td>Diseño Asistido y Simulación Electrónica</td>
                        <td>Lenguajes ELectrónicos</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Aplicaciones de la Electrónica Analógica</td>
                        <td>Aplicaciones de la Electrónica Analógica</td>
                        <td>Aplicaciones de la Electrónica Analógica</td>
                        <td>Proyecto y Diseño Electrónico</td>
                    </tr>
                    <tr>
                        <td>Aplicaciones de Electrónica Digital</td>
                        <td>Aplicaciones de Electrónica Digital</td>
                        <td>Aplicaciones de Electrónica Digital</td>
                        <td>Instalaciones Industriales</td>
                    </tr>
                    <tr>
                        <td>Montaje de Proyectos Electrónicos</td>
                        <td>Montaje de Proyectos Electrónicos</td>
                        <td>Montaje de Proyectos Electrónicos</td>
                        <td>Electrónica Aplicada</td>
                    </tr>
                </table>
            </main>
        </>
    )
}

export default Electronica