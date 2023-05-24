var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('This will be the survey form');
});

router.post('/', function(req, res) {
  // TODO: Implement survey form submission
  console.log('Survey submitted');
  console.log(req.name);
  console.log(req.email);
  console.log(req.feedback);
  res.end('Thank you for submitting your feedback.');
});

module.exports = router;