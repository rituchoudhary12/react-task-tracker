
import { useState } from "react"

function NewTodoForm({onSubmit}) {

  
  const [newItem, setnewItem] = useState(""); // default value of item is empty
  // const [todos, setTodos] = useState([]);
  // ******* submit function **********
  
  function handleSubmit(e) {
    e.preventDefault()
    
    if(newItem === "") return
    onSubmit(newItem)

    // addTodo(newItem)

    setnewItem("")
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"> New Item </label>
        <input 
        type="text" 
        value={newItem} 
        onChange={e => setnewItem(e.target.value)} 
        id="item" 
        />
      </div>
      <button className="btn">
        Add
      </button>
    </form>
  )
}

export default NewTodoForm;