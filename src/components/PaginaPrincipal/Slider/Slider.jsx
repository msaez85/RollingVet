import Carousel from "react-bootstrap/Carousel";
import slider1 from "/src/assets/img/slider1.jpg";
import perro1 from "/src/assets/img/perro1.jpeg"
import gato from "/src/assets/img/gato.jpeg"


import "./slider.css"

function Slider() {
  return (
    <Carousel data-aos="fade-up">
      <Carousel.Item >
        <img
          className="d-block w-100 rounded-1"
          src={gato}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Atencion Personalizada</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-1"
          src={perro1}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Urgencias las 24 HS</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-1"
          src={slider1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Su mejor amigo , en las mejores manos</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 rounded-1"
          src={slider1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Su mejor amigo , en las mejores manos</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
