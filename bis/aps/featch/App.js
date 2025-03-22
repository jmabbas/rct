import { useState, useEffect } from 'react';
import Form from './Form';
import List from './List';
import Table from './Table';

function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [reqType, setReqtype] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(()=>{
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);

        const data = await response.json();
        setItems(data);
        console.log (data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();
    
  },[reqType])

  return (
    <div className="App">
      <Form reqType={reqType} setReqtype={setReqtype} />
      {/* <List items={items} /> */}
      <Table items={items} />
    </div>
  );
}

export default App;
