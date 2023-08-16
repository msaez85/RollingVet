import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const ServiceSelection = ({ services, selectedService, onSelectService }) => {
  return (
    <div >
      <h2 className='titulo-servicios'>Servicios RollingVet</h2>
      <CardGroup className='card-seleccion-servicio'>
        {services.map((service, index) => (
          <Card style={{}}
            key={index}
            className={`cursor-pointer ${selectedService === service.title ? 'seleccion-servicios' : ''}`}
            onClick={() => onSelectService(service.title)}
          >
            <Card.Img variant="top" src={service.imageS} alt={service.title} />
            <Card.Body className='card-body-services'>
              <Card.Title>{service.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </div>
  );
};

export default ServiceSelection;