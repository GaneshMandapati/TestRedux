import { ADD_TASK, FETCH_TASK, FETCH_TASK_Error } from "../actions/actionTypes";

const initailState = {
  tasks: []
};

const reducer = (state = initailState, action) => {
  switch (action.type) {
    case FETCH_TASK:
      return {
        tasks: action.payload
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: action.payload
      };
    case FETCH_TASK_Error:
      return {
        tasks: []
      };
    default:
      return state;
  }
};

export default reducer;
