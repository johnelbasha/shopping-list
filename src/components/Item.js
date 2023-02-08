import { FaTrashAlt } from 'react-icons/fa'

const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.name} <FaTrashAlt /></h3>
    </div>
  )
}

export default Item