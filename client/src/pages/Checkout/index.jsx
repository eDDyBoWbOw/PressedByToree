import './style.css'
import NavbarComponent from '../../components/Navbar'
import { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
//import products from './productData.json';

function Checkout() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productToRemove) => {
    setCart(prevCart => prevCart.filter(product => product.name !== productToRemove.name));
  };

  const updateQuantity = (productToUpdate) => {
    const newQuantity = parseInt(prompt(`Enter new quantity for ${productToUpdate.name}:`), 10);
    if (!isNaN(newQuantity)) {
      setCart(prevCart =>
        prevCart.map(product =>
          product.name === productToUpdate.name ? { ...product, quantity: newQuantity } : product
        )
      );
    }
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <Container>
      <NavbarComponent/>
      <p>This is the checkout page</p>
      {cart.map((product, index) => (
        <div key={index}>
          <h2>{product.name}</h2>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add {product.name} to Cart
          </Button>
          <Button variant="danger" onClick={() => removeFromCart(product)}>
            Remove {product.name} from Cart
          </Button>
          <Button variant="info" onClick={() => updateQuantity(product)}>
            Update {product.name} Quantity
          </Button>
        </div>
      ))}
      <Button variant="warning" onClick={removeAllFromCart}>
        Remove All Items from Cart
      </Button>
      <Row>
        <Col>
          <h2>Cart</h2>
          <p>Total products: {cart.length}</p>
          <p>Total price: ${totalPrice.toFixed(2)}</p>
          {cart.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}   

export default Checkout;
