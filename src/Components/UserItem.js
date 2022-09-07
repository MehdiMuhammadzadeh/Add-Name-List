import React from "react";

const UserItem = (props) => {

  const removeHandler = () =>{
    props.onRemoveUser(props.user.id)
  }

  return(
    <div className="user-item">
      {props.user.inputValue}
      <button className="remove-btn" onClick={removeHandler}>Delete</button>
    </div>
  )
}
// ()=>props.onRemoveUser(props.user.id)
export default UserItem;