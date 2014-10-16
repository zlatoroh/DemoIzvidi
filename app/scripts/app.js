'use strict';

/**
 * @ngdoc overview
 * @name izvidiApp
 * @description
 * # izvidiApp
 *
 * Main module of the application.
 */
var app = angular
  .module('izvidiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/results/:testid', {
        templateUrl: 'views/test-results.html',
        controller: 'TestResCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.factory('Page', function(){
  var title = '';
  var newTests = 0;
  var mainData = {};

  return {
    title: function() { return title; },
    setTitle: function(newTitle) { title = newTitle; },

    newTests: function() { return newTests;},
    setNewTests: function(newt) {newTests = newt;},

    getData: function() {return mainData;},
    setData: function(mData) {mainData = mData;}

  };
});

/*app.factory('fullData', function(){
  var dataobj = '';
  return {
    dataobj: function() { return dataobj; },
    setData: function(newData) { dataobj = newData; }
  };
});*/



app.directive('izvidiHeader', function(){
  // Runs during compile
  return {
       restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
       templateUrl: 'views/header.html',
       replace: true

  };
});

