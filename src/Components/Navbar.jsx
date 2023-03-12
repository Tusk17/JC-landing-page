import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../styles/Navigation.css';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" className="navigation">
      <Navbar.Brand href="/" className="brand">Mi Portafolio Web (En construcción)</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="links">
          <Nav.Link as={Link} to="/" className="link">Inicio</Nav.Link>
          <NavDropdown title="Secciones" id="basic-nav-dropdown" className="dropdown">
            <NavDropdown.Item as={Link} to="/services" className="dropdown-item">Proyectos</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/contact" className="dropdown-item">Contacto</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
