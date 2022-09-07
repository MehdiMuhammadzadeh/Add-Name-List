import React, { useState } from "react";
import UserForm from "./Components/UserForm";
import UserItem from "./Components/UserItem";
import './App.css'

const App = () => {

 const [users, setNewUsers] = useState([]);

 const addUserNameHandler = (inputValue) => {
  let id = 1;
  if(users.length > 0) {
    id = users[0].id + id;
  }
  let user = {id:id, inputValue: inputValue}
  setNewUsers([user, ...users]);

 }
 const removeUserHandler = (id) =>{
  let updatedUser = [...users].filter(user => user.id !== id);
  setNewUsers(updatedUser);
 }

  return(
    <div className="addUser-box">
      <h1>Add Your Name</h1>
      <UserForm onAddUserName={addUserNameHandler} />
      {users.map(user=> {
        return(
          <UserItem onRemoveUser={removeUserHandler} user={user} key={user.id} />
        )
      })}
    </div>
  )
}

export default App;