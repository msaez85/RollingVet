import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo2 from "/src/assets/img/logo2.png";
import "./header.css";
import { Link } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header({ cerrarSesion, user }) {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      data-bs-theme="light"
      bg="light"
    >
      <Container fluid>
        <Navbar.Brand className="logo-nav" as={Link} to="/">
          <img src={logo2} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="meca me-0 my-2 my-lg-0"
            style={{ maxHeight: "200px" }}
            navbarScroll
          >
            <NavDropdown title="Planes" id="basic-nav-dropdown">
              <NavDropdown.Item href="/planes/1">Plan Cachorros</NavDropdown.Item>
              <NavDropdown.Item href="/planes/2">
                Plan Madurando
              </NavDropdown.Item>
              <NavDropdown.Item href="/planes/3">Plan Adultos</NavDropdown.Item>
        
            </NavDropdown>


            <Nav.Link as={Link} to="/nosotros">
              Conocenos
            </Nav.Link>
            <Nav.Link as={Link} to="/productos">
              Productos
            </Nav.Link>
            <Nav.Link as={Link} to="/contacto">
              Contactanos
            </Nav.Link>
            {user.rol === "ADMIN" && (
              <Nav.Link as={Link} to="/administracion">
                Administración
              </Nav.Link>
            )}
            {(user.rol === "USER") && (
              <Nav.Link as={Link} to="/turnosusuario">
                Mis Turnos
              </Nav.Link>
            )}
            {user.rol === "ADMIN" || user.rol === "USER" ? (
              <Nav.Link as={Link} to="/">
                Bienvenido {user.nombre}
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="/registro">
                Registrate
              </Nav.Link>
            )}
            {(user.rol === "ADMIN" || user.rol === "USER") ? (
              <button className="btn nav-link" onClick={cerrarSesion}>
                Cerrar sesión
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
