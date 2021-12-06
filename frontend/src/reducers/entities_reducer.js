import { combineReducers } from "redux";
import classesReducer from "./entities/classes_reducer";

const entitiesReducer = combineReducers({
  classes: classesReducer,
});

export default entitiesReducer;
