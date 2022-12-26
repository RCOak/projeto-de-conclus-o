import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import React from "react";

import Home from "./Components/pages/Home.js";
import Login from "./Components/pages/Login.js";

import Container from "./Components/layout/Container.js";
import Navbar from "./Components/layout/Navbar.jsx";
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
            </Routes>
          </Container>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
