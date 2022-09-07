import React, {useState} from "react";

const UserForm = (props) => {

  const [inputValue, setInputValue] = useState("");

  const changeInputValueHandler = (event) => {
    setInputValue(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddUserName(inputValue);
    setInputValue("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        className="user-input"
        value={inputValue}
        onChange={changeInputValueHandler}
        placeholder="Enter your name"/>
      <button className="user-btn">Add Name</button>
    </form>
  )
}

export default UserForm;