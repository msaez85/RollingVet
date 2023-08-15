import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import "./planes.css";

function Planes() {
  return (
    <>
      <div className="contenedor-principal my-5" data-aos="fade-up">
        <div className="container w-100" data-aos="zoom-in"
        style={{boxShadow:"none"}}>
          <h2 style={{color:"#0D1347"}}>La obra social de tu mascota es RollingVet.</h2>
          <p style={{color:"black",fontSize:"1.2rem"}}> 
            Si estabas buscando un plan de salud para tu perro y gato, RollingVet es tu
            mejor decisión ya que los cuidamos con la mejor cobertura de Tucuman.
          </p>
          <div className="botones-planes d-flex">
          <Button><Link className="plan-link" to="/planes/1">Plan Cachorros</Link></Button>
          <Button><Link className="plan-link" to="/planes/2">Plan Madurando</Link></Button>
          <Button><Link className="plan-link" to="/planes/3">Plan Adultos</Link></Button>
          </div>
          
        </div>
        <div>
            <img style={{width:"90%" ,height:"90%"}} src="https://i.postimg.cc/0yn4Y8yp/landing-mascotas-online-555b.png" alt="planes" />
        </div>
      </div>
    </>
  );
}

export default Planes;
