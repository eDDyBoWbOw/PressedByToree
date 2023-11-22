import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductContainer = () => {
  return (
    <Container className="store-container">
      <Row>
        <Col md={4}>
          <ProductCard title="Product 1" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." price="19.99" />
        </Col>
        <Col md={4}>
          <ProductCard title="Product 2" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." price="29.99" />
        </Col>
        <Col md={4}>
          <ProductCard title="Product 3" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." price="39.99" />
        </Col>
      </Row>
    </Container>
  );
};

export default ProductContainer;