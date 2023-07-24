import "./App.css";
import Header from "./components/Header/Header";
import Slider from "./components/PaginaPrincipal/Slider/Slider";
import Footer from "./components/Footer/Footer";
import Servicios from "./components/PaginaPrincipal/Servicios/Servicos";
import Planes from "./components/PaginaPrincipal/Planes/Planes";
import ProductosDestacados from "./components/PaginaPrincipal/ProductosDestacados/Productos";
import Testimonios from "./components/PaginaPrincipal/Testimonios/Testimonios";

function App() {
  return (
    <>
      <div className="principals">
        <Header />
      </div>
      <div className="slider">
        <Slider />
      </div>
      <hr />
      <Servicios />
      <hr />
      <Planes />
      <hr />
      <ProductosDestacados/>
      <hr />
      <Testimonios/>
      <hr />
      <div className="foot">
        <Footer />
      </div>
    </>
  );
}

export default App;
