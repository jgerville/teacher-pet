import * as ReportDataAPI from "../util/report_data_api_util";

export const RECEIVE_REPORT_DATA = "RECEIVE_REPORT_DATA";
export const RECEIVE_REPORTS_DATA = "RECEIVE_REPORTS_DATA";
export const REMOVE_REPORT_DATA = "REMOVE_REPORT_DATA";
export const RECEIVE_REPORT_DATA_ERRORS = "RECEIVE_REPORT_DATA_ERRORS";

const receiveReportData = (reportData) => ({
  type: RECEIVE_REPORT_DATA,
  reportData
});

const receiveReportsData = (reportsData) => ({
  type: RECEIVE_REPORTS_DATA,
  reportsData
});

const removeReportData = (reportDataId) => ({
  type: REMOVE_REPORT_DATA,
  reportDataId
});

const receiveErrors = (errors) => ({
  type: RECEIVE_REPORT_DATA_ERRORS,
  errors
});

export const showReportData = (reportDataId) => (dispatch) =>
  ReportDataAPI.showReportData(reportDataId)
    .then((reportData) => dispatch(receiveReportData(reportData)))
    .catch((err) => dispatch(receiveErrors(err)));

export const getAllReportsData = () => (dispatch) =>
  ReportDataAPI.getAllReportsData()
    .then((reportsData) => dispatch(receiveReportsData(reportsData)))
    .catch((err) => receiveErrors(err));

export const createReportData = (reportData) => (dispatch) =>
  ReportDataAPI.createReportData(reportData)
    .then((newReportData) => dispatch(receiveReportData(newReportData)))
    .catch((err) => dispatch(receiveErrors(err)));

export const updateReportData = (reportData) => (dispatch) =>
  ReportDataAPI.updateReportData(reportData)
    .then((updatedReportData) => dispatch(receiveReportData(updatedReportData)))
    .catch((err) => dispatch(receiveErrors(err)));

export const deleteReportData = (reportDataId) => (dispatch) =>
  ReportDataAPI.deleteReportData(reportDataId)
    .then(() => dispatch(removeClass(reportDataId)))
    .catch((err) => dispatch(receiveErrors(err)));
