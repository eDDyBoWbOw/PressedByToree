import './style.css';
import NavbarComponent from '../../components/Navbar';
import { useQuery, useMutation } from '@apollo/client';
import { ADD_ITEM, GET_PRODUCTS } from '../../utils/mutations';

function Product() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [getProduct, getAllProducts] = useState([]);
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

export default Product
