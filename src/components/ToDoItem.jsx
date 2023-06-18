import React, { useState } from "react";
import AddToDo from "./AddToDo";

function ToDoItem({ onAddTodo }) {
  const [buttonAdd, setButtonAdd] = useState(false);

  return (
    <>
      <button onClick={() => setButtonAdd(true)}>Add Todo</button>

      <AddToDo
        show={buttonAdd}
        onClose={() => setButtonAdd(false)}
        onAddTodo={onAddTodo}
      />
    </>
  );
}

export default ToDoItem;
