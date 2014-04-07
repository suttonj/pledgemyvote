'use strict';

var mongoose = require('mongoose'),
  Pledge = mongoose.model('Pledge');

/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
Pledge.find({}).remove(function() {
  Pledge.create({
    text : 'I will vote for ___ if he supports gay marriage.'
  }, {
    text : 'I will vote for ___ if she supports drug reform.'
  }, {
    text : 'I will not vote for ___ if she does not support gay marriage.'
  }, function() {
      console.log('finished populating pledges');
    }
  );
});
