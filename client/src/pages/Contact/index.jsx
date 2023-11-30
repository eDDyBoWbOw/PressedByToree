import './style.css'
import NavbarComponent from '../../components/Navbar'
import { Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <>
      <NavbarComponent/>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Contact Us</h1>
          <p>Phone: 123-456-7890</p>
          <p>Email: example@example.com</p>
          <p>Address: 123 Main St, Anytown, USA</p>
        </Col>
      </Row> 
    </>
  )
}

export default Contact;