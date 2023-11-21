import './style.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar() {
  return (
    <div>
    <Navbar expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#">PressedByToree</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbar
