import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from 'react-bootstrap';

const ProductContainer = () => {
  return (
    <Container className="store-container">
      <Row>
        <Col md={4}>
        <ProductImage img="../src/assest/Sweateritem.JPG" />
          <ProductCard title="Holy Hood Sweater"description="Dark Gray Sweater." price="45.00" />
        </Col>
        <Col md={4}>
        <ProductImage img="../src/assest/Screamitem.JPG" />
          <ProductCard title="Scream tumbler" description="Scream tumbler 20z." price="25.00" />
        </Col>
        <Col md={4}>
        <ProductImage img="../src/assest/Scaryitem.JPG" />
          <ProductCard title="Scary tumbler" description="Scary tumber 20z." price="25.00" />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductContainer;