import axios from "axios";

export const showReport = async (reportId) => {
  const response = await axios.get(`api/reports/${reportId}`);
  return response.data;
};

export const getAllReports = async () => {
  const response = await axios.get('api/reports');
  return response.data;
}; //may delete later

export const getReportsByStudentId = async (studentId) => {
  const response = await axios.get(`api/students/${studentId}/reports`);
  return response.data;
}

export const createReport = async (studentId, report) => {
  const response = await axios.patch(`/api/students/${studentId}/reports`, report);
  return response.data;
};

export const updateReport = async (report) => {
  const response = await axios.patch(`api/reports/${report._id}/edit`, report);
  return response.data;
};

export const deleteReport = async (reportId) => {
  const response = await axios.delete(`api/reports/${reportId}`);
  return response.data;
};