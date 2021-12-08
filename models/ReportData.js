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
  checkboxes: {
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
    oftenAbsent: {
      type: Boolean
    },
    oftenLate: {
      type: Boolean
    },
    distracted: {
      type: Boolean
    },
    rude: {
      type: Boolean
    },
    disruptive: {
      type: Boolean
    },
    homeworkCompletion: {
      type: Boolean
    }
  },
  categories: {
    type: Object,
    required: true
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