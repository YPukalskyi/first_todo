import React from "react";
import { useState } from 'react';

function InputTodo(props) {
  const [todoValue, setTodoValue] = useState('');

  function addTodo(e) {
    e.preventDefault();
    props.setTodo([...props.todos,
      { value: todoValue, isDone: false }
    ]);
  }

  return(
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />

      <button
        className="btn btn-primary"
        onClick={addTodo}
      >
        Add
      </button>
    </div>
  )
}

export default InputTodo;
