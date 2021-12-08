import {
  RECEIVE_STUDENT,
  RECEIVE_STUDENTS,
  REMOVE_STUDENT,
} from "../../actions/student_actions";

const studentsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_STUDENT:
      nextState[action.student._id] = action.student;
      return nextState;
    case RECEIVE_STUDENTS:
      const objectForm = {};
      for (const student of action.students) {
        objectForm[student._id] = student;
      }
      return objectForm;
    case REMOVE_STUDENT:
      delete nextState[action.studentId];
      return nextState;
    default:
      return state;
  }
};

export default studentsReducer;
