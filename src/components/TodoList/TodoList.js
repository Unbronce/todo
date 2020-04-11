import React from "react";

import Card from "../UI/Card/Card";
import TodoListItem from "./TodoListItem/TodoListItem";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  let items = (
    <li>
      <p>Start to add tasks</p>
    </li>
  );
  if (JSON.parse(localStorage.getItem("item"))) {
    if (JSON.parse(localStorage.getItem("item")).length !== 0) {
      items = JSON.parse(localStorage.getItem("item")).map((task) => (
        <TodoListItem key={task.id} delete={() => props.deleteTask(task.id)}>
          {task.title}
        </TodoListItem>
      ));
    }
  }
  return (
    <section className={classes.TodoList}>
      <Card>
        <h2>My Todo</h2>
        <ul>{items}</ul>
      </Card>
    </section>
  );
};

export default TodoList;
