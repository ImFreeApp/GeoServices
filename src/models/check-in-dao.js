'use strict';
var CheckInSchema = require('./check-in');

class CheckInDAO {
  constructor(){

  }
  findCheckInsByLatLong(latitude,longitude,distance){
    return new Promise(function(resolve,reject){
      CheckInSchema.find({geo:{$nearSphere: [longitude,latitude], $maxDistance: distance}},function(err,result){
        if(err){
          console.error(err);
          reject(err);
        }else{
          resolve(result);
        }
      });
    });
  }
  createCheckIn(userId, activity, latitude, longitude){
    return new Promise(function(resolve,reject){
      //get geo array
      var geo = [longitude, latitude];
      // If there's a previous check-in set it to false
      CheckInSchema.findOne({userId: userId, valid: true}, function(err, model){
        if(err){
          console.error(err);
          return reject(new Error('unable to access the database'));
        }
        if(model){
          model.valid = false;
          model.save(function(err){
            if(err){
              console.error(err);
              return reject(new Error('unable to access the database'));
            }
          });
        }
        // Create a new check in
        var newCheckIn = new CheckInSchema({geo: geo, activity: [activity], userId: userId});
        newCheckIn.save(function(err){
          if(err){
            console.error(err);
            return reject(new Error('could not create new check-in'));
          }
          else{
            resolve(newCheckIn);
          }
        });
      });
    });
  }
}

module.exports = CheckInDAO;
