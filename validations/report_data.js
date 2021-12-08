const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReportDataInput(data) {
  let errors = {};

  if (Validator.isEmpty(data.genderPronouns)) {
    errors.genderPronouns = 'Student pronouns required';
  }

  if (Validator.isEmpty(data.overallScore)) {
    errors.overallScore = 'Student overall score is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};