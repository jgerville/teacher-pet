import {
  RECEIVE_STUDENT,
  RECEIVE_STUDENTS,
  RECEIVE_STUDENT_ERRORS,
  REMOVE_STUDENT,
} from "../../actions/student_actions";

const studentErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_STUDENT_ERRORS:
      return action.errors;
    case RECEIVE_STUDENT:
      return [];
    case RECEIVE_STUDENTS:
      return [];
    case REMOVE_STUDENT:
      return [];
    default:
      return state;
  }
};

export default studentErrorsReducer;
