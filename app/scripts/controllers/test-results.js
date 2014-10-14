'use strict';

angular.module('izvidiApp')
  .controller('TestResCtrl',[ '$scope', 'Page', '$routeParams','$http', function ($scope, Page, $routeParams, $http) {
  Page.setTitle('IZBRANI IZVID');
  this.params = $routeParams;
  this.id = $routeParams.testid;
  var local = this;
  $http.get('data/results.json').success(function(data){
	        local.alldata = data;   
	});
 }]);
