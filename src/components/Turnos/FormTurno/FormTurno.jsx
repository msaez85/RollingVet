import React, { useState, useEffect } from "react";
import "./FormTurno.css";
import { Modal, Button, Form, ModalBody } from "react-bootstrap";
import { validationTurno } from "../../../helpers/validations";

const FormTurno = ({ show, onHide, onSave, turno, isEdit }) => {
  const [formTurno, setFormTurno] = useState(turno || {});
  const [modalError, setModalError] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormTurno(turno || {});
  }, [turno]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormTurno((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <div className="form-turno-modal">
          <Modal.Header closeButton>
            <Modal.Title>
              {isEdit ? "Editar Turno" : "Agregar Turno"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="ownerName">
                <Form.Label>Nombre del dueño</Form.Label>
                <Form.Control
                  type="text"
                  name="ownerName"
                  value={formTurno.ownerName || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Correo del dueño</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formTurno.email || ""}
                  onChange={handleChange}
                  disabled={isEdit}
                />
              </Form.Group>
              <Form.Group controlId="name">
                <Form.Label>Mascota</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formTurno.name || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="vet">
                <Form.Label>Veterinario</Form.Label>
                <Form.Control
                  type="text"
                  name="vet"
                  value={formTurno.vet || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="date">
                <Form.Label>Fecha</Form.Label>
                <Form.Control
                  type="text"
                  name="date"
                  value={formTurno.date || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="time">
                <Form.Label>Hora</Form.Label>
                <Form.Control
                  type="text"
                  name="time"
                  value={formTurno.time || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="detail">
                <Form.Label>Detalle</Form.Label>
                <Form.Control
                  type="textarea"
                  name="detail"
                  value={formTurno.detail || ""}
                  onChange={handleChange}
                  disabled={isEdit}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn mx-2 form-turno-btn"
              onClick={() => {
                onHide();
                setFormTurno({});
              }}
            >
              Cerrar
            </Button>
            <Button
              className="btn mx-2 form-turno-btn"
              onClick={() => {
                const erroresForm = validationTurno(formTurno);
                if (Object.keys(erroresForm).length === 0) {
                  setErrors([]);
                  onSave(formTurno);
                  setFormTurno({});
                  onHide();
                } else {
                  setErrors(erroresForm);
                  setModalError(true);
                }
              }}
            >
              {isEdit ? "Guardar Cambios" : "Agregar Turno"}
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

export default FormTurno;
