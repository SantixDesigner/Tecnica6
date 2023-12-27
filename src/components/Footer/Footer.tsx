import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Col, Row } from 'react-bootstrap'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer className='bg-dark'>
                <Container className='w-100 footer'>
                    <Row className="row seccion-contacto" data-aos="zoom-in-out" id="seccion-contacto">
                        <Col lg={6} sm={12} className='contacto-facebook' data-aos="fade-right">
                            <p className="text-center">Ubicación: Centenario 3385 - Isidro Casanova - Provincia de Buenos Aires.</p>
                            <p className="text-center">Secretaría: 4625-3497 | Taller 4625-5963</p>
                            <p className="d-flex texto-footer">Siguenos en: <a href="https://www.facebook.com/Tecnica6casanova"><FontAwesomeIcon icon={faFacebook} className='ms-2'/></a></p>
                        </Col>
                        <Col lg={6} sm={12}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18556.77871222934!2d-58.57407017257236!3d-34.69494473752025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc6151b90a33f%3A0x4f6ccca5b2d439a0!2sEscuela%20tecnica%20n%C2%BA6!5e0!3m2!1ses-419!2sar!4v1692471544445!5m2!1ses-419!2sar"
                                width="400" height="250" style={{border:0}} allowFullScreen={false} loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade" className="mapa-tecnica img-fluid"></iframe>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default Footer