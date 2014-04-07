/**TODO Implement service -- Not used yet */

angular.module('pledgeApp')

	.factory('pledgeService', function($http) {
		return {
			get : function() {
				return $http.get('/api/pledges');
			},
			create : function(pledgeData) {
				return $http.post('/api/pledges', pledgeData);
			},
			delete : function(id) {
				return $http.delete('/api/pledges/' + id);
			}
		}
		
	});