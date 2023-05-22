var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SurveySchema = new Schema({
  question: String,
  responses: [{
    type: String
  }]
});

module.exports = mongoose.model('Survey', SurveySchema);