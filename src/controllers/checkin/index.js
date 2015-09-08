var express = require('express');
var router = express.Router();
var implementation = require('./implementation');

router.use(require('body-parser').json());
router.use(require('cors')());

router.get('/', implementation.getCheckIns);
router.post('/', implementation.createCheckIns);

module.exports = router;