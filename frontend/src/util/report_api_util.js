import axios from "axios";

export const showReport = async (reportId) => {
  const response = await axios.get(`api/report/${reportId}`);
  return response.data;
};

export const getAllReports = async () => {
  const response = await axios.get('api/report');
  return response.data;
}; //may delete later

export const createReport = async (report) => {
  const response = await axios.post("/api/report", report);
  return response.data;
};

export const updateReport = async (report) => {
  const response = await axios.patch(`api/report/${report._id}/edit`, report);
  return response.data;
};

export const deleteReport = async (reportId) => {
  const response = await axios.delete(`api/report/${reportId}`);
  return response.data;
};