import './style.css'
import Navbar from '../../components/Navbar'
import Product from '../../components/Tumblers'
import Checkout from `../..`

function Home() {
  return ( <>

    <div>
      <Navbar/>
      This is home page
      <Product/>
      <Checkout/>
    </div>

    </>
  )
}

export default Home
