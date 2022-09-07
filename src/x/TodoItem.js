import React from "react";
import {RiCloseCircleLine} from 'react-icons/ri'
import './TodoItem.css';
const TodoItem = (props) => {

  return (
    <div className="item-row">
      {props.todo.input}
      <RiCloseCircleLine onClick={() => props.onRemoveTodo(props.todo.id)} />
    </div>
  )
}
export default TodoItem;