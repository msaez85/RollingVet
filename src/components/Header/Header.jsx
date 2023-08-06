import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo2 from "/src/assets/img/logo2.png";
import './header.css'
import { Link } from "react-router-dom";


function Header() {
    return (
        
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="light" bg="light" >
            <Container fluid>
                <Navbar.Brand className="logo-nav" as={Link} to='/'><img src={logo2} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="meca me-0 my-2 my-lg-0"
                        style={{ maxHeight: "200px" }}
                        navbarScroll
                    >
                        <Nav.Link  as={Link} to="/nosotros">Conocenos</Nav.Link>
                        <Nav.Link  as={Link} to="/productos">Productos</Nav.Link>
                        <Nav.Link  as={Link} to="/contacto">Contactanos</Nav.Link>
                        <Nav.Link  as={Link} to="/pacientes">Pacientes</Nav.Link>
                        <Nav.Link  as={Link} to="/registro">Registrate</Nav.Link>
                        <Nav.Link  as={Link} to="/login">Login</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
