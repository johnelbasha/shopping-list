import Item from "./Item"

const Items = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <Item key={index} item={item} />
        // <p>item</p>
      ))}
    </>
  )
}

export default Items