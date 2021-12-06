import {
  RECEIVE_CLASS,
  RECEIVE_CLASSES,
  RECEIVE_CLASS_ERRORS,
  REMOVE_CLASS,
} from "../../actions/class_actions";

const classErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CLASS_ERRORS:
      return action.errors;
    case RECEIVE_CLASS:
      return [];
    case RECEIVE_CLASSES:
      return [];
    case REMOVE_CLASS:
      return [];
    default:
      return state;
  }
};

export default classErrorsReducer;
