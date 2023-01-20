import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import React from "react";

import Home from "./Components/pages/Home.js";
import Login from "./Components/pages/Login.js";
import Cart from "./Components/pages/Cart.js";
import LoginCreate from "./Components/pages/LoginCreate.js"
import NewProduct from "./Components/pages/NewProduct.js"

import Container from "./Components/layout/Container.js";
import Navbar from "./Components/layout/Navbar.jsx"
import Footer from "./Components/layout/Footer.jsx";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
          <Container customClass="minHeight">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/login' element={<Login />} />
              <Route exact path='/logincreate' element={<LoginCreate />} />
              <Route exact path='/nwproduct' element={<NewProduct />} />
              <Route exact path='/cart' element={<Cart />} />
            </Routes>
          </Container>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
