/*
App.js
import React, { useState } from "react";
import './App.css'
import TodoForm from "./Components/TodoForm";
import TodoItem from "./Components/TodoItem";
const App = () => {
 
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    let id = 1;
    if(todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = {id:id, text:text, completed: false}
    let newTodo = [todo, ...todos];
    setTodos(newTodo);
    console.log(newTodo);
  }

  const removeTodoHandler = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }

  return(
    <div className="todo-app">
        <h1>Add Todo</h1>
        <TodoForm onAddTodo={addTodoHandler} />
        {todos.map((todo) => {
          return (
            <TodoItem onRemoveTodo={removeTodoHandler} todo={todo} key={todo.id} />
          )
        })}
    </div>
  )
}

export default App;


*/






/*
TodoItem.js

import React from "react";
import {RiCloseCircleLine} from 'react-icons/ri'
const TodoItem = (props) => {

  return (
    <div className="todo-row">
      {props.todo.text}
    <div className="iconsContainer">
      <RiCloseCircleLine className="icons" onClick={()=>props.onRemoveTodo(props.todo.id)}/>
    </div>
    </div>
  )
}

export default TodoItem;
*/

/*
TodoForm
import React, { useState } from "react";

const TodoForm = (props) => {

  const [input, setInput] = useState("");

  const changeDataHandler = (event) => {
    setInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTodo(input);
    setInput("");
  }

  return(
    <form onSubmit={handleSubmit} className="todo-form">
      <input onChange={changeDataHandler} value={input} className="todo-input"/>
      <button type="submit" className="todo-button">Add Todo</button>
    </form>
  )
}

export default TodoForm;

*/