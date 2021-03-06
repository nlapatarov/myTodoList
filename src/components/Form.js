import React, { useRef, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";

function Form({ inputText, setInputText, todos, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([...todos, { text: inputText, completed: false, id: uuidv4() }]);
    setInputText("");

    if (inputText === "") {
      alert("You should enter a text");
      return setTodos(todos);
    } else {
      return inputText;
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form>
      <input
        onChange={inputTextHandler}
        value={inputText}
        type="text"
        className="todo-input"
        placeholder="Enter your todo"
        ref={inputRef}
      />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>

      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
