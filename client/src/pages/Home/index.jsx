import './style.css'
import NavbarComponent from '../../components/Navbar'
import Product from '../Products'
import Checkout from '../Checkout'

function Home() {
  return ( <>

      <NavbarComponent/>
      <div>This is home page</div>
      <Product/>
      <Checkout/>
    </>
  )
}

export default Home
