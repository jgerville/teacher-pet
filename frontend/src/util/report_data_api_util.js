import axios from "axios";

export const showReportData = async (reportDataId) => {
  const response = await axios.get(`api/reportData/${reportDataId}`);
  return response.data;
};

export const getAllReportsData = async () => {
  const response = await axios.get('api/reportData');
  return response.data;
};

export const createReportData = async (reportData) => {
  const response = await axios.post("/api/reportData", reportData);
  return response.data;
};

export const updateReportData = async (reportData) => {
  const response = await axios.patch(`api/reportData/${reportData._id}/edit`, reportData); 
  return response.data;
};

export const deleteReportData = async (reportDataId) => {
  const response = await axios.delete(`api/reportData/${reportDataId}`);
  return response.data;
};
