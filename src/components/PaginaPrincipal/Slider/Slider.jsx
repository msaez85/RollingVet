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
          src="https://i.postimg.cc/fb3vrvB2/rollingvtv2.png"
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="https://i.postimg.cc/KvHkHhwb/rollvt3.png"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="https://i.postimg.cc/zBpKrG0t/rollingvet2.png"
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="https://i.postimg.cc/Z5118TPM/ROLLINGVET3.png"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={2800}>
        <img
          className="d-block w-100 rounded-1"
          src="https://i.postimg.cc/mZv6FjQy/rollingvet4.png"
          alt="Third slide"
        />
      </Carousel.Item>

      
    </Carousel>
  );
}

export default Slider;
