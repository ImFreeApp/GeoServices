'use strict';
class CheckInManager{
  constructor(checkInDao){
    this.checkInDao = checkInDao;
  }
  findCheckInsByLatLong(latitude,longitude,distance){
    return this.checkInDao.findCheckInsByLatLong(latitude,longitude,distance);
  }
  createCheckIn(userId, activity, latitude, longitude){
    return this.checkInDao.createCheckIn(userId, activity, latitude, longitude);
  }
}
module.exports = CheckInManager;