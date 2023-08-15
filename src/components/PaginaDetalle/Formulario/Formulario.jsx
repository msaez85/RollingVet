import { useState } from "react";
import "./Formulario.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";

function Formulario() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ynv1ewi",
        "template_njmqolt",
        { email },
        "EiYfdGtpQ5wkN4TYs"
      )
      .then(() => {
        alert("Mensaje Enviado!");
        e.target.reset();
        handleClose();
      })
      .catch((error) => {
        alert(`Mensaje No Enviado!. Error: ${JSON.stringify(error)}`);
        handleClose();
      });
  };

  return (
    <>
      <Button className="btn btn-dark masInfo-btn me-5" onClick={handleShow}>
        Mas Info +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div className="masInfo-modal">
          <Modal.Header closeButton>
            <Modal.Title style={{textAlign:"center"}}>Contactanos</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control type="text" placeholder="Juan Perez" />
                <Form.Label>Direccion de Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" placeholder="381-xxxxxx" />
                <Form.Label>Pregunta</Form.Label>
                <Form.Control as="textarea" rows={5} />
              </Form.Group>
              <div className="container-fluid d-flex flex-row justify-content-center align-items-start">
                {/* <Button className="btn btn-dark mx-3" onClick={handleClose}>
                  Cerrar
                </Button> */}
                <Button className="btn btn-dark mx-3" type="submit">
                  Enviar
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default Formulario;
