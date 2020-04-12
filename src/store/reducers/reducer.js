import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: JSON.parse(localStorage.getItem("item")),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return {
        ...state,
        tasks: action.task,
      };
    case actionTypes.DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.id),
      };

    default:
      return state;
  }
};

export default reducer;
