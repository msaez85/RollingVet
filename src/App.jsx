import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PaginaPrincipal from "./components/PaginaPrincipal/PaginaPrincipal";
import Contacto from './components/contacto/contacto'
import AboutUs from './components/acercaNosotros/acercaNosotros'
import Login from './components/Login/Login'

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<PaginaPrincipal />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/nosotros' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />

        </Routes>
      </Layout>
    </>
  );
}

export default App;
