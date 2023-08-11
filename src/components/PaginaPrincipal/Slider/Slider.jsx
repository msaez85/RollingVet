import Carousel from "react-bootstrap/Carousel";
import slider1 from "/src/assets/img/slider1.jpg";
import perro1 from "/src/assets/img/perro1.jpeg"
import gato from "/src/assets/img/gato.jpeg"


import "./slider.css"

function Slider() {
  return (
    <Carousel fade data-aos="fade-up">
      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="https://i.postimg.cc/DwjPTNjR/rollvet550.png"
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="https://i.postimg.cc/SQg683qR/rollvt300.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="https://i.postimg.cc/dtBHZLXP/zyro-image-1.png"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="https://i.postimg.cc/gj8gcKX8/ROLLINGVET30.png"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="https://i.postimg.cc/tRM67yRR/rollingvet40.png"
          alt="Third slide"
        />
      </Carousel.Item>

      
    </Carousel>
  );
}

export default Slider;
