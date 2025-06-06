import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState, useEffect } from 'react';
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

function App() {
  const API_URL ='http://localhost:3500/items';

  const [items, setItem] = useState([])

  const [newItem, setNewItem] = useState('')

  const [search, setSearch] = useState('')

  const [fetchError, setFetcherror] =useState(null)

  const [isLoding, setLoading] = useState(true)

  useEffect (()=>{
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if(!response.ok) throw Error ("Data not received");
        const listItems = await response.json();
        setItem(listItems)
        setFetcherror(null)
      } catch (err) {
        setFetcherror(err.message)
      } finally {
          setLoading(false)
      }
    }
    (async () => fetchItems()) ()
  },[])

  const addItem = async( item) => {
    const id = items.length ? items[items.length - 1].id+1 : 1;
    const addNewItem = {id, checked: false, item}
    const listItems = [...items, addNewItem]
    setItem(listItems)

    const postOptions = {
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result =await apiRequest(API_URL,postOptions)
    if(result) setFetcherror(result)
  }

  const handleChange =async (id) => {
      const listItems = items.map ((item) =>
      item.id===id ? {...item, checked:!item.checked} : item)
      setItem(listItems)

      const myItem = listItems.filter((item) => item.id===id)

      const updateOPtion = {
        method: 'PATCH',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({checked:myItem[0].checked})
      }

      const reqURL = `${API_URL}/${id}`
      const result = await apiRequest(reqURL, updateOPtion)
      if(result) setFetcherror(result)
  }

  const handleDelet =async(id) => {
      const listItems = items.filter((item)=>item.id!==id)
      setItem(listItems);

      const deleteOptions = {method: 'DELETE'}
      const reqURL = `${API_URL}/${id}`
      const result = await apiRequest(reqURL, deleteOptions)
      if(result) setFetcherror (result)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) return;
    console.log (newItem);
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title="Todo App"/>
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoding && <p> Loading items...</p>}
        {fetchError && <p>{`Error ${fetchError}`}</p>}
        { !isLoding && !fetchError && <Content 
          items={items.filter(item => ((item.item).
          toLowerCase()).includes(search.toLocaleLowerCase()))}
          handleChange={handleChange} 
          handleDelet={handleDelet} />
        }
      </main>
      <Footer length = {items.length}/>
    </div>
  );
}

export default App;
