import React from "react";

import TodoItem from "./TodoItem"

function TodoList(props) {
  const todoItems = props.todos.map(
    (todo, index) =>
      <TodoItem
        todo={todo}
        index={index}
        todos={props.todos}
        setTodo={props.setTodo}
      />
  );

  return (
    <>
      { todoItems }
    </>
  )
}

export default TodoList;
