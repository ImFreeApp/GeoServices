var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CheckInSchema = new Schema({
  creationDate: {type:Date, default: Date.now},
  userId: String,
  geo: {type: [Number], index: '2d'},
  activity: String,
  valid: {type:Boolean, default: true}
});

module.exports = mongoose.model('CheckIn',CheckInSchema);
