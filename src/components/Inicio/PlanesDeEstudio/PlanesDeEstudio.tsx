import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
const PlanesDeEstudio = () => {
    return (
        <>
            <Container className="planes-de-estudio">
                <Row className="text-center">
                    <div>
                        <h2 className="plan-estudio" data-aos="fade-left">Planes de Estudio</h2>
                    </div>
                    <p data-aos="fade-left" className="informacion">Informate sobre las materias de cada año</p>
                    <Col lg={4} md={12} sm={12} className="tarjeta-plan" data-aos="fade-right">
                        <Link to={'/ciclobasico'} data-aos="fade-right">Plan de estudio de Ciclo Básico</Link>
                        <p data-aos="fade-right">(Incluye las materias de 1er a 3er año)</p>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="tarjeta-plan" data-aos="fade-right">
                        <Link to={'/informatica'} data-aos="fade-right">Plan de estudio de Informática</Link>
                        <p data-aos="fade-right">(Incluye las materias de 4to a 7mo año)</p>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="tarjeta-plan" data-aos="fade-right">
                        <Link to={'/electronica'} data-aos="fade-right">Plan de estudio de Electrónica</Link>
                        <p data-aos="fade-right">(Incluye las materias de 4to a 7mo año)</p>
                    </Col>
                </Row>
                <img src="./assets/amiguitos.png" alt="" className="amigosPlanEstudio" />
            </Container>
        </>
    )
}

export default PlanesDeEstudio