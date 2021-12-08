import * as StudentAPI from "../util/student_api_util";
export const RECEIVE_STUDENT = "RECEIVE_STUDENT";
export const RECEIVE_STUDENTS = "RECEIVE_STUDENTS";
export const REMOVE_STUDENT = "REMOVE_STUDENT";
export const RECEIVE_STUDENT_ERRORS = "RECEIVE_STUDENT_ERRORS";

const receiveStudent = (student) => ({
  type: RECEIVE_STUDENT,
  student,
});

const receiveStudents = (students) => ({
  type: RECEIVE_STUDENTS,
  students,
});

const removeStudent = (studentId) => ({
  type: REMOVE_STUDENT,
  studentId,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_STUDENT_ERRORS,
  errors,
});

export const getStudentsByUser = () => (dispatch) =>
  StudentAPI.getStudentsForUser()
    .then((students) => dispatch(receiveStudents(students)))
    .catch((err) => dispatch(receiveErrors(err)));

export const getStudent = (studentId) => dispatch =>
  StudentAPI.showStudent(studentId)
    .then((student) => dispatch(receiveStudent(student)))
    .catch((err) => dispatch(receiveErrors(err)));

export const createStudent = (student) => dispatch =>
  StudentAPI.createStudent(student)
    .then((student) => dispatch(receiveStudent(student)))
