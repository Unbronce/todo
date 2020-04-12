import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_STATE:
      return {
        ...state,
        tasks: action.newState,
      };
    case actionTypes.ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat(action.task),
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
