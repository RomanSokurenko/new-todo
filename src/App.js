import React, { useState } from "react";
import Header from "./components/Header/Header";
import CreatedTasks from "./components/LocalSotrage/CreatedTasks";
import UpdatedTasks from "./components/LocalSotrage/UpdatedTasks";
import DeletedTasks from "./components/LocalSotrage/DeletedTasks";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { Container } from "react-bootstrap";

function App() {
  const [todo, setTodo] = useState([]);

  return (
    <Container>
      <Header />
      <CreatedTasks />
      <UpdatedTasks />
      <DeletedTasks />
      <AddTodo todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
