import Container from "react-bootstrap/Container";
import { productos } from "../Catalogo/productos";
import "../Catalogo/Catalogo.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
const Catalogo = () => {
  const [show, setShow] = useState(false);
  const [datos, setDatos] = useState({});

  const handleClose = () => setShow(false);

  const obtenerDatos = (producto) => {
    setDatos(producto);
    setShow(true);
  };
  return (
    <>
      <Container className="row d-flex justify-content-center " fluid>
        {productos.map((producto, index) => {
          return (
            <div key={index} className=" p-2 col-sm-12  col-md-6 col-lg-3">
              <Card
                data-aos="fade-up"
                key={producto.id}
                className="border-3 classCard "
                style={{ width: "280px", height: "450px" }}
                onClick={() => obtenerDatos(producto)}
              >
                <Card.Img variant="top" src={producto.img} alt="prodImagen" />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text className="classPrecio">
                    Precio: {producto.precio}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Container>

      {show && (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{datos.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container fluid>
                <div className="d-flex justify-content-center">
                  <div>
                    <img
                      src={datos.img}
                      style={{ width: "180px", height: "250px" }}
                      alt=""
                    />
                  </div>
                  <div className="p-2">
                    <h5>Descripcion: </h5>
                    <p>{datos.descripcion}</p>
                  </div>
                </div>
              </Container>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default Catalogo;
