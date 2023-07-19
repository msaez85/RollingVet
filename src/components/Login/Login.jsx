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

const LoginExample = () => {
  const [modal, setModal] = useState(false);

  const mostrarModal = () => setModal(true);
  const cerrarModal = () => setModal(false);

  return (
    <>
      <Container
        style={{ width: "100%" }}
        className="d-flex justify-content-center p-5"
        fluid
      >
        <Row>
          <Col xs={12} sm={12} md={12} lg={10}>
            <Card style={{ width: "100%", overflow: "hidden" }}>
              <Card.Header
                className="bg-white d-flex justify-content-center align-items-center"
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
                <form action="">
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
                        className="inputStyle"
                        type="text"
                        required
                        autoComplete="off"
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
                        className="inputStyle"
                        type="password"
                        placeholder="Contraseña"
                        required
                      />
                    </li>
                  </ul>
                </form>
                <div className="d-flex justify-content-center">
                  <Button onClick={() => mostrarModal()} variant="black">
                    ¿Olvido su contraseña?
                  </Button>
                </div>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center bg-white">
                <Button className="mx-2" variant="secondary">
                  Cancelar
                </Button>

                <Button variant="info" style={{ color: "white" }}>
                  Ingresar
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg={2}>
            <div className="containerForm2"></div>
          </Col>
        </Row>

        {modal && (
          <Modal
            show={modal}
            onHide={() => cerrarModal()}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title style={{ fontSize: "20px" }}>
                Recuperar contraseña
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form action="">
                <ul>
                  <li>
                    <input
                      autoComplete="off"
                      type="text"
                      className="inputStyle"
                      placeholder="Email"
                      style={{ width: "60%" }}
                    />
                  </li>
                </ul>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={cerrarModal}>
                Cerrar
              </Button>
              <Button style={{ color: "white" }} variant="info">
                Aceptar
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </>
  );
};

export default LoginExample;
