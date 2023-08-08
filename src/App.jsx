import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PaginaPrincipal from "./components/PaginaPrincipal/PaginaPrincipal";
import Contacto from "./components/contacto/contacto";
import Login from "./components/Login/Login";
import AcercaDeNosotros from "./components/acercaNosotros/acercaNosotros";
import PaginaDetalle from "./components/PaginaDetalle/PaginaDetalle";
import PaginaProductos from "./components/PaginaProductos/PaginaProductos";
import Registro from "./components/Registro/Registro";
import TablaPacientes from "./components/Pacientes/TablaPacientes";
import TablaTurnos from "./components/Turnos/TablaTurnos";
import Pagina404 from "./components/Pagina404/Pagina404";
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
          <Route path="/registro" element={<Registro />} />
          <Route path="/pacientes" element={<TablaPacientes />} />
          <Route path="/turnos" element={<TablaTurnos />} />
          <Route path="/404" element={<Pagina404 />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
