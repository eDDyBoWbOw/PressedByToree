import './style.css'
import NavbarComponent from '../../components/Navbar'
import ProductCard from '../../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';
// import product from './productData.json';
const product =
[
  {    
    "productCategory": "Tumblers",
    "name":"Holy Hood Sweater",
    "description": "Dark Gray Sweater.",
    "price": 45.00
  },
  {
    "productCategory": "Tumblers",
    "name":"Aliceitem",
    "description": "Coffee jar cup.",
    "price": 25.00
  },
  {
    "productCategory": "Tumblers",
    "name":"Pooh bear tumbler",
    "description": "Pooh Character tumbler 20z.",
    "price": 25.00
  },
  {
    "productCategory": "Tumblers",
    "name":"Scream tumbler",
    "description": "Scream tumbler 20z.",
    "price": 25.00
  },
  {
    "productCategory": "Tumblers",
    "name":"Scary tumbler",
    "description": "Scary tumber 20z.",
    "price": 25.00
  },
  {
    "productCategory": "Tumblers",
    "name":"Mermaid tumbler",
    "description": "Red Hair mermaid tumbler 20z.",
    "price": 25.00
  },
  {
    "productCategory": "Tumblers",
    "name":"Pumpkin tumbler",
    "description": "Pumpkin tumbler 20z.",
    "price": 25.00
  },
  {
    "productCategory": "Tumblers",
    "name":"Encanto tumbler",
    "description": "Encanto tumbler 20z.",
    "price": 25.00
  },
  {
    "productCategory": "Tumblers",
    "name":"Good guy tumbler",
    "description": "Good guy tumbler 20z.",
    "price": 25.00
  }
]

function Home() {
  return ( <>

      <NavbarComponent/>
      <div>This is home page</div>
      
      <Container className="store-container">
        <Row>
          <ProductCard
            key={product.name}
            imgSrc={`/assets/${product.name}.JPG`}
            altText={`${product.name} Image`}
            name={product.name}
            description={product.description}
            price={product.price}
          />
          <ProductCard
            key={product.name}
            imgSrc={`/assets/${product.name}.JPG`}
            altText={`${product.name} Image`}
            name={product.name}
            description={product.description}
            price={product.price}
          />
          <ProductCard
            key={product.name}
            imgSrc={`/assets/${product.name}.JPG`}
            altText={`${product.name} Image`}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        </Row>


        <Row>
          <Col md={12}>
            <div className="banner">
              <h3>Special Offer!</h3>
              <p>Get 10% off on all products. Use code: SPECIAL10</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home
