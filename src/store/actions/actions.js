import * as actionTypes from "./actionTypes";
import {
  addToLocalStorage,
  removeFromLocalStorage,
  changeItem,
  getItems,
} from "../utilis";

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

export const updatedTask = (curr, name) => {
  return {
    type: actionTypes.CHANGE_TASK,
    currentName: curr,
    taskName: name,
  };
};

export const initializeTasks = () => {
  return {
    type: actionTypes.SET_STATE,
    newState: getItems(),
  };
};

export const addTask = (newTask) => {
  return (dispatch) => {
    addToLocalStorage(newTask);
    dispatch(setTask(newTask));
  };
};

export const changeTask = (curr, name) => {
  return (dispatch) => {
    dispatch(updatedTask(curr, name));
    changeItem(curr, name);
  };
};

export const deleteTask = (taskId) => {
  return (dispatch) => {
    dispatch(removeTask(taskId));
    removeFromLocalStorage(taskId);
  };
};
