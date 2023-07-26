import Button from "react-bootstrap/Button";

import "./planes.css";

function Planes() {
  return (
    <>
      <div className="contenedor-principal" data-aos="fade-up">
        <div className="container w-75" data-aos="zoom-in">
          <h1 style={{color:"rgb(211, 98, 22)"}}>La obra social de tu mascota es RollingVet.</h1>
          <h5>
            Si estabas buscando un plan de salud para tu perro y gato, RollingVet es tu
            mejor decisión ya que los cuidamos con la mejor cobertura de Tucuman.
          </h5>
          <Button>Plan Cachorros</Button>
          <Button>Plan Madurando</Button>
          <Button>Plan Adultos</Button>
        </div>
        <div>
            <img src="https://planes.ikeargentina.com.ar/mascotasonline/images/landing_mascotas_online_b.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Planes;
