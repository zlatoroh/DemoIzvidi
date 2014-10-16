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

$scope.tapped = function($event) {
  var ele = $event.target;
  var x = Math.floor(Math.random() * 200) + 1,
      y = Math.floor(Math.random() * 100) + 1,
      z = Math.floor(Math.random() * 6) + 1,
      rot = Math.floor(Math.random()*360)+1;
  $(ele).css({
    'transform': 
      "translate3d("+x+"px,"+y+"px,"+z+"px)" +
      "rotate("+rot+"deg)"
  });
}

$scope.alldata  = Page.getData();


 }]);



  //<!-- http://stackoverflow.com/questions/21628378/angularjs-display-blob-pdf-in-an-angular-app->

/*
  	             if (event.target === element[0].children[0]) {
                  if (!x) { x = event.center.x; }
                  if (!y) { y = event.center.y; }

                  scope.$apply(function () {
                    x = event.center.x - 250;
                    y = event.center.y - 250;

                    element.css({
                      'left' : x + 'px',
                      'top' : y + 'px'
                    });
                  });
                }

	  });*/

/*
$scope.tapped = function($event) {
  var ele = $event.target;
  var x = Math.floor(Math.random() * 200) + 1,
      y = Math.floor(Math.random() * 100) + 1,
      z = Math.floor(Math.random() * 6) + 1,
      rot = Math.floor(Math.random()*360)+1;
  $(ele).css({
    'transform': 
      "translate3d("+x+"px,"+y+"px,"+z+"px)" +
      "rotate("+rot+"deg)"
  });
}


*//*
  $http.get('data/results.json').success(function(data){
	    $scope.alldata = data;
		//$scope.alldata = setReadTest(data, $routeParams.testid);

	});*/