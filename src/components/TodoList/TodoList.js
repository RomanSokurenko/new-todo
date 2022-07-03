import React, { useState } from "react";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./TodoList.module.css";

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");

  function deleteTodo(id) {
    let newTodo = [...todo.filter((item) => item.id !== id)];
    setTodo(newTodo);
  }

  function statusTodo(id) {
    let newTodo = [
      ...todo.filter((item) => {
        if (item.id === id) {
          item.status = !item.status;
        }
        return item;
      }),
    ];
    setTodo(newTodo);
  }

  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }

  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }

  return (
    <div>
      {todo.map((item) => (
        <div className={s.listItems} key={item.id}>
          {edit === item.id ? (
            <div>
              <input
                onChange={(e) => setValue(e.target.value)}
                value={value}
                type="text"
              />
            </div>
          ) : (
            <div className={!item.status ? s.close : ""}>{item.title}</div>
          )}
          {edit === item.id ? (
            <div>
              <Button onClick={() => saveTodo(item.id)}>Зберегти</Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(item.id)}>Видалити</Button>
              <Button
                className={s.btn}
                onClick={() => editTodo(item.id, item.title)}
              >
                Редогувати
              </Button>
              <Button className={s.btn} onClick={() => statusTodo(item.id)}>
                {item.status ? "Закрити" : " Відкрити"}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoList;
