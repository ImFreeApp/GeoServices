'use strict';
class CheckInManager{
  constructor(checkInDao){
    this.checkInDao = checkInDao;
  }
  findCheckInsByLatLong(latitude,longitude,distance){
    var checkInDao = this.checkInDao;
    return new Promise(function(resolve,reject){
      checkInDao.findCheckInsByLatLong(latitude,longitude,distance)
        .then(resolve)
        .catch(reject);
    });
  }
  createCheckIn(userId, activity, latitude, longitude){
    var checkInDao = this.checkInDao;
    return new Promise(function(resolve,reject){
      checkInDao.createCheckIn(userId, activity, latitude, longitude)
        .then(resolve)
        .catch(reject);
    });
  }
}
module.exports = CheckInManager;