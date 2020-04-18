import React from "react";

import Card from "../../../components/UI/Card/Card";
import TodoListItem from "./TodoListItem/TodoListItem";
import classes from "./TodoList.module.css";

const TodoList = React.memo((props) => {
  let items = (
    <li>
      <p>Start to add tasks</p>
    </li>
  );
  if (props.tasks.length >= 1) {
    items = (
      <ul>
        {props.tasks.map((task) => (
          <TodoListItem key={task.id} delete={() => props.deleteTask(task.id)}>
            {task.title}
          </TodoListItem>
        ))}
      </ul>
    );
  }
  return (
    <section className={classes.TodoList}>
      <Card>
        <h2>My Todo</h2>
        <ul>{items}</ul>
      </Card>
    </section>
  );
});

export default TodoList;
