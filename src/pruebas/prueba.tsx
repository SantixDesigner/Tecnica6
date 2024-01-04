import { useState, useEffect } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard, Scrollbar, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import './estiloDePrueba.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode'
import 'swiper/css/effect-coverflow'
interface Galeria {
    url: string;
    id: number;
}

const Prueba = () => {

    const [galeria, setGaleria] = useState<Galeria[]>([]);

    useEffect(() => {
        const fetchZ = async () => {
            const response = await fetch('./imgsfetch/index.json');
            const data = await response.json();
            setGaleria(data);
        };
        fetchZ();
    }, []);
    return (
<>
  <Swiper
    pagination={true}
    effect="coverflow"
    navigation={true}
    speed={1000}
    mousewheel={true}
    keyboard={true}
    scrollbar={true}
    slidesPerView={5}
    spaceBetween={20}
    centeredSlides={true} 
    coverflowEffect={{
      rotate: 25, // Rotación de las diapositivas "curvadas"
      stretch: 0, // Estiramiento de las diapositivas "curvadas"
      depth: 100, // Profundidad de las diapositivas "curvadas"
      modifier: 1, // Modificador adicional para las diapositivas "curvadas"
      slideShadows: true, // Sombras en las diapositivas
    }}
    modules={[EffectCoverflow, Navigation, Pagination, Mousewheel, Keyboard, Scrollbar]}
    className="mySwiper"
    style={{ width: "70%", height: "80%" }}
  >
    {galeria.map((item, index) => (
      <SwiperSlide key={index}>
        <img src={item.url} alt="" style={{ width: "100%", height: "80%" }} />
      </SwiperSlide>
    ))}
  </Swiper>
</>
    );
};

export default Prueba;