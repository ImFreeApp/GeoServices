var CheckInDao = require('./models/check-in-dao');
var CheckInManager = require('./managers/check-in-manager');
var CheckInController = require('./controllers/check-in-controller');
var express = require('express');
var router = express.Router();

var checkInDao = new CheckInDao();
var checkInManager = new CheckInManager(checkInDao);
var checkInController = new CheckInController(checkInManager);

router.use(require('body-parser').json());
router.use(require('cors')());

router.get('/checkin/', function(req,res){
  checkInController.findCheckInsByLatLong(req,res);
});
router.post('/checkin/', function(req,res){
  checkInController.createCheckIn(req,res);
});

module.exports = router;