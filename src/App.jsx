import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PaginaPrincipal from "./components/PaginaPrincipal/PaginaPrincipal";
import Contacto from "./components/contacto/contacto";
import Login from "./components/Login/Login";
import AcercaDeNosotros from "./components/acercaNosotros/acercaNosotros";
import PaginaDetalle from "./components/PaginaDetalle/PaginaDetalle";
import PaginaProductos from "./components/PaginaProductos/PaginaProductos";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/nosotros" element={<AcercaDeNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/planes/:id" element={<PaginaDetalle />} />
          <Route path="/productos" element={<PaginaProductos />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
