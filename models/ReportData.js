const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportDataSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'students'
  },
  // checkboxes: {
    genderPronouns: {
      type: Number,
      required: true
    },
    overallScore: {
      type: Number,
      required: true
    },
    listensAttentively: {
      type: Boolean
    },
    helpsOthers: {
      type: Boolean
    },
    participatesOften: {
      type: Boolean
    },
    asksQuestions: {
      type: Boolean
    },
    goodAttendance: {
      type: Boolean
    },
    onTime: {
      type: Boolean
    },
    polite: {
      type: Boolean
    },
    notDisruptive: {
      type: Boolean
    },
    homeworkCompletion: {
      type: Boolean
    },
    categories: { // { categories: [{banana: 1}, {rails assessment: 3}] }
      type: Object,
    },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = ReportData = mongoose.model('reportdata', ReportDataSchema);