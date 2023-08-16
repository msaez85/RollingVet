import React, { useState, useEffect } from "react";
import "./FormPaciente.css";
import { Modal, Button, Form, ModalBody } from "react-bootstrap";
import { validationPaciente } from "../../../helpers/validations";

const FormPaciente = ({ show, onHide, onSave, mascota, isEdit }) => {
  const [formMascota, setFormMascota] = useState(mascota || {});
  const [modalError, setModalError] = useState(false);
  const [errors, setErrors] = useState({});

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
            <Button
              className="btn btn-dark mx-2"
              onClick={() => {
                onHide();
                setFormMascota({});
              }}
            >
              Cerrar
            </Button>
            <Button
              className="btn btn-dark mx-2"
              onClick={() => {
                const erroresForm = validationPaciente(formMascota);
                if (Object.keys(erroresForm).length === 0) {
                  setErrors([]);
                  onSave(formMascota);
                  setFormMascota({});
                  onHide();
                } else {
                  setErrors(erroresForm);
                  setModalError(true);
                }
              }}
            >
              {isEdit ? "Guardar Cambios" : "Agregar Paciente"}
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
      {modalError && (
        <Modal
          show={modalError}
          onHide={() => setModalError(false)}
          backdrop="static"
          keyboard={true}
        >
          <Modal.Header closeButton>
            <h4>Errors! </h4>
          </Modal.Header>
          <ModalBody>
            {Object.keys(errors).map((key) => (
              <h5 key={key}>{errors[key]}</h5>
            ))}
          </ModalBody>
        </Modal>
      )}
    </>
  );
};

export default FormPaciente;
