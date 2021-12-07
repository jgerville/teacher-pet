const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  note: {
    type: String
  },
  students: {
    type: Array
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Class = mongoose.model('class', ClassSchema);