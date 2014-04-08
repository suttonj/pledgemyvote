'use strict';

angular.module('pledgeApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.formData = {};
    $scope.form = {};
  	$scope.form.actions = [{'label': 'supports'}, {'label': 'does not support'}];
  	$scope.form.action = $scope.form.actions[0];

  	//get all pledges to display
    $http.get('/api/pledges')
    	.success(function(pledges) {
    		console.log('pledges : ' + pledges);
      		$scope.pledges = pledges;
    	});

    $scope.addPledge = function() {
    	$scope.formData.text = 'I will vote for ' + $scope.formData.candidate + ' if he/she ' + $scope.form.action.label + ' ' + $scope.formData.subject;
    	console.log("adding " + $scope.formData.text);
    	$http.post('/api/pledges', $scope.formData)
    		.success(function(data) {
    			$scope.formData.text = {};
    			$scope.pledges.push(data);
    		})
    		.error(function(data) {
    			console.log('Error: ' + data);
    		});
    };

    $scope.removePledge = function(id, index) {
    	console.log("removing " + id);
    	$http.delete('/api/pledges/' + id)
    		.success(function(data) {
    			$scope.pledges.splice(index, 1);
    		})
    		.error(function(data) {
    			console.log('Error: ' + data);
    		});
    };

    $scope.commitPledge = function(pledge) {
    	pledge.commits += 1;
    	$http.put('/api/pledges/' + pledge._id, pledge)
    		.success(function(data) {
    			console.log(data);
    		});
    };

  });
