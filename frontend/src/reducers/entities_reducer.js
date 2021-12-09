import { combineReducers } from "redux";
import classes from "./entities/classes_reducer";
import students from "./entities/students_reducer";
import reportData from "./entities/report_data_reducer";
import reports from "./entities/reports_reducer";

const entitiesReducer = combineReducers({
  classes,
  students,
  reportData,
  reports
});

export default entitiesReducer;
