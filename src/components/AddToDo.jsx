import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function AddToDo(props) {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = { title: inputValue, completed: false };
      props.onAddTodo && props.onAddTodo(newTodo);
      setInputValue("");
      props.onClose && props.onClose();
    }
  };

  const handleClose = () => {
    setInputValue("");
    props.onClose && props.onClose();
  };

  return (
    <>
      <Modal show={props.show} onHide={props.onClose} className="custom-modal">
        <Modal.Header>
          <div className="title-close">
            <Modal.Title>Add a new item to your To-Do List</Modal.Title>
            <button onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="add-info">
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className="large-input"
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div style={{ textAlign: "center" }}>
            <Button variant="primary" onClick={handleAddTodo}>
              Save
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddToDo;
