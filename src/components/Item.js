import { FaTrashAlt } from 'react-icons/fa'

const Item = ({ item, onDelete }) => {
  return (
    <div className='item'>
      <h3>{item.name} <FaTrashAlt style={{ color: 'red'}} onClick={() => onDelete(item.id)}/></h3>
    </div>
  )
}

export default Item