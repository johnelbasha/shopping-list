import { useState } from "react"

const AddItem = ({ onAdd }) => {
  const [name, setName] = useState('')


  const onSubmit = (e) => {
    e.preventDefault()
    
    onAdd({ name })
  }
  
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Item</label>
        <input type='text' placeholder="add item" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <input type='submit' value='Save Item' className="btn btn-block"/>
    </form>
  )
}

export default AddItem