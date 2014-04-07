'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var PledgeSchema = new Schema({
  text: String
});

/**
 * Validations
 */
PledgeSchema.path('text').validate(function (str) {
  return str != "";
}, 'Text must not be empty');

mongoose.model('Pledge', PledgeSchema);
