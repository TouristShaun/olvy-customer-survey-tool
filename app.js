var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, function () {
  console.log('App is running on port 3000');
});