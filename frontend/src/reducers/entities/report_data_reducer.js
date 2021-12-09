import {
  RECEIVE_REPORT_DATA,
  RECEIVE_REPORTS_DATA,
  REMOVE_REPORT_DATA,
} from "../../actions/report_data_actions";

const reportReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_REPORT_DATA:
      nextState[action.report._id] = action.report;
      return nextState;
    case RECEIVE_REPORTS_DATA:
      const objectForm = {};
      for (const report of action.reports) {
        objectForm[report._id] = report;
      }
      return objectForm;
    case REMOVE_REPORT_DATA:
      delete nextState[action.reportId];
      return nextState;
    default:
      return state;
  }
};

export default reportReducer