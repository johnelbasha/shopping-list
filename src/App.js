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

  return (
    <div className="container">
      <Header />
      <AddItem />
      <Items items={items} />
    </div>
  );
}

export default App;
