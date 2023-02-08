import Item from "./Item"

const Items = ({ items, onDelete }) => {
  return (
    <>
      {items.map((item, index) => (
        <Item key={index} item={item} onDelete={onDelete} />
        // <p>item</p>
      ))}
    </>
  )
}

export default Items