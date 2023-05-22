var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('This will be the survey form');
});

router.post('/', function(req, res) {
  // Todo: Implement survey form submission
});

module.exports = router;