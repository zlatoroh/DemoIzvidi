'use strict';

angular.module('izvidiApp')
  .controller('HeaderCtrl',['$scope','$location','Page','$window',  function ($scope, $location, Page, $window) {
    $scope.Page = Page;
  	$scope.showHeader = function () {
		  return ($location.path() !== '/');
	   };
    $scope.back = function(){
      $window.history.back();
    };


  }]);
