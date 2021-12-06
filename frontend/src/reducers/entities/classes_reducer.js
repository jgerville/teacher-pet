import { RECEIVE_CLASS, RECEIVE_CLASSES, REMOVE_CLASS } from "../../actions/class_actions";

const classesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_CLASS:
      nextState[action.klass.id] = action.klass;
      return nextState;
    case RECEIVE_CLASSES:
      return action.classes;
    case REMOVE_CLASS:
      delete nextState[action.classId];
      return nextState;
    default: 
      return state;
  }
}

export default classesReducer;