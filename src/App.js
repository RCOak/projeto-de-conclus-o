import { BrowserRouter as Router, Route, Routes, Link  } from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"

function App() {
  return (
    <div>
      <Router>

<div>
  <Link to='/'>Home</Link>
  <Link to='/login'>Login</Link>
</div>
<Routes>
  <Route exact path='/' element={<Home />} />
  <Route exact path='/login' element={<Login />} />
</Routes>
<footer>Footer</footer>
</Router>
    </div>
  );
}

export default App;
