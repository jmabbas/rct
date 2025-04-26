import {createContext, useState, useEffect, Children } from 'react'
import {format} from "date-fns"
import api from "../api/posts";
import useWindowSize from "../hooks/useWindowSize";
import { useNavigate } from 'react-router-dom';

const DataContext = createContext ({})

export const DataProvider =({children}) => {

    const [posts, setPosts] = useState([])
    const [search, setSearch] =useState('')
    const [searchResults, setSearchResults]= useState([])
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const {width}= useWindowSize();
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
  
    const hadleSubmit = async (e) => {
      e.preventDefault();
      const id = posts.length ? Math.max(...posts.map(post => post.id)) + 1 : 1;
      const datetime = format(new Date(), 'MMMM dd, yyyy pp');
      const newPost = { id, title: postTitle, datetime, body: postBody };
      try {
        const response = await api.post('/posts', newPost);
        const allPosts = [...posts, response.data]; // use backend-generated ID
        setPosts(allPosts);
        setPostTitle('');
        setPostBody('');
        navigate('/')
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
  
    const handleEdit = async (id) => {
      const datetime= format(new Date(), 'MMMM dd, yyyy pp');
      const updatePost = {id, title: editTitle, datetime, body: editBody };
      
      try{
        const response = await api.put(`/posts/${id}`, updatePost)
        setPosts(posts.map(post=> post.id===id ? {...response.data} : post));
        console.log(setPosts);
        setEditTitle('');
        setEditBody('');
        navigate('/')
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }
  
    const handleDelete = async(id) => {
      try{
        await api.delete(`/posts/${id}`);
        const postList = posts.filter(post => post.id !==id);
        setPosts (postList);
        navigate('/')
      } catch (err) {
        console.log(`Error ${err.message}`)
      }
    }

  return (
    <DataContext.Provider value={{
        width,search, setSearch, searchResults,
        hadleSubmit, postTitle, setPostTitle, postBody, setPostBody,
        posts, handleDelete,handleEdit,
        handleEdit, editBody,setEditBody,editTitle,setEditTitle
    }}
    
    >
        {children}
    </DataContext.Provider>
  )
}

export default DataContext