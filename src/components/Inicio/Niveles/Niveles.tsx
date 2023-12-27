import { Col, Container, Row } from "react-bootstrap"

const Niveles = () => {
    return (
        <>
            <Container className="div-principal-Niveles" id="Niveles">
                <Row className="niveles-container">
                    <div className="niveles-niveles text-center">
                        <h2 className="sep-int" data-aos="fade-left">Niveles</h2>
                    </div>
                    <Col lg={6} className="text-center" data-aos="fade-right" style={{ overflow: "hidden" }}>
                        <img src="./assets/básico.jpg" alt="" className="imagenTarjeta una" />
                        <h3>Ciclo Básico</h3>
                        <p>Es la etapa inicial de todo estudiante en la cual se comprende el funcionamiento y el rol de la
                            escuela, en esta etapa los alumnos determinan que modalidad es la apropiada para cada uno en
                            base a sus inclinaciones; nuestra escuela cuenta con 2 modalidades: electrónica e informática
                        </p>
                    </Col>

                    <Col lg={6} className="text-center" data-aos="fade-left" style={{ overflow: "hidden" }}>
                        <img src="./assets/superior2.jpg" alt="" className="imagenTarjeta una" />
                        <h3>Ciclo Superior</h3>
                        <p>En este periodo el estudiante ya ha elegido la modalidad en base a los conocimientos adquiridos
                            en la etapa anterior, el estudiante logra profundizar los saberes y se prepara para afrontar las
                            diferentes problemáticas que le serán de gran utilidad al egresarse de la escuela</p>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Niveles