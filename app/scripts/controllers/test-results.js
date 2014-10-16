'use strict';
/*
function setReadTest(jsonObj, id) {
  for (var i=0; i<jsonObj.length; i++) {
    if (jsonObj[i].id === parseInt(id)) {
      jsonObj[i].unread = false;
      return jsonObj;
    }
  }
}
*/
angular.module('izvidiApp')
  .controller('TestResCtrl',[ '$scope', 'Page', '$routeParams', function ($scope, Page, $routeParams) {
  Page.setTitle('IZBRANI IZVID');
  $scope.params = $routeParams;
  $scope.id = $routeParams.testid;
/*
  $http.get('data/results.json').success(function(data){
	    $scope.alldata = data;
		//$scope.alldata = setReadTest(data, $routeParams.testid);

	});*/

$scope.alldata  = Page.getData();
  //console.log(Page.getData());

 }]);



  //<!-- http://stackoverflow.com/questions/21628378/angularjs-display-blob-pdf-in-an-angular-app->
