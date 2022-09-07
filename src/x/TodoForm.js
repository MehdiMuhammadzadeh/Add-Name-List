import React, { useState } from "react";

const TodoForm = (props) => {

 const [input, setInput] = useState("");

  const changeInputDataHandler = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={changeInputDataHandler}
          className="todo-input" 
          placeholder="Enter a todo"
        />
        <button className="todo-button">Add todo</button>
    </form>
  )
}

export default TodoForm;


