import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css'
import Home from "./components/Home.tsx";
import Customer from "./components/Customer.tsx";
import Product from "./components/Product.tsx";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/customer'>Customer</Link>
            </li>
            <li>
              <Link to='/product'>Product</Link>
            </li>
          </ul>
        </nav>
        <hr/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/customer' element={<Customer/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>

      </div>
    </Router>
  )
}

export default App
