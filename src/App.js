import Header from "./components/Header";
import Items from "./components/Items";

function App() {
  const items = [
    {
      id: 1,
      name: 'Jam'
    },
    {
      id: 2,
      name: 'bread'
    },   {
      id: 3,
      name: 'milk'
    },   {
      id: 4,
      name: 'eggs'
    },   {
      id: 5,
      name: 'coffee'
    },
  ];
  
  return (
    <div className="container">
      <Header />
      <Items items={items} />
    </div>
  );
}

export default App;
