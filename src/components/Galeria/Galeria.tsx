import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import HeaderAlt from "../HeaderAlternativo/HeaderAlt"
import 'swiper/css';
import { Pagination, Navigation } from 'swiper/modules';
import Swal from "sweetalert2"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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
                                        imageUrl: item.url,
                                        imageWidth: 500,
                                        imageHeight: 312,
                                        imageAlt: "Custom image",
                                        timer: 2000,
                                        timerProgressBar: true,
                                    })
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