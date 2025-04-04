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
import { useState } from "react";
import Nav from "./Nav";

function App() {
  const [posts, setPosts] = useState([
    {
      id:1,
      title: "My first Post",
      datetime: "July 01, 2021",
      body :"Made a video for first post"
    },
    {
      id:2,
      title: "My second Post",
      datetime: "July 02, 2022",
      body :"Made a video for second post"
    },
    {
      id:3,
      title: "My third Post",
      datetime: "July 03, 2023",
      body :"Made a video for third post"
    },
    {
      id:4,
      title: "My fourth Post",
      datetime: "July 04, 2024",
      body :"Made a video for fourth post"
    },
  ])
  const [search, setSearch] =useState('')
  const [searchResults, setSearchResults]= useState([])

  return (
    <div className="App">
      <Header title="Social Media" />
      <Nav 
        search={search}
        setSearch ={setSearch}
      />
      <Home />
      <Newpost />
      <Postpage />
      <About />
      <Missing />
      <Footer />

    </div>
  );
}

export default App;
