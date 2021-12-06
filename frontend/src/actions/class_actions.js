export const RECEIVE_CLASS = 'RECEIVE_CLASS';
export const RECEIVE_CLASSES = 'RECEIVE_CLASSES';

const receiveClass = (klass) => ({
  type: RECEIVE_CLASS,
  klass,
})

const receiveClasses = (classes) => ({
  type: RECEIVE_CLASSES,
  classes,
})

