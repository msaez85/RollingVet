import "./TablaPacientes.css";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

import FormPaciente from "./FormPaciente/FormPaciente";

const mascotasInicial = [
  {
    ownerName: "Juan Perez",
    email: "juan@mail.com",
    phone: "123-456-7890",
    name: "pochoclo",
    race: "Persia",
    species: "gato",
  },
  {
    ownerName: "Juana Perez",
    email: "juana@mail.com",
    phone: "987-654-3210",
    name: "pepe",
    race: "Golden Retriever",
    species: "perro",
  },
  {
    ownerName: "Jose Perez",
    email: "jose@mail.com",
    phone: "123-456-7890",
    name: "pancho",
    race: "Salchicha",
    species: "perro",
  },
  {
    ownerName: "Carlos Perez",
    email: "carlos@mail.com",
    phone: "987-654-3210",
    name: "chicho",
    race: "Pastor Aleman",
    species: "perro",
  },
  {
    ownerName: "Roberto Perez",
    email: "roberto@mail.com",
    phone: "123-456-7890",
    name: "tito",
    race: "Cacatua",
    species: "loro",
  },
  {
    ownerName: "Luis Perez",
    email: "luis@mail.com",
    phone: "987-654-3210",
    name: "pepe",
    race: "Doverman",
    species: "perro",
  },
];

const TablaPacientes = () => {
  const [mascotas, setMascotas] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

  const handleAdd = (nuevaMascota) => {
    setMascotas([...mascotas, nuevaMascota]);
    setShowAddModal(false);
  };

  const handleEdit = (nuevaMascota) => {
    const mascotasActualizadas = mascotas.map((mascota) =>
      mascota === mascotaSeleccionada
        ? { ...mascota, ...nuevaMascota }
        : mascota
    );
    setMascotas(mascotasActualizadas);
    setMascotaSeleccionada(null);
    setShowEditModal(false);
  };

  const handleDelete = (mascotaToDelete) => {
    const mascotasActualizadas = mascotas.filter(
      (mascota) => mascota !== mascotaToDelete
    );
    setMascotas(mascotasActualizadas);
  };

  useEffect(() => {
    setMascotas(mascotasInicial);
  }, []);

  return (
    <div className="paciente-tabla">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre del dueño</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Mascota</th>
            <th>Raza</th>
            <th>Especie</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mascotas.map((mascota) => (
            <tr key={mascota.email}>
              <td>{mascota.ownerName}</td>
              <td>{mascota.email}</td>
              <td>{mascota.phone}</td>
              <td>{mascota.name}</td>
              <td>{mascota.race}</td>
              <td>{mascota.species}</td>
              <td>
                <Button
                  className="m-1"
                  variant="success"
                  onClick={() => {
                    setMascotaSeleccionada(mascota);
                    setShowEditModal(true);
                  }}
                >
                  <FontAwesomeIcon icon={faPencilAlt} className="me-2" />
                </Button>
                <Button
                  className="mx-1 tabla-paciente-btn"
                  variant="danger"
                  onClick={() => handleDelete(mascota)}
                >
                  <FontAwesomeIcon icon={faTrash} className="me-2" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="tabla-pacientes-btn-agregar">
        <Button
          className="btn btn-dark mx-2 my-3"
          variant="primary"
          onClick={() => setShowAddModal(true)}
        >
          Agregar Paciente
        </Button>
      </div>
      <FormPaciente
        show={showAddModal || showEditModal}
        onHide={() => {
          setShowAddModal(false);
          setShowEditModal(false);
          setMascotaSeleccionada(null);
        }}
        onSave={showAddModal ? handleAdd : handleEdit}
        mascota={mascotaSeleccionada}
        isEdit={showEditModal}
      />
    </div>
  );
};

export default TablaPacientes;
