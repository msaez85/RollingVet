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
      <Planes />
      <Servicios />
      <ProductosDestacados />
      <Banner/>
      <Testimonios />
    </>
  );
};

export default PaginaPrincipal;
