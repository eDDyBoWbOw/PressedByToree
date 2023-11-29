import React from 'react';
import './style.css';
import NavbarComponent from '../../components/Navbar';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_ITEM } from '../../utils/mutations';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { Col, Card, Button } from 'react-bootstrap';
//import { useState } from 'react';

function Product() {
  const { productId } = useParams();
  // const [cart, Cart] = useState([]);
  const { loading, error, data } = useQuery(QUERY_PRODUCTS, {
    variables: { productId: productId },
  });
  const [addItem, { mutationError }] = useMutation(ADD_ITEM);

  const handleAddToCart = async (product) => {
    try {
      const { data } = await addItem({
        variables: { products: [product] },
      });

      console.log('Item added to the cart:', data);

    } catch (e) {
      console.error('Error adding item to the cart:', e);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const product = data.product;

  return (
    <>
      <NavbarComponent />
      <p>This is the product page</p>
      <Col md={4}>
        <Card className="product-card">
          <Card.Img src={`/assets/${product.name}.JPG`} alt={product.name} className="product-image" />
          <Card.Body className="product-details">
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>
              <strong>${product.price.toFixed(2)}</strong>
            </Card.Text>
            <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>
      {/* Display error if mutation fails */}
      {mutationError && <p>Error: {mutationError.message}</p>}
    </>
  );
}

export default Product;


