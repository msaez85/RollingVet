import Catalogo from "./Catalogo/Catalogo";
import Container from "react-bootstrap/Container";
import CarrousellProductos from "./CarrousellProductos/CarrousellProductos";
import "../PaginaProductos/PaginaProductos.css";


const PaginaProductos = () => {
  return (
    <>
      <div data-aos="fade-up" className="banner d-flex justify-content-center">
        <img src="https://i.postimg.cc/gjfGpxH7/zyro-image.png" alt="banner" />
      </div>
      <hr />
      <CarrousellProductos />
      <div data-aos="zoom-in" data-aos-once="true">
        <h2 className="text-center" style={{color:"#0E1449",marginTop:"5rem"}}>Otros productos interesantes</h2>
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
