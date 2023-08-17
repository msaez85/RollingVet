import Carousel from "react-bootstrap/Carousel";
import { banners } from "../CarrousellProductos/banners";
import "../CarrousellProductos/CarrousellProductos.css";
import Container from "react-bootstrap/Container";
const CarrouselProductos = () => {
  return (
    <>
      <div data-aos="fade-up" className="d-flex justify-content-center">
        <Carousel fade className="classCarousell">
          <Carousel.Item interval={2500}>
            <img
              className="imageStyle d-block w-100 "
              src={banners[0].img}
              alt="1"
            />
            <Carousel.Caption className="captionStyle">
              {banners[0].text1}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="imageStyle d-block w-100 "
              src={banners[1].img}
              alt="1"
            />

            <Carousel.Caption className="captionStyle">
              {banners[1].text1}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
              className="imageStyle d-block w-100"
              src={banners[2].img}
              alt="1"
            />

            <Carousel.Caption className="captionStyle">
              {banners[2].text1}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default CarrouselProductos;
