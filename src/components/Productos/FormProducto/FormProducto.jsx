import React, { useState, useEffect } from "react";
import "./FormProducto.css";
import { Modal, Button, Form, ModalBody } from "react-bootstrap";
import { validationProducto } from "../../../helpers/validations";

const FormProducto = ({ show, onHide, onSave, producto, isEdit }) => {
  const [formProducto, setFormProducto] = useState(producto || {});
  const [modalError, setModalError] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormProducto(producto || {});
  }, [producto]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormProducto((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Modal show={show} onHide={onHide}>
        <div className="form-producto-modal">
          <Modal.Header closeButton>
            <Modal.Title>
              {isEdit ? "Editar Producto" : "Agregar Producto"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Nombre del Producto</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formProducto.name || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="detail">
                <Form.Label>Detalle</Form.Label>
                <Form.Control
                  type="text"
                  name="detail"
                  value={formProducto.detail || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="price">
                <Form.Label>Precio</Form.Label>
                <Form.Control
                  type="text"
                  name="price"
                  value={formProducto.price || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="img">
                <Form.Label>Link Imagen</Form.Label>
                <Form.Control
                  type="text"
                  name="img"
                  value={formProducto.img || ""}
                  onChange={handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="btn mx-2 form-producto-btn"
              onClick={() => {
                onHide();
                setFormProducto({});
              }}
            >
              Cerrar
            </Button>
            <Button
              className="btn mx-2 form-producto-btn"
              onClick={() => {
                const erroresForm = validationProducto(formProducto);
                if (Object.keys(erroresForm).length === 0) {
                  setErrors([]);
                  onSave(formProducto);
                  setFormProducto({});
                  onHide();
                } else {
                  setErrors(erroresForm);
                  setModalError(true);
                }
              }}
            >
              {isEdit ? "Guardar Cambios" : "Agregar Producto"}
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

export default FormProducto;
