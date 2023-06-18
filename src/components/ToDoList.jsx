import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";

function ToDoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleToggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <>
      <div className="todo-list-container">
        <h1>TO DO LIST</h1>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleCompleted(index)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.title}
              </span>
            </li>
          ))}
        </ul>
        <ToDoItem onAddTodo={handleAddTodo} />
      </div>
    </>
  );
}

export default ToDoList;
