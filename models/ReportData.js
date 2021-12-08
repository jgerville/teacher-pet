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
  genderPronouns: {
    type: Number,
    required: true
  },
  overallScore: {
    type: Number,
    required: true
  },
  // behaviorBooleans: {
  //   type: Object // {listensAttentively: true, helpsOthers: false, oftenAbsent: false}
  // },
  // performanceFields :{
  //   type: Object // {'weekly grammar tests': 4, 'oral reading tests': 3}
  // },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ReportData = mongoose.model('reportdata', ReportDataSchema);