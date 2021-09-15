import React from "react";

function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !todo.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <p className={`${todo.completed ? "todo-item completed" : "todo-item"}`}>{`${todos.indexOf(todo)+1}.  ${text}`}</p>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
