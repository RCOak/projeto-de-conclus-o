import { BrowserRouter as Router, Route, Routes, Link  } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"

import Container from "./layout/Container";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/login'>Login</Link>
        </div>
        <Container customClass="minHeight">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>
        </Container>
        <p>Footer</p>
        </Router>
    </div>
  );
}

export default App;
