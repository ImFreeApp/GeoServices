var CheckIn = require('../../models/check-in');

module.exports = {

  getCheckIn : function(req,res){
    console.log('recieved req');
    console.log(req.query);
    var latitude = req.query.latitude;
    var longitude = req.query.longitude;
    var distance = req.query.distance/3959 || 5/3959

    if(latitude && longitude){
      CheckIn.findNearby(longitude,latitude,distance)
      .then(function(results){
        res.status(200).json(results);
      })
      .catch(function(err){
        throw err;
        var response = {error:"Unable to retreive locations"};
        res.status(500).json(response);
      });
    }else{
      var response = {error:'requires latitude and longitude'};
      res.status(400).json(response);
      
    }
  },

  postCheckIn : function(req,res){
    console.log('recieved req');
    if(!req.body || !req.body.latitude || !req.body.longitude || !req.body.activity || !req.body.userId) {
      return res.status(400).json({error: "Bad Request"});
    }else{
      var geo = [req.body.longitude, req.body.latitude];
      var activity = req.body.activity
      var userId = req.body.userId
      var checkIn = new CheckIn({geo: geo, activity: activity, userId: userId});
      checkIn.save(function(err){
        if (err) {
          var response = {error:'Unable to save user checkin'};
          res.status(500).json(response);
        }else{
          console.log('added to db');
          res.status(201).send();
        }
      });
    }
  }
};