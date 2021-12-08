// const Validator = require('validator');
// const validText = require('./valid-text');

// module.exports = function validateReportContentInput(data) {
//   let errors = {};

//   if (Validator.isEmpty(data.title)) {
//     errors.name = 'Title is required';
//   }

//   if (Validator.isEmpty(data.value)) {
//     errors.name = 'Value is required';
//   }

//   if (Validator.isEmpty(data.content)) {
//     errors.subject = 'Content is required';
//   }

//   return {
//     errors,
//     isValid: Object.keys(errors).length === 0
//   };
// };