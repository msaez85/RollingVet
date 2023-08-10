import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Administracion.css";
import Pacientes from "../Pacientes/TablaPacientes";
import Turnos from "../Turnos/TablaTurnos";

const Administracion = () => {
  const [mostarPacientes, setMostarPacientes] = useState(true);

  const cambiarTabla = (value) => {
    setMostarPacientes(value);
  };

  return (
    <>
      <div className="administracion-btn">
        <Button
          className={mostarPacientes ? "btn btn-dark mx-2" : "btn btn-secondary mx-2"}
          onClick={() => cambiarTabla(true)}
        >
          Pacientes
        </Button>
        <Button
          className={mostarPacientes ? "btn btn-secondary mx-2" : "btn btn-dark mx-2"}
          onClick={() => cambiarTabla(false)}
        >
          Turnos
        </Button>
      </div>
      <div>{mostarPacientes ? <Pacientes /> : <Turnos />}</div>
    </>
  );
};

export default Administracion;
