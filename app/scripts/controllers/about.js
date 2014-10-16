'use strict';

/**
 * @ngdoc function
 * @name izvidiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the izvidiApp
 */

 function countNewTests(jsonObj) {
  var count = 0;
  for (var i=0; i<jsonObj.length; i++) {
    if (jsonObj[i].unread === true) {
      count ++;
    }
  }
  return count;
}


angular.module('izvidiApp')
  .controller('AboutCtrl',['$scope','Page','$http', function ($scope, Page, $http) {
  	Page.setTitle('ZADNJI IZVIDI');
    
  	//var podatki = this;
  	$http.get('data/results.json').success(function(data){
	        $scope.alldata = data;
          Page.setNewTests(countNewTests(data));
          Page.setData(data);
	     //   podatki.dataall = data;
	});
  	//fullData.setData(podatki.dataall);  
  }]);
/*
angular.module('izvidiApp').filter('prderResults', function(){
  return function(input){

  };

});
*/
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