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
      // debugger;
      nextState[action.reportData._id] = action.report;
      return nextState;
    case RECEIVE_REPORTS_DATA:
      const objectForm = {};
      for (const report of action.reportsData) {
        objectForm[report._id] = report;
      }
      return objectForm;
    case REMOVE_REPORT_DATA:
      delete nextState[action.reportDataId];
      return nextState;
    default:
      return state;
  }
};

export default reportReducer