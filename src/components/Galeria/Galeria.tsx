import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import HeaderAlt from "../HeaderAlternativo/HeaderAlt"
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';
import Swal from "sweetalert2"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js'
import './galeria.css'
interface Galeria {
    url: string,
    id: number
}

const Galeria = () => {
    const [galeria, setGaleria] = useState<Galeria[]>([])
    useEffect(() => {
        const fetchZ = async () => {
            const response = await fetch('./imgsfetch/index.json')
            const data = await response.json()
            setGaleria(data)
        }
        fetchZ()
    }, [galeria])

    return (
        <>
            <HeaderAlt assets="./assets/trofeos.jpg" textH2="GALERIA" />
            <Container className="mt-2">
                <Row>
                    {galeria.map(item => {
                        return (<>
                            <Col lg={4} className="my-2">
                                <img src={item.url} alt="" className="imagen" onClick={() => {
                                    Swal.fire({
                                        html: `
                                    <div class=swiper>
                                     
                                      <div class="swiper-wrapper">
                                        <div class="swiper-slide">Slide 1</div>
                                        <div class="swiper-slide">Slide 2</div>
                                        <div class="swiper-slide">Slide 3</div>
                                      </div>
                                      <div class="swiper-pagination"></div>
                                    

                                      <div class="swiper-button-prev"></div>
                                      <div class="swiper-button-next"></div>
                                    
                                      <div class="swiper-scrollbar"></div>
                                    </div>`})
                                }} />
                            </Col>
                        </>)
                    })}
                </Row>
            </Container>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
                initialSlide={2}
            >
                <SwiperSlide><img src="./assets/trofeos.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./assets/trofeos.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./assets/trofeos.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./assets/trofeos.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./assets/trofeos.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="./assets/trofeos.jpg" alt="" /></SwiperSlide>
            </Swiper>

        </>
    )
}

export default Galeria