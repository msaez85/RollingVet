import "./servicios.css";
import React, { useState, useEffect } from 'react';
import { Card, CardGroup, Button } from 'react-bootstrap';

const Servicos = () => {
 

  const serviciosData = [
    {
      title: 'Peluqueria',
      imageSrc: 'https://sumimascotas.com/wp-content/uploads/2023/05/7.-Que-es-una-peluqueria-canina-1.jpg',
      description: 'Con baño y corte de pelo de acuerdo a cada raza.',
    },
    {
      title: 'Cirugias',
      imageSrc: 'https://www.clinicaveterinariaejea.com/wp-content/uploads/2014/05/clinica_veterinaria_ejea_073-1024x682.jpeg',
      description: 'Contamos con guardias, rayos X, ecografías y colocación de chips.',
    },
    {
      title: 'Vacunacion',
      imageSrc: 'https://www.sudoesteba.com/adjuntos/800/sudoba/2023/04/cloudfrontuseast1.images.arcpublishing-2.png',
      description: 'Respetando el calendario de vacunación de cada animal.',
    },
    {
      title: 'Pet Shop',
      imageSrc: 'https://1.bp.blogspot.com/-HrfjrldTqI0/YKGj4BEcuvI/AAAAAAAAKd4/61vZpkKOtw0epE6fGz_fLAv9PWdz-T7lQCLcBGAsYHQ/w1200-h630-p-k-no-nu/pet-shop-online.jpg',
      description: 'Los mejores productos para su mascota.',
    },
  ];


  return (
    <div data-aos='fade-up'>
      <div>
        <h3 style={{ textAlign: "center", marginTop: "1rem", color: "rgb(211, 98, 22)" }}>
          NUESTROS SERVICIOS
        </h3>
      </div>
      <CardGroup className="card-group-principal">
        {serviciosData.map((servicio, index) => (
          <Card className="card-principal" key={index}>
            <Card.Img variant="top" src={servicio.imageSrc} />
            <Card.Body className="card-body-principal">
              <h4>{servicio.title}</h4>
              <Card.Text>
                {servicio.description}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <div className="ver">
        <Button variant="outline-success">Ver Más</Button>
      </div>
    </div>
  );
}

export default Servicos;