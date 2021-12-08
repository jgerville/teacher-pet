import {
  RECEIVE_REPORT,
  RECEIVE_REPORTS,
  REMOVE_REPORT,
} from "../../actions/report_actions";

const reportsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_REPORT:
      nextState[action.report._id] = action.report;
      return nextState;
    case RECEIVE_REPORTS:
      const objectForm = {};
      for (const report of action.reports) {
        objectForm[report._id] = report;
      }
      return objectForm;
    case REMOVE_REPORT:
      delete nextState[action.reportId];
      return nextState;
    default:
      return state;
  }
};

export default reportsReducer;