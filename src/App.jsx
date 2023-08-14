import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PaginaPrincipal from "./components/PaginaPrincipal/PaginaPrincipal";
import Contacto from "./components/contacto/contacto";
import Login from "./components/Login/Login";
import AcercaDeNosotros from "./components/acercaNosotros/acercaNosotros";
import PaginaDetalle from "./components/PaginaDetalle/PaginaDetalle";
import PaginaProductos from "./components/PaginaProductos/PaginaProductos";
import Registro from "./components/Registro/Registro";
import Administracion from "./components/Administracion/Administracion";
import Pagina404 from "./components/Pagina404/Pagina404";
import TurnosUsuario from "./components/TurnosUsuario/TurnosUsuario";
import ProtectedRoutesAdmin from "./routes/ProtectedRoutesAdmin";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({
    rol: "",
  });

  const guardarUsuario = (datos) => {
    setUser(datos);
  };

  const iniciarSesion = () => {
    setLogin(true);
  };

  const cerrarSesion = () => {
    setLogin(false);
  };

  return (
    <>
      <Layout cerrarSesion={cerrarSesion} user={user}>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/nosotros" element={<AcercaDeNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route
            path="/login"
            element={
              <Login
                iniciarSesion={iniciarSesion}
                guardarUsuario={guardarUsuario}
              />
            }
          />
          <Route path="/planes/:id" element={<PaginaDetalle />} />
          <Route path="/productos" element={<PaginaProductos />} />
          <Route path="/registro" element={<Registro />} />
          <Route
            path="/administracion"
            element={
              <ProtectedRoutesAdmin user={user}>
                <Administracion />
              </ProtectedRoutesAdmin>
            }
          />
          <Route path="/404" element={<Pagina404 />} />
          <Route
            path="/turnosusuario"
            element={
              <ProtectedRoutes login={login}>
                <TurnosUsuario />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
