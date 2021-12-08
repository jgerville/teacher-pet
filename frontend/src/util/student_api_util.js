import axios from "axios";

export const getStudentsForUser = async () => {
  const response = await axios.get("api/students");
  return response.data;
};

export const showStudent = async (studentId) => {
  const response = await axios.get(`api/students/${studentId}`);
  return response.data;
};

export const createStudent = async (student) => {
  const response = await axios.post("api/students", [student]);
  return response.data;
};

export const createStudents = async (students) => {
  const response = await axios.post("api/students", { students });
  return response.data;
}

export const editStudent = async (student) => {
  const response = await axios.patch(
    `api/students/${student._id}/edit}`,
    student
  );
  return response.data;
};

export const deleteStudent = async (studentId) => {
  const response = await axios.delete(`api/students/${studentId}`);
  return response.data;
};
