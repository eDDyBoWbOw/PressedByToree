import './style.css'
import Navbar from '../../components/Navbar'
import Product from '../Products'
import Checkout from '../../components/Checkout'
import Signup from '../../components/SignUpForm'
import ItemContainer from '../../pages/Items'

function Home() {
  return ( <>

    <div>
      <Navbar/>
      This is home page
      <ItemContainer/>
      <Product/>
      <Checkout/>
      <Signup/>
    </div>
    </>
  )
}

export default Home
