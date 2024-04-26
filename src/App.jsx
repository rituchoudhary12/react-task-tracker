
import { useEffect, useState } from "react";
import "./styles.css"
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

function App() {

  const [todos, setTodos] = useState(() => {
    const localValues = localStorage.getItem("ITEMS")

    if(localValues == null) return []
  
    return JSON.parse(localValues)
  })

  useEffect(() =>{
    localStorage.setItem("ITEMS" ,JSON.stringify(todos))
  } ,[todos])
 
 
  // ********** ADD function *********** 
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  // *******toggleTodo function **********

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          // todo.completed = completed 
          return { ...todo, completed }
        }

        return todo
      });
    });
  }

  // *******deleteTodo function **********


  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
    <>
     <NewTodoForm  onSubmit = {addTodo} />
      <h1 className="header"> Todo List </h1>
     <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}  />
    </>
  )
}

export default App;