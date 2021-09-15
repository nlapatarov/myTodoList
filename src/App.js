import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  // текста от input полето

  const [todos, setTodos] = useState([]);
  // създаваме масив от обекти, съдържащи информация за всички нови добавени li item-и

  const [status, setStatus] = useState("all");
  // state който ще съхранява информация относно опциите в select менюто. Например : completed, uncompleted, all

  const [filteredTodos, setFilteredTodos] = useState([]);
  // създаваме масив от обекти, всеки един от които ще съхранява информация спрямо избраната в select менюто стойност

  const filterHandlerFunc = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandlerFunc();
    saveLocalTodos();
  }, [todos, status]);

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  };

  const msgStyles = {
    color: "red",
    inputText: "No Todos To Show",
    justifyContent: "center",
    display: "flex"
  }

  return (
    <div className="App">
      <header>
        <h1>Todo list </h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      {todos.length ? (
        <TodoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      ) : (
        <h1 style={msgStyles}>{msgStyles.inputText}</h1>
      )}
    </div>
  );
}

export default App;
