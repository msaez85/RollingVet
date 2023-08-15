import "./TablaTurnos.css";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { validationTurno } from "../../helpers/validations";
import FormTurno from "./FormTurno/FormTurno";
import {
  actualizarTurno,
  agregarTurno,
  borrarTurno,
  traerTurnos,
} from "../../helpers/ApiTurnos";

const TablaTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);

  const handleAdd = async (nuevoTurno) => {
    const errors = validationTurno(nuevoTurno);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await agregarTurno(nuevoTurno);
        if (response.status === 200) {
          console.log("Turno generado exitosamente");
          setTurnos([...turnos, nuevoTurno]);
          setShowAddModal(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEdit = async (nuevoTurno) => {
    const errors = validationTurno(nuevoTurno);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await actualizarTurno(nuevoTurno, nuevoTurno.tid);
        if (response.status === 200) {
          console.log("Turno editado exitosamente");
          const turnosActualizados = turnos.map((turno) =>
            turno === turnoSeleccionado ? { ...turno, ...nuevoTurno } : turno
          );
          setTurnos(turnosActualizados);
          setTurnoSeleccionado(null);
          setShowEditModal(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (turnoToDelete) => {
    try {
      const response = await borrarTurno(turnoToDelete.tid);
      if (response.status === 200) {
        console.log("Turno borrado exitosamente");
        const turnosActualizados = turnos.filter(
          (turno) => turno !== turnoToDelete
        );
        setTurnos(turnosActualizados);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const traerTodosLosTurnos = async () => {
    try {
      const turnosInicio = await traerTurnos();
      setTurnos(turnosInicio.turnos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    traerTodosLosTurnos();
  }, []);

  return (
    <>
      <article className="row my-2 d-flex justify-content-center table-responsive">
        <Table striped bordered hover className="text-center">
          <thead>
            <tr>
              <th>Nombre del dueño</th>
              <th>Correo Electronico</th>
              <th>Mascota</th>
              <th>Veterinario</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Detalle</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {turnos.map((turno) => (
              <tr key={turno.tid}>
                <td>{turno.ownerName}</td>
                <td>{turno.email}</td>
                <td>{turno.name}</td>
                <td>{turno.vet}</td>
                <td>{turno.date}</td>
                <td>{turno.time}</td>
                <td>{turno.detail}</td>
                <td>
                  <Button
                    className="m-1"
                    variant="success"
                    onClick={() => {
                      setTurnoSeleccionado(turno);
                      setShowEditModal(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} className="me-2" />
                  </Button>
                  <Button
                    className="mx-1 tabla-paciente-btn"
                    variant="danger"
                    onClick={() => handleDelete(turno)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="me-2" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </article>
      <div className="tabla-turnos-btn-agregar">
        <Button
          className="btn btn-dark mx-2 my-3"
          variant="primary"
          onClick={() => setShowAddModal(true)}
        >
          Agregar Turno
        </Button>
      </div>
      <FormTurno
        show={showAddModal || showEditModal}
        onHide={() => {
          setShowAddModal(false);
          setShowEditModal(false);
          setTurnoSeleccionado(null);
        }}
        onSave={showAddModal ? handleAdd : handleEdit}
        turno={turnoSeleccionado}
        isEdit={showEditModal}
      />
    </>
  );
};

export default TablaTurnos;
