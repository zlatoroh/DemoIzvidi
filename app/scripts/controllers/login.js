'use strict';

angular.module('izvidiApp')
  .controller('LoginCtrl',['$scope', '$location','$http', 'Page', function ($scope, $location, $http, Page) {
  	$scope.login = function () {

		 $http.get('data/results.json').success(function(data){
	    	//$scope.alldata = data;
        	Page.setData(data);
        	$location.path('/about');
	 	});
	};



  }]);
