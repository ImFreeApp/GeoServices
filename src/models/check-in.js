var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require("bluebird");

var CheckInSchema = new Schema({
  creationDate: {type:Date, default: Date.now},
  userId: String,
  geo: {type: [Number], index: '2d'},
  activity: Array,
});

CheckInSchema.statics.findNearby = function(longitude,latitude,distance){
  var context = this;
  return new Promise(function(resolve,reject){
    context.find({geo:{$nearSphere: [longitude,latitude], $maxDistance: distance}},function(err,result){
      if(err){
        reject(err);
      }else{
        resolve(result);
      }
    }.bind(this));
  });
};

module.exports = mongoose.model('CheckIn',CheckInSchema);
