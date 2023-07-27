import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import "./testimonios.css";
import React, { useState, useEffect } from 'react';

const testimoniosData = [
  {
    name: 'Marcos',
    imageSrc: 'https://www.labsaenzrenauld.com/wp-content/uploads/2020/10/Perfil-hombre-ba%CC%81sico_738242395.jpg',
    testimonio: 'Excelente atención y profesionalismo',
    date: '2 days ago',
  },
  {
    name: 'Claudia',
    imageSrc: 'https://img.aeroexpo.online/images_ar/projects/images-g/elevar-perfil-mujeres-ingenieria-6393-14652745.jpg',
    testimonio: 'Productos de calidad y buena atención',
    date: '5 days ago',
  },
  {
    name: 'Lionel',
    imageSrc: 'https://www.clarin.com/img/2021/08/12/RsGKHmj9x_720x0__1.jpg',
    testimonio: 'Un poco costoso pero lo vale',
    date: '6 days ago',
  },
];

const Testimonios = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <h3 style={{ textAlign: "center", marginTop: "1rem", color: "rgb(211, 98, 22)" }}>NUESTROS CLIENTES</h3>
        <div className="card-testimonios">
          {testimoniosData.map((testimonio, index) => (
            <Card className="card-individuales text-center" key={index}>
              <Card.Header>{testimonio.name}</Card.Header>
              <Card.Body>
                <Figure>
                  <Figure.Image
                    className='rounded-3'
                    style={{width:"300px",height:"300px"}}
                    alt={testimonio.name}
                    src={testimonio.imageSrc}
                  />
                </Figure>
                <Card.Text>
                  "{testimonio.testimonio}"
                </Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">{testimonio.date}</Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonios;
