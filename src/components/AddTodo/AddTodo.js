import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./AddTodo.module.css";

// import TodoList from "../TodoList/TodoList";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    setTodo([
      ...todo,
      {
        id: uuid(),
        title: value,
        status: true,
      },
    ]);
    setValue("");
  }

  return (
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="Додати завдання"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button className={s.btn} onClick={saveTodo}>
          Зберегти
        </Button>
      </Col>
    </Row>
  );
}

export default AddTodo;
