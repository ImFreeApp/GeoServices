var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require("bluebird");

var CheckInSchema = new Schema({
  creationDate: {type:Date, default: Date.now},
  userId: ObjectId,
  geo: {type: [Number], index: '2d'},
  activity: String,
});

CheckInSchema.methods.findNearby = function(latitude,longitude,distance){
  return new Promise(function(resolve,reject){
    this.model('CheckIn').find({geo:{$nearSphere: [latitude,longitude], $maxDistance: distance}},function(err,result){
      if(err){
        reject(err);
      }else{
        resolve(result);
      }
    });
  });
};

module.exports = mongoose.model('CheckIn',CheckInSchema);
