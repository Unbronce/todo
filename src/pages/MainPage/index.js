import React, { useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "store/actions/actions";

import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

import classes from "./styles.module.css";

const MainPage = (props) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const onTaskAdded = useCallback((task) => dispatch(actions.addTask(task)), [
    dispatch,
  ]);
  const onTaskDelete = (id) => dispatch(actions.deleteTask(id));
  const onInitializeTasks = useCallback(
    () => dispatch(actions.initializeTasks()),
    [dispatch]
  );

  useEffect(() => {
    onInitializeTasks();
  }, [onInitializeTasks]);

  return (
    <div className={classes.MainPage}>
      <TodoForm addTask={onTaskAdded} />
      <TodoList tasks={tasks} deleteTask={onTaskDelete} />
    </div>
  );
};

export default MainPage;
