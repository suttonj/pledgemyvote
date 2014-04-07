'use strict';

angular.module('pledgeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/pledges').success(function(pledges) {
      	$scope.pledges = pledges;

       	$scope.addPledge = function() {
    		$scope.pledges.push($scope.pledge);
    		$scope.pledge = '';
       	};

    	$scope.removePledge = function(index) {
    		$scope.pledges.splice(index, 1);
    	};
    });
  });
