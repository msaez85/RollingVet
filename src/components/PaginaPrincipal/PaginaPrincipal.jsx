import Slider from "../PaginaPrincipal/Slider/Slider";
import ProductosDestacados from "../PaginaPrincipal/ProductosDestacados/Productos";
import Testimonios from "../PaginaPrincipal/Testimonios/Testimonios";
import Servicios from "../PaginaPrincipal/Servicios/Servicos";
import Planes from "../PaginaPrincipal/Planes/Planes";
import Banner from "./BannerMarcas/Banner";

const PaginaPrincipal = () => {
  return (
    <>
      <Slider />
      <hr />
      <Planes />
      <hr />
      <Servicios />
      <hr />
      <ProductosDestacados />
      <Banner/>
      <hr />
      <Testimonios />
      <hr />
    </>
  );
};

export default PaginaPrincipal;
