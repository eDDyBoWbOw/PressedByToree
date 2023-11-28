import './style.css'
import NavbarComponent from '../../components/Navbar'
import ProductCard from '../../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

function Products() {
  return (
    <>
      <NavbarComponent />
      <p>This is the products page</p>


      <Container className="store-container">
        <Row>
          <ProductCard
            imgSrc="https://via.placeholder.com/300"
            altText="Product 1 Image"
            productName="Product 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price="$19.99"
          />
          <ProductCard
            imgSrc="https://via.placeholder.com/300"
            altText="Product 2 Image"
            productName="Product 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price="$29.99"
          />
          <ProductCard
            imgSrc="https://via.placeholder.com/300"
            altText="Product 3 Image"
            productName="Product 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            price="$39.99"
          />
        </Row>


        <Row>
          <Col md={12}>
            <div className="banner">
              <h3>Special Offer!</h3>
              <p>Get 10% off on all products. Use code: SPECIAL10</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Products
