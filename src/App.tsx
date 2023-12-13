import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import './App.css'
import Home from "./components/Home.tsx";
import Customer from "./components/Customer.tsx";
import Product from "./components/Product.tsx";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="navbar-brand">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Wattpad_logo.png/2560px-Wattpad_logo.png"
                   alt="" className='logo'/>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
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
