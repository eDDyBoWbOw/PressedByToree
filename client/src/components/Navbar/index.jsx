import './style.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function NavbarComponent() {
  return (
    <div>
    <Navbar expand="lg" variant="light" bg="light">
      <Container>
        <Navbar.Brand>PressedByToree</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarNav" /> */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ml-auto">
            <Nav.Link className="navItems" href="/">Home</Nav.Link>
            <Nav.Link className="navItems" href="/product/:id">Product</Nav.Link>
            <Nav.Link className="navItems" href="/contact">Contact</Nav.Link>
            <Nav.Link className="navItems" href="/login">Log In</Nav.Link>
            <Nav.Link className="navItems" href="/checkout"><FontAwesomeIcon icon={faCartShopping} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent
