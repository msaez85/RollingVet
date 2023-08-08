import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

function Banner() {
  const [images, setImages] = useState([
    'https://i.postimg.cc/HLVZZ5Lm/Sin-nombre.png','https://i.postimg.cc/G3PphgF4/Sin-nombre2.png'
  ]);

  return (
    <>
    <div fade data-aos="fade-up" style={{margin:"2rem 0rem"}}>
      <Carousel controls={false} indicators={false} >
        {images.map((image, index) => (
          <Carousel.Item key={index} interval={1800}>
            <Card style={{backgroundColor:"#FFFFFF",border:"none"}}>
              <Card.Img
                className="d-block-banner w-100 rounded-1"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
      </div>
    </>
  );
}

export default Banner;