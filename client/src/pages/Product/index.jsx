import './style.css';
import NavbarComponent from '../../components/Navbar';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_ITEM } from '../../utils/mutations';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { useParams } from 'react-router-dom';
import { Col, Card, Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';

// const product =
// [
//   {    
//     "productCategory": "Tumblers",
//     "name":"Holy Hood Sweater",
//     "description": "Dark Gray Sweater.",
//     "price": 45.00
//   },
//   {
//     "productCategory": "Tumblers",
//     "name":"Aliceitem",
//     "description": "Coffee jar cup.",
//     "price": 25.00
//   },
//   {
//     "productCategory": "Tumblers",
//     "name":"Pooh bear tumbler",
//     "description": "Pooh Character tumbler 20z.",
//     "price": 25.00
//   },
//   {
//     "productCategory": "Tumblers",
//     "name":"Scream tumbler",
//     "description": "Scream tumbler 20z.",
//     "price": 25.00
//   },
//   {
//     "productCategory": "Tumblers",
//     "name":"Scary tumbler",
//     "description": "Scary tumber 20z.",
//     "price": 25.00
//   },
//   {
//     "productCategory": "Tumblers",
//     "name":"Mermaid tumbler",
//     "description": "Red Hair mermaid tumbler 20z.",
//     "price": 25.00
//   },
//   {
//     "productCategory": "Tumblers",
//     "name":"Pumpkin tumbler",
//     "description": "Pumpkin tumbler 20z.",
//     "price": 25.00
//   },
//   {
//     "productCategory": "Tumblers",
//     "name":"Encanto tumbler",
//     "description": "Encanto tumbler 20z.",
//     "price": 25.00
//   },
//   {
//     "productCategory": "Tumblers",
//     "name":"Good guy tumbler",
//     "description": "Good guy tumbler 20z.",
//     "price": 25.00
//   }
// ]

function Product() {
  const { productId } = useParams();
  const [cart, setCart] = useState([]);

  const { loading, error, data } = useQuery(QUERY_PRODUCTS, {
    variables: { category: productId }, // Assuming productId corresponds to category in your schema
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

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  const products = data.products;

  return (
    <>
      <NavbarComponent />
      <p>This is the product page</p>
      {products.map((product) => (
        <Col md={4} key={product._id}>
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
      ))}
      {/* Display error if mutation fails */}
      {mutationError && <p>Error: {mutationError.message}</p>}
    </>
  );
}

export default Product;


