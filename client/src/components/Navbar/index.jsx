import './style.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavbarBootstrap from 'react-bootstrap/Navbar'; 

function CustomNavbar() {
  return (
    <div>
      <NavbarBootstrap expand="lg" bg="light" variant="light">
        <Container>
          <NavbarBootstrap.Brand href="#">PressedByToree</NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle aria-controls="navbarNav" />
          <NavbarBootstrap.Collapse id="navbarNav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link href="#">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Products</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">Checkout</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">LogIn</Nav.Link>
              </Nav.Item>
            </Nav>
          </NavbarBootstrap.Collapse>
        </Container>
      </NavbarBootstrap>
    </div>
  );
}

export default CustomNavbar;

