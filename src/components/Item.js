import { FaTrashAlt } from 'react-icons/fa'

const Item = ({ item }) => {
  return (
    <div className='item'>
      <h3>{item.name} <FaTrashAlt style={{ color: 'red'}}/></h3>
    </div>
  )
}

export default Item