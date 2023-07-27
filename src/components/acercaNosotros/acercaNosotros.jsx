import React from "react";
import Card from "react-bootstrap/Card";
import "animate.css";
import "./acercaNosotros.css"; 

const personas = [
  {
    nombre: "Mario Saez",
    descripcion: "Breve descripción de Mario Saez",
    fotoURL: "https://via.placeholder.com/150",
    
  },
  {
    nombre: "Sebastian Luna",
    descripcion: "Breve descripción de Sebastián Luna",
    fotoURL: "https://via.placeholder.com/150",
    
  },
  {
    nombre: "Rodrigo Contreras",
    descripcion: "Breve descripción de Rodrigo Contreras",
    fotoURL: "https://via.placeholder.com/150",
     

  },
  {
    nombre: "Nicolás Agüero",
    descripcion: "Breve descripción de Nicolás Agüero", 
    fotoURL: "https://via.placeholder.com/150",
     

  },
  {
    nombre: "Luciano Durán",
    descripcion: "Breve descripción de Luciano Durán",
    fotoURL: "https://via.placeholder.com/150", 

  },
];

const AcercaDeNosotros = () => {
  return (
    <div className="container">
      <h2>Nuestro team</h2>
      <div className="row justify-content-center">
        {personas.map((persona, index) => (
          <div key={index} className="col-md-6 col-lg-4 col-sm-4">
            <Card
              className="mx-2 my-2 animate__animated animate__fadeInUp"
              style={{ width: "100%" }}
            >
              <Card.Img variant="top" src={persona.fotoURL} alt={persona.nombre} />
              <Card.Body>
                <Card.Title>{persona.nombre}</Card.Title>
                <Card.Text>{persona.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcercaDeNosotros;