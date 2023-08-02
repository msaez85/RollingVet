import Carousel from "react-bootstrap/Carousel";
import { banners } from "../CarrousellProductos/banners";
import "../CarrousellProductos/CarrousellProductos.css";
import Container from "react-bootstrap/Container";
const CarrouselProductos = () => {
  return (
    <>
      <Container className="d-flex justify-content-center" fluid>
        <Carousel className="classCarousell">
          <Carousel.Item>
            <img className="imageStyle" src={banners[0].img} alt="1" />
            <Carousel.Caption className="captionStyle">
              {banners[0].text1}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="imageStyle" src={banners[1].img} alt="1" />

            <Carousel.Caption className="captionStyle">
              {banners[1].text1}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="imageStyle" src={banners[2].img} alt="1" />

            <Carousel.Caption className="captionStyle">
              {banners[2].text1}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
};

export default CarrouselProductos;
