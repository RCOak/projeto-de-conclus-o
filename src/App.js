import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import React from "react";

import Home from "./Components/pages/Home.js";
import Login from "./Components/pages/Login.js";
import Cart from "./Components/pages/Cart.js";
import LoginCreate from "./Components/pages/LoginCreate.js"
import PassRecover from "./Components/pages/PassRecover.js"
import NewProduct from "./Components/pages/NewProduct.js"
import NewBlog from "./Components/pages/NewBlog.js";
import LoginConfirm from "./Components/pages/LoginConfirm.js"
import LoginUser from "./Components/pages/LoginUser.js";

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
              <Route exact path='/loginconfirm' element={<LoginConfirm />} />
              <Route exact path='/passrecover' element={<PassRecover />} />
              <Route exact path='/loginuser' element={<LoginUser />} />
              <Route exact path='/nwproduct' element={<NewProduct />} />
              <Route exact path='/nwblog' element={<NewBlog />} />
              <Route exact path='/cart' element={<Cart />} />
            </Routes>
          </Container>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
