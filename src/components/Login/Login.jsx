import "./login.css";
import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "animate.css";
import Button from "react-bootstrap/Button";
import { authLogin } from "../../helpers/ApiLogin";
import { useNavigate } from "react-router-dom";
import { ModalBody } from "react-bootstrap";

const Login = ({ iniciarSesion, guardarUsuario }) => {
  const navigate = useNavigate();

  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);
  //HOOKS MODAL
  const [modal, setModal] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [modalError, setModalError] = useState(false);

  const mostrarModalError = () => setModalError(true);
  const cerrarModalError = () => setModalError(false);
  const mostrarModal = () => setModal(true);
  const cerrarModal = () => setModal(false);

  const enviarDatos = async (e) => {
    e.preventDefault();
    setLoading(true);
    const datos = {
      email: inputEmail,
      password: inputPassword,
    };

    const resp = await authLogin(datos);
    if (resp?.token) {
      iniciarSesion();
      localStorage.setItem("token", JSON.stringify(resp.token));
      localStorage.setItem("usuario", JSON.stringify(resp.usuario));
      guardarUsuario(resp.usuario);
      navigate("/");
    } else {
      mostrarModalError();
    }
    setResultado(resp);
    setLoading(false);
  };

  return (
    <>
      <Container
        style={{ width: "100%", overflow: "hidden" }}
        className="d-flex justify-content-center p-4"
        fluid
      >
        <Row style={{ marginRight: "0%" }}>
          <Col xs={12} sm={12} md={12} lg={11}>
            <div className="d-flex justify-content-center">
              <Card className=" d-flex justify-content-center w-100">
                <Card.Header
                  className="classHeader d-flex justify-content-center align-items-center"
                  style={{ fontSize: "20px" }}
                >
                  {" "}
                  Login
                  <img
                    src="https://img.icons8.com/?size=512&id=124077&format=png"
                    alt="logoLogin"
                    style={{ width: "70px", height: "70px" }}
                  />{" "}
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={enviarDatos}>
                    <ul>
                      <li className="p-2">
                        <img
                          className="icon"
                          src="https://img.icons8.com/?size=512&id=42384&format=png"
                          alt=""
                          width="30px"
                          height="30px"
                        />
                        <input
                          placeholder="Email"
                          name="email"
                          className="inputStyle headerClass"
                          type="text"
                          required
                          autoComplete="off"
                          onChange={(e) => setInputEmail(e.target.value)}
                        />
                      </li>
                      <li className="p-2">
                        <img
                          className="icon"
                          src="https://img.icons8.com/?size=512&id=15437&format=png"
                          alt=""
                          width="30px"
                          height="30px"
                        />
                        <input
                          className="inputStyle headerClass"
                          type="password"
                          name="contra"
                          placeholder="Contraseña"
                          onChange={(e) => setInputPassword(e.target.value)}
                          required
                        />
                      </li>
                    </ul>
                    <Button onClick={() => mostrarModal()} variant="black">
                      ¿Olvido su contraseña?
                    </Button>
                    <Button href="/registro" variant="black">
                      Registrarse
                    </Button>
                    <hr />
                    <div className="">
                      <Button
                        type="submit"
                        variant="info"
                        style={{
                          color: "white",
                          backgroundColor: "#CF3D3F",
                          border: "none",
                        }}
                      >
                        Ingresar
                      </Button>

                      <Button className="mx-2" variant="secondary">
                        Cancelar
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
          <Col lg={1}>
            <div className="containerImg"></div>
          </Col>
        </Row>

        {modal && (
          <Modal
            show={modal}
            onHide={() => cerrarModal()}
            backdrop="static"
            keyboard={true}
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ fontSize: "20px" }}>
                Recuperar contraseña
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form o>
                <ul>
                  <li>
                    <input
                      autoComplete="off"
                      type="text"
                      name="email"
                      className="inputStyle"
                      placeholder="Email"
                      style={{ width: "60%" }}
                    />
                  </li>
                </ul>
                <div className="d-flex justify-content-end">
                  <Button
                    type="submit"
                    style={{
                      color: "white",
                      backgroundColor: "#CF3D3F",
                      border: "none",
                    }}
                    variant="info"
                    className="mx-2"
                  >
                    Aceptar
                  </Button>
                  <Button variant="secondary" onClick={cerrarModal}>
                    Cerrar
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
        )}

        {modalError && (
          <Modal
            show={modalError}
            onHide={() => cerrarModalError()}
            backdrop="static"
            keyboard={true}
          >
            <Modal.Header closeButton>
              <h4>Error! </h4>
            </Modal.Header>
            <ModalBody>
              <h5>Correo/Contraseña incorrectos, inténtelo nuevamente</h5>
            </ModalBody>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default Login;
