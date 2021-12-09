import { combineReducers } from 'redux';
import classErrorsReducer from './errors/class_errors_reducer';

import session from './errors/session_errors_reducer';
import student from './errors/student_errors_reducer';
import reportData from './errors/report_data_errors_reducer';
import report from './errors/report_errors_reducer'

export default combineReducers({
  session,
  student,
  class: classErrorsReducer,
  reportData,
  report
});