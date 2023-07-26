import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PaginaPrincipal from "./components/PaginaPrincipal/PaginaPrincipal";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<PaginaPrincipal />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
