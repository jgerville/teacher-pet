import {
  RECEIVE_REPORT,
  RECEIVE_REPORTS,
  REMOVE_REPORT,
  RECEIVE_REPORT_ERRORS,
} from "../../actions/report_actions";

const reportErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_REPORT_ERRORS:
      debugger;
      return action.errors;
    case RECEIVE_REPORT:
      return [];
    case RECEIVE_REPORTS:
      return [];
    case REMOVE_REPORT:
      return [];
    default:
      return state;
  }
};

export default reportErrorsReducer;