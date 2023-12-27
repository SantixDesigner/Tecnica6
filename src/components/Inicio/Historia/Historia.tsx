import { Row, Col, Container } from "react-bootstrap"

const Historia = () => {
    return (
        <>
            <Container className="container-historia mt-5">
                <Row id="Historia">
                    <Col lg={7}>
                        <img src="./assets/tecnica2001.jpg" className="unaZ" alt="" data-aos="fade-right" />
                    </Col>
                    <Col lg={5} data-aos="fade-left">
                        <h2>Historia</h2>
                        <p className="texto-historia">
                            La Escuela de Educación Técnica 6 de La Matanza
                            nació en 1986. Después de luchar por un espacio
                            propio, se obtuvo un terreno en Ruta 3 y Centenario. A pesar de desafíos, como aulas
                            prefabricadas y
                            logística creativa para la biblioteca, la escuela creció, iniciando con la especialidad de
                            Electrónica. En 1997 se inauguró la especialidad de Informática. Hoy, reconocida
                            por la calidad educativa, ofrece opciones en Informática y Electrónica, simbolizando un
                            crecimiento
                            continuo.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Historia