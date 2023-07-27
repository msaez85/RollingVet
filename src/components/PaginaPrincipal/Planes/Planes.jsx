import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
          <Button><Link to="/planes/1">Plan Cachorros</Link></Button>
          <Button><Link to="/planes/2">Plan Madurando</Link></Button>
          <Button><Link to="/planes/3">Plan Adultos</Link></Button>
        </div>
        <div>
            <img src="https://planes.ikeargentina.com.ar/mascotasonline/images/landing_mascotas_online_b.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Planes;
