import Catalogo from "./Catalogo/Catalogo";
import Container from "react-bootstrap/Container";
import CarrousellProductos from "./CarrousellProductos/CarrousellProductos";
import "../PaginaProductos/PaginaProductos.css";
const PaginaProductos = () => {
  return (
    <>
      <div className="p-2">
        <Container
          fluid
          className="d-flex justify-content-center banner "
        ></Container>
      </div>
      <CarrousellProductos />
      <div data-aos="zoom-in" data-aos-once="true">
        <h2 className="text-center p-2">Otros productos interesantes</h2>
      </div>

      <div className="d-flex justify-content-center">
        <div className=" d-flex justify-content-center catalogoContainer">
          <Catalogo />
        </div>
      </div>
    </>
  );
};

export default PaginaProductos;
