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
  //HOOKS MODAL
  const [modal, setModal] = useState(false);
  const [datos, setDatos] = useState({
    email: "",
    contra: "",
  });

  const handleInputChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const mostrarModal = () => setModal(true);
  const cerrarModal = () => setModal(false);

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log("DATOS ENVIADOS: " + datos.email + " " + datos.contra);
  };

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
                        className="inputStyle"
                        type="text"
                        required
                        autoComplete="off"
                        onChange={handleInputChange}
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
                        name="contra"
                        placeholder="Contraseña"
                        onChange={handleInputChange}
                        required
                      />
                    </li>
                  </ul>
                  <Button onClick={() => mostrarModal()} variant="black">
                    ¿Olvido su contraseña?
                  </Button>
                  <hr />
                  <div className="">
                    <Button className="mx-2" variant="secondary">
                      Cancelar
                    </Button>

                    <Button
                      type="submit"
                      variant="info"
                      style={{ color: "white" }}
                    >
                      Ingresar
                    </Button>
                  </div>
                </Form>
              </Card.Body>
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
              <Form onSubmit={enviarDatos}>
                <ul>
                  <li>
                    <input
                      autoComplete="off"
                      type="text"
                      name="email"
                      onChange={handleInputChange}
                      className="inputStyle"
                      placeholder="Email"
                      style={{ width: "60%" }}
                    />
                  </li>
                </ul>
                <div className="d-flex justify-content-end">
                  <Button
                    type="submit"
                    style={{ color: "white" }}
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
      </Container>
    </>
  );
};

export default LoginExample;
