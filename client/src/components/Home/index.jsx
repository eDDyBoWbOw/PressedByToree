import './style.css'
import Navbar from '../../components/Navbar'
import Product from '../../components/Tumblers'
import Checkout from '../../components/Checkout'
import Signup from '../../components/SignUpForm'

function Home() {
  return ( <>

    <div>
      <Navbar/>
      This is home page
      <Product/>
      <Checkout/>
      <Signup/>
    </div>
    </>
  )
}

export default Home
