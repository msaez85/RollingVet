import "./TablaTurnos.css";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

import FormTurno from "./FormTurno/FormTurno";

const turnosInicial = [
  {
    ownerName: "Juan Perez",
    name: "pochoclo",
    vet: "Jose Veterinario",
    date: "17/08/2023",
    time: "09:00",
    detail: "no se siente bien",
  },
  {
    ownerName: "Juana Perez",
    name: "pepe",
    vet: "Jose Veterinario",
    date: "17/08/2023",
    time: "09:30",
    detail: "no se siente bien",
  },
  {
    ownerName: "Jose Perez",
    name: "pancho",
    vet: "Jose Veterinario",
    date: "17/08/2023",
    time: "10:00",
    detail: "no se siente bien",
  },
  {
    ownerName: "Carlos Perez",
    name: "chicho",
    vet: "Jose Veterinario",
    date: "17/08/2023",
    time: "10:30",
    detail: "no se siente bien",
  },
  {
    ownerName: "Roberto Perez",
    name: "tito",
    vet: "Jose Veterinario",
    date: "17/08/2023",
    time: "11:00",
    detail: "no se siente bien",
  },
  {
    ownerName: "Luis Perez",
    name: "pepe",
    vet: "Jose Veterinario",
    date: "17/08/2023",
    time: "11:30",
    detail: "no se siente bien",
  },
];

const TablaTurnos = () => {
  const [turnos, setTurnos] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);

  const handleAdd = (nuevoTurno) => {
    setTurnos([...turnos, nuevoTurno]);
    setShowAddModal(false);
  };

  const handleEdit = (nuevoTurno) => {
    const turnosActualizados = turnos.map((turno) =>
      turno === turnoSeleccionado ? { ...turno, ...nuevoTurno } : turno
    );
    setTurnos(turnosActualizados);
    setTurnoSeleccionado(null);
    setShowEditModal(false);
  };

  const handleDelete = (turnoToDelete) => {
    const turnosActualizados = turnos.filter(
      (turno) => turno !== turnoToDelete
    );
    setTurnos(turnosActualizados);
  };

  useEffect(() => {
    setTurnos(turnosInicial);
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre del dueño</th>
            <th>Mascota</th>
            <th>Veterinario</th>
            <th>Fecha</th>
            <th>Hora</th>
            <th>Detalle</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {turnos.map((turno, index) => (
            <tr key={index}>
              <td>{turno.ownerName}</td>
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
