import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PaginaPrincipal from "./components/PaginaPrincipal/PaginaPrincipal";
import Contacto from "./components/contacto/contacto";
import AboutUs from "./components/acercaNosotros/acercaNosotros";
import Login from "./components/Login/Login";
import AcercaDeNosotros from "./components/acercaNosotros/acercaNosotros";


function App() {
  return (
    <>
      
        <Layout>
          <Routes>
            <Route path="/" element={<PaginaPrincipal />} />
            <Route path="/acercaNosotros" element={<AcercaDeNosotros/>}/>
            <Route path="/contacto" element={<Contacto/>}/>
            <Route path="/Login" element={<Login/>}/>
          </Routes>
        </Layout>
      
    </>
  );
}

export default App;
