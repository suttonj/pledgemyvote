'use strict';

var mongoose = require('mongoose'),
    Pledge = mongoose.model('Pledge');

/**
 * Get awesome things
 */
exports.getPledges = function(req, res) {
  return Pledge.find(function (err, pledges) {
    if (!err) {
    	//console.log(pledges);
      return res.json(pledges);
    } else {
    	console.log(err);
      return res.send(err);
    }
  });
};

exports.addPledge = function(req, res) {
    Pledge.create({
  		text : req.body.text,
  	}, function (err, pledges) {
    	if (!err) {
    		console.log("after add: " + pledges);
      		return res.json(pledges);
    	} else {
    		console.log("err: " + err);
      		return res.send(err);
    	}
  	});
};

exports.removePledge = function(req, res) {
  return Pledge.remove({
  		_id : req.params.id
  	}, function (err, pledges) {
	    if (!err) {
	    	console.log(pledges);
	      return res.json(pledges);
	    } else {
	    	console.log(err);
	      return res.send(err);
	    }
  	});
};