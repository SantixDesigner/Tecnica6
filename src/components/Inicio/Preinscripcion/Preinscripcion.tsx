import { Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Preinscripcion = () => {
    return (
        <>
            <Container className="planes-de-estudio preinscripcion">
                <Row className="text-center">
                    <div>
                        <h2 className="plan-estudio" data-aos="fade-left">Pre-Inscripción</h2>
                    </div>
                    <div className="preinscripcion-interno">
                        <img src="./assets/pibeform.png" alt=""/>
                            <div className="preinscrip-text">
                                <p>Cada alumno nuevo que proceda de otra escuela y/o quiera anotarse a 1er año, quedará en una lista de espera previa a la inscripción. <span>La preinscripción no asegura una vacante disponible</span>, por eso mismo, <span>le recomendamos asistir presencialmente con el personal de Secretaría.</span></p>
                                <Link to={'/preinscripcion'}>Formulario</Link>
                            </div>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default Preinscripcion