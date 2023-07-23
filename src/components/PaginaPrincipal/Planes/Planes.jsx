import Button from "react-bootstrap/Button";

import "./planes.css";

function Planes() {
  return (
    <>
      <div className="contenedor-principal" data-aos="fade-up">
        <div className="container w-75" data-aos="zoom-in">
          <h2>La obra social de tu mascota es RollingVet.</h2>
          <h5>
            Si estabas buscando un plan de salud para tu perro y gato, RollingVet es tu
            mejor decisión ya que los cuidamos con la mejor cobertura de Tucuman.
          </h5>
          <Button>Nuestros Planes</Button>
        </div>
        <div>
            <img src="https://planes.ikeargentina.com.ar/mascotasonline/images/landing_mascotas_online_b.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Planes;
