import Container from "react-bootstrap/Container";
import "../Catalogo/Catalogo.css";
import Card from "react-bootstrap/Card";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import { traerProductos } from "../../../helpers/ApiProductos";

const Catalogo = () => {
  const [show, setShow] = useState(false);
  const [datos, setDatos] = useState({});
  const [productos, setProductos] = useState([{}]);

  const handleClose = () => setShow(false);

  const obtenerDatos = (producto) => {
    setDatos(producto);
    setShow(true);
  };

  const traerTodosLosProductos = async () => {
    try {
      const productosInicio = await traerProductos();
      setProductos(productosInicio.productos);
      console.log(productosInicio.productos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    traerTodosLosProductos();
  }, []);

  return (
    <>
      <Container className="row d-flex justify-content-center " fluid>
        {productos.map((producto, index) => {
          return (
            <div key={index} className=" p-1 col-sm-12  col-md-6 col-lg-3">
              <Card
                data-aos="fade-up"
                data-aos-once="true"
                key={producto.pid}
                className="border-3 classCard "
                style={{ width: "280px", height: "530px" }}
                onClick={() => obtenerDatos(producto)}
              >
                <Card.Img
                  style={{ height: "280px" }}
                  variant="top"
                  src={producto.img}
                  alt="prodImagen"
                />
                <Card.Body>
                  <Card.Title>{producto.name}</Card.Title>
                  <Card.Text className="classPrecio">
                    Precio: {producto.price}
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
              <Modal.Title>{datos.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Container fluid>
                <div className="d-flex justify-content-center">
                  <div className="row">
                    {" "}
                    <div className="d-flex justify-content-center">
                      <img
                        src={datos.img}
                        style={{ width: "180px", height: "280px" }}
                        alt=""
                      />
                    </div>
                    <div className="p-1 ">
                      <h5>Descripción: </h5>
                      <p>{datos.detail}</p>
                    </div>
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
