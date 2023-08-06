import React, { useState, useEffect } from "react";
import "./FormPaciente.css";
import { Modal, Button, Form } from "react-bootstrap";

const FormPaciente = ({ show, onHide, onSave, mascota, isEdit }) => {
  const [formMascota, setFormMascota] = useState(mascota || {});

  useEffect(() => {
    setFormMascota(mascota || {});
  }, [mascota]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormMascota((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <div className="form-paciente-modal">
          <Modal.Header closeButton>
            <Modal.Title>
              {isEdit ? "Editar Paciente" : "Agregar Paciente"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="ownerName">
                <Form.Label>Nombre del dueño</Form.Label>
                <Form.Control
                  type="text"
                  name="ownerName"
                  value={formMascota.ownerName || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formMascota.email || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="phone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={formMascota.phone || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Label>Mascota</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formMascota.name || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="race">
                <Form.Label>Raza</Form.Label>
                <Form.Control
                  type="text"
                  name="race"
                  value={formMascota.race || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="species">
                <Form.Label>Especie</Form.Label>
                <Form.Control
                  type="text"
                  name="species"
                  value={formMascota.species || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn btn-dark mx-2" onClick={onHide}>
              Cerrar
            </Button>
            <Button
              className="btn btn-dark mx-2"
              onClick={() => {
                onSave(formMascota);
                onHide();
              }}
            >
              {isEdit ? "Guardar Cambios" : "Agregar Paciente"}
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default FormPaciente;
