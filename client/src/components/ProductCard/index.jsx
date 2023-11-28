import { Col, Card, Button } from 'react-bootstrap';
import './style.css'

const ProductCard = ({ imgSrc, altText, productName, description, price }) => (
    <Col md={4}>
      <Card className="product-card">
        <Card.Img src={imgSrc} alt={altText} className="product-image" />
        <Card.Body className="product-details">
          <Card.Title>{productName}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <strong>{price}</strong>
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );

export default ProductCard