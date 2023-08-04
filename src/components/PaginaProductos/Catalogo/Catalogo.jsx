import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { productos } from "../Catalogo/productos";
import "../Catalogo/Catalogo.css";
import Card from "react-bootstrap/Card";

const Catalogo = () => {
  return (
    <>
      <Container className="row d-flex justify-content-center " fluid>
        {productos.map((producto, key) => {
          return (
            <div className=" p-2 col-sm-12  col-md-6 col-lg-3" key={key}>
              <Card className="border-3" style={{ width: "280px" }}>
                <Card.Img variant="top" src={producto.img} />
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
    </>
  );
};

export default Catalogo;
