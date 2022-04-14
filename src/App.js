import React from "react";
import { useState } from 'react';

import TodoList from "./components/TodoList"
import InputTodo from "./components/InputTodo"

function App() {
  const[todos, setTodo] = useState([
    { value: "todo_1", isDone: false },
    { value: "todo_2", isDone: true  },
    { value: "todo_3", isDone: true  }
  ])

  return (
    <div className="card">
      <div className="card-body">
        <TodoList todos={todos} setTodo={setTodo} />
        <InputTodo todos={todos} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
