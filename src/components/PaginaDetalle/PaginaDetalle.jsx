import React from "react";
import "./PaginaDetalle.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const planes = [
  {
    id: 1,
    titulo: "Plan: primeros pasos",
    precio: "$USD 99,99",
    descripcion:
      "Ofrecemos una asistencia completa y de calidad a tu mascota de 0 a 5 años. Nuestro principal objetivo es mantener su salud y su bienestar y ayudarlos a restablecerse cuando están enfermos. Para ello, contamos con un personal altamente cualificado e instalaciones modernas y bien equipadas.",
    imagen: "https://i.postimg.cc/Xp3464y0/cachorro.jpg",
    video: "https://www.youtube.com/embed/H4JE6XDR6UE",
  },
  {
    id: 2,
    titulo: "Plan: madurando",
    precio: "$USD 199,99",
    descripcion:
      "Estamos aquí para cuidar a tu mascota de 5 a 10 años y atender sus necesidades básicas de salud. Nos enfocamos en la atención preventiva y de enfermedades menores. Todos los paquetes de vacunas incluyen un examen médico, diagnósticos relevantes y recomendaciones de tratamiento.",
    imagen: "https://i.postimg.cc/BXgsqkxP/madurando.jpg",
    video: "https://www.youtube.com/embed/K42R1FG6oX4?start=7"
  },
  {
    id: 3,
    titulo: "Plan: Adultos",
    precio: "$USD 299,99",
    descripcion:
      "Contamos con servicios geriátricos los cuales recomendamos para mascotas a partir de los 10 años de edad, con ellos podemos detectar enfermedades antes de la presentación de los signos clínicos y comenzar una estrategia para que nuestros amigos tengan una vida más larga y de mejor calidad.",
    imagen: "https://i.postimg.cc/JtjMFG0q/adulto.jpg",
    video: "https://www.youtube.com/embed/4sVPBVhOAgU?start=7",
  },
];

const PaginaDetalle = () => {
  const params = useParams();
  const [plan, setplan] = useState([]);

  useEffect(() => {
    setplan(planes.find((plan) => plan.id == params.id));
  }, []);

  return (
    <>
      <main className="main">
        <div className="detalle container-fluid d-flex flex-row justify-content-center align-items-start">
          <div className="img-detalle">
            <img
              src={plan.imagen}
              className="img-main img-fluid"
              alt="detail"
            />
          </div>
          <div className="descripcion-detalle container-fluid d-flex flex-column justify-content-start align-items-center">
            <h2 className="text-black fw-bold fs-2 text-center mb-5">
              {plan.titulo}
            </h2>
            <div className="container-fluid d-flex flex-row justify-content-start align-items-center mb-5">
              <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
                <h4>Precio</h4>
                <h4>{plan.precio}</h4>
              </div>
            </div>
            <p className="sinopsis">{plan.descripcion}</p>
            <iframe className ="my-5" width="520" height="315" src={plan.video}></iframe>
          </div>
        </div>
      </main>
    </>
  );
};

export default PaginaDetalle;
