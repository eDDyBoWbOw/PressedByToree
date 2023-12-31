import './style.css';
import NavbarComponent from '../Navbar';
import { Card, Button, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../../utils/mutations';
//import { products} from './productData.json';

function ProductCard() {
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);
  const [addItem, { mutationError }] = useMutation(ADD_ITEM);

  const handleAddToCart = async (productName) => {
    try {
      const { data } = await addItem({
        variables: { products: [productName] },
      });

      // Handle the response data as needed
      console.log('Item added to the cart:', data);
      
    } catch (e) {
      console.error('Error adding item to the cart:', e);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products;

  return (
    <>
      <NavbarComponent />
      <p>This is the products page</p>
      {products.map((product) => (
        <Col md={4} key={product.name}>
          <Card className="product-card">
            <Card.Img src={`/assets/${product.name}.JPG`} alt={product.name} className="product-image" />
            <Card.Body className="product-details">
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>
                <strong>${product.price.toFixed(2)}</strong>
              </Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart(product.name)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {/* Display error if mutation fails */}
      {mutationError && <p>Error: {mutationError.message}</p>}
    </>
  );
}
//.toLowerCase().replace(/\s/g, '-')
export default ProductCard