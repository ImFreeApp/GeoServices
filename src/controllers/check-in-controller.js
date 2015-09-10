'use strict';
class CheckInController{
  constructor(checkInManager){
    this.checkInManager = checkInManager;
    console.log(this);
  }
  findCheckInsByLatLong(req,res){
    console.log(this);
    var latitude = req.query.latitude;
    var longitude = req.query.longitude;
    var distance = req.query.distance/3959 || 5/3959
    if(latitude && longitude){
      this.checkInManager.findCheckInsByLatLong(latitude,longitude,distance)
        .then(function(results){
          res.status(200).json(results);
        })
        .catch(function(err){
          var response = {error:"Unable to retreive locations"};
          res.status(500).json(response);
        });
    }else{
      var response = {error:'requires latitude and longitude'};
      res.status(400).json(response);
    }
  }
  createCheckIn(req,res){
    if(!req.body || !req.body.latitude || !req.body.longitude || !req.body.activity || !req.body.userId) {
      return res.status(400).json({error: "Bad Request"});
    }else{
      var longitude = req.body.longitude;
      var latitude = req.body.latitude;
      var activity = req.body.activity
      var userId = req.body.userId
      this.checkInManager.createCheckIn(userId, activity, latitude, longitude)
        .then(function(results){
          res.status(201).json(results);
        })
        .catch(function(err){
          console.error(err);
          var response = {error:'Unable to save user checkin'};
          res.status(500).json(response);
        });
    }
  }
}
module.exports = CheckInController;