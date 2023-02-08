const AddItem = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Item</label>
        <input type='text' placeholder="add item"/>
      </div>
      <input type='submit' value='Save Item' className="btn btn-block"/>
    </form>
  )
}

export default AddItem