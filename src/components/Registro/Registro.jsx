import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MdAccountCircle,
  MdMailOutline,
  MdKey,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { agregarUsuario } from "../../helpers/ApiUsuarios";
import Button from "react-bootstrap/Button";
import { ModalBody } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { validationRegistro } from "../../helpers/validations";
import "./registro.css";

const Registro = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [errors, setErrors] = useState({});
  const [value, setValue] = useState({
    usuario: "",
    email: "",
    password1: "",
    password2: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    const erroresForm = validationRegistro(value);
    if (Object.keys(erroresForm).length === 0) {
      const nuevoUsuario = {
        nombre: value.usuario,
        email: value.email,
        password: value.password1,
        rol: "USER",
      };
      try {
        const response = await agregarUsuario(nuevoUsuario);
        if (response.status === 200) {
          console.log("Usuario generado exitosamente");
          setShowModal(true);
          setValue({
            usuario: "",
            email: "",
            password1: "",
            password2: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setErrors(erroresForm);
      setModalError(true);
    }
  };

  return (
    <>
      <Form
        data-aos="fade-up"
        onSubmit={handleSumbit}
        className="registro-usuario"
      >
        <h3
          style={{ textAlign: "center", marginTop: "2rem", color: "#0D1347" }}
        >
          Registro
        </h3>
        <div className="img-registro d-flex justify-content-center align-items-center">
          <img
            src="https://img.icons8.com/?size=512&id=124077&format=png"
            alt="imagenregistro"
            style={{ width: "120px", height: "120px" }}
          />
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Usuario</Form.Label>
          <div className="input-registro">
            <MdAccountCircle />
            <Form.Control
              placeholder="MiUsuario..."
              minLength={4}
              maxLength={20}
              required
              type="text"
              name="usuario"
              id="usuario"
              value={value.usuario}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <div className="input-registro">
            <MdMailOutline />
            <Form.Control
              required
              placeholder="MiCorreo@...."
              type="email"
              name="email"
              id="email"
              value={value.email}
              onChange={handleChange}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <div className="input-registro">
            <MdKey />
            <Form.Control
              required
              placeholder="*******"
              type={showPassword1 ? "text" : "password"}
              name="password1"
              id="password1"
              value={value.password1}
              onChange={handleChange}
            />
            <Button
              className="boton-password"
              variant="secondary"
              onClick={() => setShowPassword1(!showPassword1)}
            >
              {showPassword1 ? <MdVisibilityOff /> : <MdVisibility />}
            </Button>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Ingrese su contraseña nuevamente</Form.Label>
          <div className="input-registro">
            <MdKey />
            <Form.Control
              placeholder="*******"
              required
              type={showPassword2 ? "text" : "password"}
              name="password2"
              id="password2"
              value={value.password2}
              onChange={handleChange}
            />
            <Button
              className="boton-password"
              variant="secondary"
              onClick={() => setShowPassword2(!showPassword2)}
            >
              {showPassword2 ? <MdVisibilityOff /> : <MdVisibility />}
            </Button>
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            required
            type="checkbox"
            label={<a href="/404">Acepto terminos y condiciones</a>}
          />
        </Form.Group>

        <div className="boton-submit">
          <Button variant="primary" type="submit">
            Registrarse
          </Button>
        </div>
      </Form>

      {showModal && (
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Registro Exitoso</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Su usuario fue creado exitosamente , inicie sesión con su nueva
            cuenta.
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="boton-modal-registro"
              variant="primary"
              onClick={() => {
                setShowModal(false);
                navigate("/login");
              }}
            >
              Iniciar Sesion
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {modalError && (
        <Modal
          show={modalError}
          onHide={() => setModalError(false)}
          backdrop="static"
          keyboard={true}
        >
          <Modal.Header closeButton>
            <h4>Errores </h4>
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

export default Registro;
