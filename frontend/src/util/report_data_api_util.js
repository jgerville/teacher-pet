import axios from "axios";

export const showEvaluation = async (reportId) => {
  const response = await axios.get(`api/reports/${reportId}`);
  return response.data;
};

export const getAllEvaluations = async () => {
  const response = await axios.get('api/reports');
  return response.data;
};

export const createEvaluation = async (report) => {
  const response = await axios.post("/api/reports", report);
  return response.data;
};

export const updateEvaluation = async (report) => {
  const response = await axios.patch(`api/reports/${report._id}/edit`, report); 
  return response.data;
};

export const deleteEvaluation = async (reportId) => {
  const response = await axios.delete(`api/reports/${reportId}`);
  return response.data;
};
