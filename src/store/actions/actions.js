import * as actionTypes from "./actionTypes";
import { removeFromLocalStorage } from "../utilis";

export const setTask = (newTask) => {
  return {
    type: actionTypes.ADD_TASK,
    task: newTask,
  };
};

export const removeTask = (taskId) => {
  return {
    type: actionTypes.DELETE_TASK,
    id: taskId,
  };
};

export const initializeTasks = () => {
  return {
    type: actionTypes.SET_STATE,
    newState: JSON.parse(localStorage.getItem("item")),
  };
};

export const addTask = (newTask) => {
  return (dispatch) => {
    dispatch(setTask(newTask));
  };
};

export const deleteTask = (taskId) => {
  return (dispatch) => {
    dispatch(removeTask(taskId));
    removeFromLocalStorage(taskId);
  };
};
