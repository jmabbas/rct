import { Link, Route, Routes, useNavigate } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Newpost from "./Newpost";
import Postpage from "./Postpage";
import { Missing } from "./Missing";
import { PostLayout } from "./PostLayout";
import Post from "./Post";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import {format} from "date-fns"
import api from "./api/posts";

function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] =useState('')
  const [searchResults, setSearchResults]= useState([])
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchPosts = async () => {
      try{
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error ${err.message}`);
        }
      }
    }
    fetchPosts();
  },[])

  useEffect(()=> {
    const filterResults = posts.filter((post)=>
      (post.body.toLocaleLowerCase()).includes(search.toLocaleLowerCase()) || 
      (post.title.toLocaleLowerCase()).includes(search.toLocaleLowerCase()));

      setSearchResults(filterResults.reverse());

  },[posts, search])

  const hadleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length-1]. id +1: 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title : postTitle, datetime, body: postBody};
    const allPosts = [...posts, newPost]
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/')
  }

  const handleDelete = (id) => {
    const postList = posts.filter(post => post.id !==id);
    setPosts (postList);
    navigate('/')
  }

  return (
    <div className="App">
      <Header title="Social Media" />
      <Nav 
        search={search}
        setSearch ={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home posts = {searchResults}/>} />
        <Route path="post">
            <Route index element={<Newpost 
                hadleSubmit={hadleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
            />}/>
            <Route path=":id" element={<Postpage posts={posts} handleDelete={handleDelete}/>} />
        </Route>
        <Route path="about" element={<About />}/>
        <Route path="*" element={<Missing />}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
