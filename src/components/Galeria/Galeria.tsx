import { useEffect, useState } from "react";
import HeaderAlt from "../HeaderAlternativo/HeaderAlt";
import { Context } from "../../context/context-dark";
import { useContext } from "react";
import './galeria.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
interface Galeria {
  url: string;
  id: number;
}

const Galeria = () => {
  /*
     {
          "url": "./assets/informtiac6.jpg",
          "id": 1
      },
      {
          "url": "./assets/pasillo.jpg",
          "id": 2
      },
      {
          "url": "./assets/informatica1.jpg",
          "id": 3
      },
      {
          "url": "./assets/info7.jpg",
          "id": 4
      },
      {
          "url": "./assets/taller.jpg",
          "id": 5
      },
      {
          "url": "./assets/superior.jpg",
          "id": 6
      },
      {
          "url": "./assets/tecnica2001.jpg",
          "id": 7
      },
      {
          "url": "./assets/trofeos.jpg",
          "id": 8
      },
      {
          "url": "./assets/básico.jpg",
          "id": 9
      },
      {
          "url": "./assets/info10.jpg",
          "id": 10
      }*/
  const [galeria, setGaleria] = useState<Galeria[]>([]);
  const { darkMode, setDarkMode } = useContext(Context);
  const [activo, setActivo] = useState(0);

  useEffect(() => {
    const fetchZ = async () => {
      const response = await fetch('./imgsfetch/index.json');
      const data = await response.json();
      setGaleria(data);
    };
    fetchZ();
  }, []);

  const handleImageClick = (id: number) => {
    setActivo(id);
    if (!document.getElementById('img-container')) {
      const div_container = document.createElement('div');
      div_container.id = 'img-container';
      setDarkMode(true)
    }
  };

  return (
    <>
      <HeaderAlt assets="./assets/trofeos.jpg" textH2="GALERIA" />
      <div className="suparcontainerGrid">
        <div className="grid-container">
          {galeria.map(item => (
            <div
              className={`${item.id === 5 ? "grid-item grid-item5" : "grid-item"} ${item.id === 10 ? "grid-item10" : ""}`}
              key={item.id}
              onClick={() => handleImageClick(item.id)}
            >
              <img src={item.url} alt="" />
            </div>
          ))}
        </div>
      </div>
      {darkMode && (
        <>
          <div className="supercontainer" onClick={(e) => {
            if ((e.target as Element).tagName === 'DIV') {
              setDarkMode(false)
            }
          }}>
            <div className="adelante" id="adelante" onClick={() => setActivo(activo + 1 < 11 ? activo + 1 : 10)}>
              <FontAwesomeIcon icon={faArrowRight} size="4x" className={activo === 10 ? 'oscuro' : 'claro'} />
            </div>
            <div className="atras" id="atras" onClick={() => setActivo(activo - 1 === 0 ? 1 : activo - 1)}>
              <FontAwesomeIcon icon={faArrowLeft} size="4x" className={activo === 1 ? 'oscuro' : 'claro'} />
            </div>
            <div className="img-container" id="img-container">
              {galeria.map(item => (
                <div
                  key={item.id}
                  className={`${activo === item.id ? 'img active transition' : 'transition'}`}
                  style={{ transform: `translateX(-${(activo - 1) * 100}%)` }}
                >
                  <img src={item.url} alt="" />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Galeria;