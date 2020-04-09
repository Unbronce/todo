import React from "react";

import Card from "../UI/Card/Card";
import TodoListItem from "./TodoListItem/TodoListItem";
import classes from "./TodoList.module.css";

const TodoList = (props) => {
  return (
    <section className={classes.TodoList}>
      <Card>
        <h2>My Todo</h2>
        <ul>
          {props.tasks.map((task) => (
            <TodoListItem delete={() => props.deleteTask(task.id)}>
              {task.title}
            </TodoListItem>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default TodoList;
