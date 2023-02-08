import { useEffect, useState } from "react";
import AddItem from "./components/AddItem";
import Header from "./components/Header";
import Items from "./components/Items";

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
    const res = await fetch('http://localhost:5002/items');
    const data = await res.json()

    return data
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5002/items/${id}`, {
      method: 'DELETE'
    })

    setItems(items.filter((item) => item.id !== id))
  }

  return (
    <div className="container">
      <Header />
      <AddItem />
      <Items items={items} onDelete={deleteTask} />
    </div>
  );
}

export default App;
