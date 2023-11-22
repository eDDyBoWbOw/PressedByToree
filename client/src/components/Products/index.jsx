 //import { Product } from '../../../../server/models';
 //import { Link } from 'react-router-dom';
 import React from 'react';
 import { Container, Row, Col, Button } from 'react-bootstrap';
 //import { QUERY_PRODUCTS } from '../../../utils/queries';
 
 const Products = [
    "Holy Hood Sweater",
    "Alice Starbucks",  
    "Pooh bear tumbler", 
    "Scream tumbler",
    "Scary tumbler", 
    "Mermaid tumbler", 
    "Pumpkin tumbler", 
    "Encanto tumbler",
    "Good guy tumbler"]

const ProductItem = () => {
    return (
        <Container className="product-container">
        {Products.map((product, index) => (
        <Row key={index}>
            <Col md={6}>
                <img src={`../src/assets/${product.name}.JPG`} alt="Product Image" className="product-image" />
           </Col>
            <Col md={6}>
                <div className="product-details">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p><strong>Price:</strong> {product.price}</p>
                <p><strong>Availability:</strong> In Stock</p>
                <Button variant="primary" className="btn-buy">Buy Now</Button>
                </div>
            </Col>
        </Row>
        ))}
        </Container>
    );
};

export default ProductItem;