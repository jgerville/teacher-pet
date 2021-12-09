const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'students'
  },
  reportdata: {
    type: Schema.Types.ObjectId,
    ref: 'reportdata',
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Report = mongoose.model('report', ReportSchema);