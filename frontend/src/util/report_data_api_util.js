import axios from "axios";

export const showReportData = async (reportDataId) => {
  const response = await axios.get(`api/reportdata/${reportDataId}`);
  return response.data;
};

// export const getAllReportsData = async () => {
//   const response = await axios.get('api/reportdata');
//   return response.data;
// };

export const createReportData = async (reportData) => {
  const response = await axios.post("/api/reportdata", reportData);
  return response.data;
};

// export const updateReportData = async (reportData) => {
//   const response = await axios.patch(`api/reportdata/${reportData._id}/edit`, reportData); 
//   return response.data;
// };

// export const deleteReportData = async (reportDataId) => {
//   const response = await axios.delete(`api/reportdata/${reportDataId}`);
//   return response.data;
// };
