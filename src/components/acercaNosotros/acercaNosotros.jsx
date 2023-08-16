import React from "react";
import Card from "react-bootstrap/Card";
import "animate.css";
import "./acercaNosotros.css";

const personas = [
  {
    nombre: "Mario Saez",
    descripcion:
      "38 años, Ing. en Computacion. Software Engineer en SOVOS. Me gusta la Salsa/bachata, viajar y conocer gente nueva.",
    fotoURL: "https://i.postimg.cc/WbjYQ3N6/mario.jpg",
  },
  {
    nombre: "Rodrigo Contreras",
    descripcion: "33 años . Mecanico . Me gusta que el jurado nos apruebe el proyecto :)",
    fotoURL: "https://soundstream.netlify.app/assets/integrantes/RodrigoContreras-img..jpg",
  },
  {
    nombre: "Nicolás Agüero",
    descripcion:
      "21 años. Estudiante de ingenieria en sistemas. Me gusta ir al gimnasio y escuchar musica",
    fotoURL: "https://i.postimg.cc/mhx4tLNd/nico.jpg",
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
      <div className="row justify-content-center align-items-stretch">
        {personas.map((persona, index) => (
          <div key={index} className="col-md-6 col-lg-4 col-sm-4 d-flex">
            <Card
              className="mx-2 my-2 animate__animated animate__fadeInUp d-flex flex-column"
              style={{ width: "100%" }}
            >
              <Card.Img
                className="nosotros-image"
                variant="top"
                src={persona.fotoURL}
                alt={persona.nombre}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
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
