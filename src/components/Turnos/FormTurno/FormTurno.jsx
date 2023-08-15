import React, { useState, useEffect } from "react";
import "./FormTurno.css";
import { Modal, Button, Form } from "react-bootstrap";

const FormTurno = ({ show, onHide, onSave, turno, isEdit }) => {
  const [formTurno, setFormTurno] = useState(turno || {});

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
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn btn-dark mx-2"
              onClick={() => {
                onHide();
                setFormTurno({});
              }}
            >
              Cerrar
            </Button>
            <Button
              className="btn btn-dark mx-2"
              onClick={() => {
                onSave(formTurno);
                setFormTurno({});
                onHide();
              }}
            >
              {isEdit ? "Guardar Cambios" : "Agregar Turno"}
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default FormTurno;
