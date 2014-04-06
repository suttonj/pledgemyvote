'use strict';

angular.module('pledgeApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    $scope.pledges = [
    	'I will vote for ____ if he/she supports _____',
    	'I will not vote for ____ if he/she supports _____',
    	'I will vote for ____ if he/she does not support _____'
    ];

    $scope.addPledge = function() {
    	$scope.pledges.push($scope.pledge);
    	$scope.pledge = '';
    };

    $scope.removePledge = function(index) {
    	$scope.pledges.splice(index, 1);
    };
  });
