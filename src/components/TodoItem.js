import React from "react";

function TodoItem(props) {
  const isDone = props.todo.isDone ? "alert-secondary" : "alert-success"

  const done = props.todo.isDone ? "text-decoration-line-through" : ""

  function removeTodo(e) {
    e.preventDefault();
    props.setTodo(props.todos.filter((todo, index) => index != props.index));
  }

  function toggleTodo() {
    let todos = props.todos.map((todo, index) => {
      if (index == props.index) {
         todo.isDone = !todo.isDone
      }
      return todo;
    });
    props.setTodo(todos);
  }

  return (
    <div className={`d-flex justify-content-between alert ${isDone}`}>
      <input
        type="checkbox"
        checked={props.todo.isDone}
        onClick={toggleTodo}
      />

      <span className={`fs-1 ${done}`}>
        {props.todo.value}
      </span>

      <button
        className="btn btn-danger"
        onClick={removeTodo}
      >
        Delete
      </button>
    </div>
  )
}

export default TodoItem;
