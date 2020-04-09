import React from "react";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions/actions";

import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";

import classes from "./MainPage.module.css";

const MainPage = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const onTaskAdded = (task) => dispatch(actions.addTask(task));
  const onTaskDelete = (id) => dispatch(actions.deleteTask(id));

  return (
    <div className={classes.MainPage}>
      <TodoForm addTask={onTaskAdded} />
      <TodoList tasks={tasks} deleteTask={onTaskDelete} />
    </div>
  );
};

export default MainPage;
