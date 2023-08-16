import Slider from "../PaginaPrincipal/Slider/Slider";
import ProductosDestacados from "../PaginaPrincipal/ProductosDestacados/Productos";
import Testimonios from "../PaginaPrincipal/Testimonios/Testimonios";
import Servicios from "../PaginaPrincipal/Servicios/Servicos";
import Planes from "../PaginaPrincipal/Planes/Planes";
import Banner from "./BannerMarcas/Banner";
import EquipoMedico from "./EquipoMedico/EquipoMedico";

const PaginaPrincipal = () => {
  return (
    <>
      <Slider />
      <Planes />
      <Servicios />
      <ProductosDestacados />
      <Banner/>
      <EquipoMedico/>
      <Testimonios />
    </>
  );
};

export default PaginaPrincipal;
