function ProductCard() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [addItem, { mutationError }] = useMutation(ADD_ITEM);

  const handleAddToCart = async (productName) => {
    try {
      const { data } = await addItem({
        variables: { products: [productName] },
      });

      // Handle the response data as needed
      console.log('Item added to the cart:', data);

      // Optionally, you can perform additional actions, such as refetching data
      // or updating the local state.
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