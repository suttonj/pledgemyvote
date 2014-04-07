'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('pledgeApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/pledges')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of pledges to the scope', function () {
    expect(scope.pledges).toBeUndefined();
    $httpBackend.flush();
    expect(scope.pledges.length).toBe(4);
  });
});
