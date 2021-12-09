import axios from "axios";

export const showClass = async (classId) => {
  const response = await axios.get(`api/classes/${classId}`);
  return response.data;
};

export const getClassesByUserId = async () => {
  const response = await axios.get(`api/classes`);
  return response.data;
};

export const createClass = async (klass) => {
  const response = await axios.post("/api/classes", klass);
  return response.data;
};

export const updateClass = async (klass) => {
  const response = await axios.patch(`api/classes/${klass._id}/edit`, klass);
  return response.data;
};

export const addStudentsToClass = async (classId, studentIds) => {
  const response = await axios.patch(`api/classes/${classId}/students`, { studentIds });
  return response.data;
}

export const deleteClass = async (classId) => {
  const response = await axios.delete(`api/classes/`, { id: classId });
  return response.data;
};
