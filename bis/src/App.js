import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import { Missing } from "./Missing";
import { PostLayout } from "./PostLayout";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <ul> 
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/postpage">Postpage</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />  }/>
        <Route path="/about" element={<About />  }/>
        <Route path="/postpage" element={<PostLayout />}> 
          <Route index element={<Postpage/>}/>
          <Route path=":id" element={<Post/>}/>
          <Route path="newpost" element={<Newpost />}/>
        </Route>
        <Route path="*" element={<Missing />}/> 
      </Routes>
    </div>
  );
}

export default App;
