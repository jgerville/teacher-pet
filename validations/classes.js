const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateClassInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : '';
  data.subject = validText(data.subject) ? data.subject : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Class name is required';
  }

  if (Validator.isEmpty(data.subject)) {
    errors.subject = 'Class subject is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};