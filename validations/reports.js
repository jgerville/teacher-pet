const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReportInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.body)) {
    errors.body = 'Body is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};