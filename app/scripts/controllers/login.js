'use strict';

angular.module('izvidiApp')
  .controller('LoginCtrl',['$scope', '$location', function ($scope, $location) {
  	$scope.login = function () {
		  $location.path('/about');
	};
  }]);
