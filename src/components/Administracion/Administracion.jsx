import { useState } from "react";
import { Button } from "react-bootstrap";
import "./Administracion.css";
import Pacientes from "../Pacientes/TablaPacientes";
import Turnos from "../Turnos/TablaTurnos";
import Productos from "../Productos/TablaProductos";

const Administracion = () => {
  const [mostarDatos, setMostarDatos] = useState("pacientes");

  const cambiarTabla = (value) => {
    setMostarDatos(value);
  };

  return (
    <>
    <div className="titulo-admin">
      <h2>Administración RollingVet</h2>
    </div>
      <div className="administracion-btn">
        <Button
          className={mostarDatos === "pacientes" ? "btn btn-dark mx-2" : "btn btn-secondary mx-2"}
          onClick={() => cambiarTabla("pacientes")}
        >
          Pacientes
        </Button>
        <Button
          className={mostarDatos === "turnos" ? "btn btn-dark mx-2" : "btn btn-secondary mx-2"}
          onClick={() => cambiarTabla("turnos")}
        >
          Turnos
        </Button>
        <Button
          className={mostarDatos === "productos" ? "btn btn-dark mx-2" : "btn btn-secondary mx-2"}
          onClick={() => cambiarTabla("productos")}
        >
          Productos
        </Button>
      </div>
      <div>{mostarDatos === "pacientes" ? <Pacientes /> : mostarDatos === "turnos" ? <Turnos /> : <Productos />}</div>
    </>
  );
};

export default Administracion;
