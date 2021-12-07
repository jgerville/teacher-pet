const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  note: {
    type: String
  },
  classes: {
    type: Array
  },
  reports: {
    type: Array
  }
});

module.exports = Student = mongoose.model('student', StudentSchema);