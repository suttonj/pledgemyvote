'use strict';

var mongoose = require('mongoose'),
    Pledge = mongoose.model('Pledge');

/**
 * Get awesome things
 */
exports.pledges = function(req, res) {
  return Pledge.find(function (err, pledges) {
    if (!err) {
      return res.json(pledges);
    } else {
      return res.send(err);
    }
  });
};