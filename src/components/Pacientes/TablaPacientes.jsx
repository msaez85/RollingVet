import "./TablaPacientes.css";
import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { validationPaciente } from "../../helpers/validations";
import FormPaciente from "./FormPaciente/FormPaciente";
import {
  actualizarPaciente,
  agregarPaciente,
  borrarPaciente,
  traerPacientes,
} from "../../helpers/ApiPacientes";

const TablaPacientes = () => {
  const [mascotas, setMascotas] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

  const handleAdd = async (nuevaMascota) => {
    const errors = validationPaciente(nuevaMascota);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await agregarPaciente(nuevaMascota);
        if (response.status === 200) {
          console.log("Paciente generado exitosamente");
          setMascotas([...mascotas, nuevaMascota]);
          setShowAddModal(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEdit = async (nuevaMascota) => {
    const errors = validationPaciente(nuevaMascota);
    if (Object.keys(errors).length === 0) {
      try {
        const response = await actualizarPaciente(
          nuevaMascota,
          nuevaMascota.pid
        );
        if (response.status === 200) {
          console.log("Paciente editado exitosamente");
          const mascotasActualizadas = mascotas.map((mascota) =>
            mascota === mascotaSeleccionada
              ? { ...mascota, ...nuevaMascota }
              : mascota
          );
          setMascotas(mascotasActualizadas);
          setMascotaSeleccionada(null);
          setShowEditModal(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleDelete = async (mascotaToDelete) => {
    try {
      const response = await borrarPaciente(mascotaToDelete.pid);
      if (response.status === 200) {
        const mascotasActualizadas = mascotas.filter(
          (mascota) => mascota !== mascotaToDelete
        );
        setMascotas(mascotasActualizadas);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const traerTodosLosPacientes = async () => {
    try {
      const pacientesInicio = await traerPacientes();
      setMascotas(pacientesInicio.pacientes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    traerTodosLosPacientes();
  }, []);

  return (
    <div className="paciente-tabla">
      <article className="row my-2 d-flex justify-content-center table-responsive">
        <Table striped bordered hover className="text-center">
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
              <tr key={mascota.pid}>
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
      </article>
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
