'use strict';

angular.module('izvidiApp')
  .controller('LoginCtrl', function ($scope, $location) {
  	$scope.login = function () {
		  $location.path('/about');
	};

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
