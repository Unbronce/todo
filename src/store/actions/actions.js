import * as actionTypes from "./actionTypes";

export const addTask = (newTask) => {
  return {
    type: actionTypes.ADD_TASK,
    task: newTask,
  };
};

export const deleteTask = (taskId) => {
  return {
    type: actionTypes.DELETE_TASK,
    id: taskId,
  };
};
