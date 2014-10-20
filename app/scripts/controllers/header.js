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

 /*   var stop = $interval(function() {
		$scope.stNovih = 0;
		$scope.getData = $http.post('data/results.json').success(function(data){
	        $scope.stNovih = 1;      
	    });
	}, 1000);

    $scope.$on('$destroy', function() {
      // Make sure that the interval is destroyed too
      $interval.cancel(stop);
    });*/
  }]);