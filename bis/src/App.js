import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Newpost from "./Newpost";

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/newpost">Newpost</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />  }/>
        <Route path="/about" element={<About />  }/>
        <Route path="/newpost" element={<Newpost />}/>
      </Routes>
    </div>
  );
}

export default App;
