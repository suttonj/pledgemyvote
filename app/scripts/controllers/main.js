'use strict';

angular.module('pledgeApp')
  .controller('MainCtrl', function ($scope, $http) {
  	$scope.formData = {};

  	//get all pledges to display
    $http.get('/api/pledges')
    	.success(function(pledges) {
    		console.log('pledges : ' + pledges);
      		$scope.pledges = pledges;
    	});

    $scope.addPledge = function() {
    	console.log("adding " + $scope.formData.text);
    	$http.post('/api/pledges', $scope.formData)
    		.success(function(data) {
    			$scope.formData = {};
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
    		})
    };
  });
