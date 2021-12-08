import { combineReducers } from "redux";
import classes from "./entities/classes_reducer";
import students from "./entities/students_reducer";

const entitiesReducer = combineReducers({
  classes,
  students,
});

export default entitiesReducer;
