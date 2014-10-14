'use strict';

/**
 * @ngdoc function
 * @name izvidiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the izvidiApp
 */
angular.module('izvidiApp')
  .controller('AboutCtrl',['$scope','Page','$http', function ($scope, Page, $http) {
  	Page.setTitle('ZADNJI IZVIDI');
  	//var podatki = this;
  	$http.get('data/results.json').success(function(data){
	        $scope.alldata = data;   
	     //   podatki.dataall = data;
	});
  	//fullData.setData(podatki.dataall);  
  }]);


/*

klic uporabis takole ce ne uporabis scopa + 
ng-controller="AboutCtrl as about" v templatu

angular.module('izvidiApp')
  .controller('AboutCtrl',['$scope','Page','$http', function ($scope, Page, $http) {
  	Page.setTitle('ZADNJI IZVIDI');
  	var tale = this;
  	$http.get('data/results.json').success(function(data){
	        tale.alldata = data;       
	});

  }]);


*/