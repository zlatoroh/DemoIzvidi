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
    if (jsonObj[i].unread === true && jsonObj[i].visible === true) {
      count ++;
    }
  }
  return count;
}

 function showNewElements(jsonObj) {
  for (var i=0; i<jsonObj.length; i++) {
    if (jsonObj[i].visible === false) {
        jsonObj[i].visible = true;
    }
  }
  return jsonObj;
}

angular.module('izvidiApp')
  .controller('AboutCtrl',['$scope','Page','$http','$interval', function ($scope, Page, $http, $interval) {
    Page.setTitle('ZADNJI IZVIDI');
    $scope.alldata = Page.getData();
    Page.setNewTests(countNewTests($scope.alldata));
 /*   $scope.shownew = function(){
      var test  = showNewElements($scope.alldata);
      Page.setData(test);
      Page.setNewTests(countNewTests(test));
    };
*/
  var intervalko = $interval(function() {
    //$scope.getData = $http.get('scripts/podatki.json').success(function(data){
        var test  = showNewElements($scope.alldata);
      Page.setData(test);
      Page.setNewTests(countNewTests(test));
      console.log('dd');
      $interval.cancel(intervalko);
  }, 5000);

  
 /*   $http.get('data/results.json').success(function(data){
          $scope.alldata = data;
          Page.setNewTests(countNewTests(data));
          Page.setData(data);
   });*/

  }]);
