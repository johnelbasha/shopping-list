import { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import Items from "./components/Items";

const baseURL='https://s-l-api.herokuapp.com/tasks'

function App() {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems();
      setItems(itemsFromServer);
    }

    getItems();
  }, [])

  const fetchItems = async () => {
    const res = await fetch(baseURL);
    const data = await res.json()

    return data
  }

  const addItem = async (item) => {
    console.log('addItem function called')
    console.log('title provided was:', item)

    const res = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(item)
    })

    const data = await res.json()
    setItems(...items, data)
  }

  const deleteItem = async (id) => {
    await fetch(`${baseURL}/${id}`, {
      method: 'DELETE'
    })

    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <AddItem onAdd={addItem}/>
      <Items items={items} onDelete={deleteItem} />
    </div>
  );
}

export default App;
