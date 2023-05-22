var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

var surveyRoutes = require('./routes/survey');
app.use('/survey', express.static('./public'));
app.use('/survey', surveyRoutes);

app.get('/', function (req, res) {
  res.cend('Hello World!');
});

var server = app.listen(3000, function () {
  console.log('App is running on port 3000');
});