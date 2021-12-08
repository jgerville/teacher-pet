import {
  RECEIVE_REPORT_DATA,
  RECEIVE_REPORTS_DATA,
  REMOVE_REPORT_DATA,
  RECEIVE_REPORT_DATA_ERRORS,
} from "../../actions/report_data_actions";

const reportDataErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REPORT_DATA_ERRORS:
      return action.errors;
    case RECEIVE_REPORT_DATA:
      return [];
    case RECEIVE_REPORTS_DATA:
      return [];
    case REMOVE_REPORT_DATA:
      return [];
    default:
      return state;
  }
};

export default reportDataErrorsReducer;