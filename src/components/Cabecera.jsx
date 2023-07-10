
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo2 from "/src/assets/img/logo2.png";
import './cabecera.css'


function NavScrollExample() {
    return (
        
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="light" bg="light" >
            <Container fluid>
                <Navbar.Brand href="#"><img src={logo2} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="meca me-0 my-2 my-lg-0"
                        style={{ maxHeight: "200px" }}
                        navbarScroll
                    >
                        <Nav.Link  href="#action1">Conocenos</Nav.Link>
                        <Nav.Link  href="#action2">Servicios</Nav.Link>
                        <Nav.Link  href="#action3">Productos</Nav.Link>
                        <Nav.Link  href="#action4">Contactanos</Nav.Link>
                        <Nav.Link  href="#action4">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;
