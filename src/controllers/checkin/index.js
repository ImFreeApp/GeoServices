var express = require('express');
var router = express.Router();
var implementation = require('./implementation');

router.use(require('body-parser').json());
router.use(require('cors')());

router.get('/', function(req, res){
  implementation.getCheckIn(req, res);
});

router.post('/', function(req, res){
  implementation.postCheckIn(req, res);
});

module.exports = router;