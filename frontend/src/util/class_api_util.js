import axios from "axios";

export const showClass = async (classId) => {
  const response = await axios.get(`api/classes/${classId}`);
  return response.data;
};

export const getClassesByUserId = async (userId) => {
  const response = await axios.get(`api/classes/byUser/${userId}`);
  // the above route will probably be different
  return response.data;
};

export const createClass = async (klass) => {
  const response = await axios.post("/api/classes", klass);
  return response.data;
};

export const updateClass = async (klass) => {
  const response = await axios.patch(`api/classes/${klass.id}`, klass);
  return response.data;
};

export const deleteClass = async (classId) => {
  const response = await axios.delete(`api/classes/${classId}`);
  return response.data;
};
