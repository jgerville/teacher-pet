import * as ReportAPI from "../util/report_api_util";

export const RECEIVE_REPORT = "RECEIVE_REPORT";
export const RECEIVE_REPORTS = "RECEIVE_REPORTS";
export const REMOVE_REPORT = "REMOVE_REPORT";
export const RECEIVE_REPORT_ERRORS = "RECEIVE_REPORT_ERRORS";

const receiveReport = (report) => ({
  type: RECEIVE_REPORT,
  report
});

const receiveReports = (reports) => ({
  type: RECEIVE_REPORTS,
  reports
});

const removeReport = (reportId) => ({
  type: REMOVE_REPORT,
  reportId
});

const receiveErrors = (errors) => ({
  type: RECEIVE_REPORT_ERRORS,
  errors
});

export const showReport = (reportId) => (dispatch) =>
  ReportAPI.showReport(reportId)
    .then((report) => dispatch(receiveReport(report)))
    .catch((err) => dispatch(receiveErrors(err)));

export const getAllReports = () => (dispatch) =>
  ReportAPI.getAllReports()
    .then((reportsData) => dispatch(receiveReports(reportsData)))
    .catch((err) => receiveErrors(err));

export const getReportsByStudentId = (studentId) => (dispatch) =>
  ReportAPI.getReportsByStudentId(studentId)
    .then((reportsData) => dispatch(receiveReports(reportsData)))
    .catch((err) => receiveErrors(err));

export const createReport = (studentId, report) => (dispatch) =>
  ReportAPI.createReport(studentId, report)
    .then((newReport) => dispatch(receiveReport(newReport)))
    .catch((err) => dispatch(receiveErrors(err)));

export const updateReport = (report) => (dispatch) =>
  ReportAPI.updateReport(report)
    .then((updatedReport) => dispatch(receiveReport(updatedReport)))
    .catch((err) => dispatch(receiveErrors(err)));

export const deleteReport = (reportId) => (dispatch) =>
  ReportAPI.deleteReport(reportId)
    .then(() => dispatch(removeReport(reportId)))
    .catch((err) => dispatch(receiveErrors(err)));