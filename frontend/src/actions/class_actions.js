import * as ClassAPI from "../util/class_api_util";
export const RECEIVE_CLASS = "RECEIVE_CLASS";
export const CLEAR_AND_RECEIVE_CLASS = 'CLEAR_AND_RECEIVE_CLASS'
export const RECEIVE_CLASSES = "RECEIVE_CLASSES";
export const REMOVE_CLASS = "REMOVE_CLASS";
export const RECEIVE_CLASS_ERRORS = "RECEIVE_CLASS_ERRORS";

const receiveClass = (klass) => ({
  type: RECEIVE_CLASS,
  klass,
});

const clearAndReceiveClass = (klass) => ({
  type: CLEAR_AND_RECEIVE_CLASS,
  klass,
});

const receiveClasses = (classes) => ({
  type: RECEIVE_CLASSES,
  classes,
});

const removeClass = (classId) => ({
  type: REMOVE_CLASS,
  classId,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_CLASS_ERRORS,
  errors,
});

export const getClass = (classId) => (dispatch) =>
  ClassAPI.showClass(classId)
    .then((klass) => dispatch(clearAndReceiveClass(klass)))
    .catch((err) => dispatch(receiveErrors(err)));

export const getClassesForOneTeacher = () => (dispatch) =>
  ClassAPI.getClassesByUserId()
    .then((classes) => dispatch(receiveClasses(classes)))
    .catch((err) => receiveErrors(err));

export const createClass = (klass) => (dispatch) =>
  ClassAPI.createClass(klass)
    .then((newClass) => dispatch(receiveClass(newClass)))
    .catch((err) => dispatch(receiveErrors(err)));

export const updateClass = (klass) => (dispatch) =>
  ClassAPI.updateClass(klass)
    .then((updatedClass) => dispatch(receiveClass(updatedClass)))
    .catch((err) => dispatch(receiveErrors(err)));

export const addStudentsToClass = (classId, studentIds) => (dispatch) =>
  ClassAPI.addStudentsToClass(classId, studentIds)
    .then((updatedClass) => dispatch(receiveClass(updatedClass)))
    .catch((err) => dispatch(receiveErrors(err)));

export const deleteClass = (classId) => (dispatch) =>
  ClassAPI.deleteClass(classId)
    .then(() => dispatch(removeClass(classId)))
    .catch((err) => dispatch(receiveErrors(err)));
