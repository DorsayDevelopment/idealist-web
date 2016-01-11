/**
 * Created by Brycen on 2015-06-10.
 */

var app = angular.module('idealist', ['ngRoute', 'ngAria', 'ngMaterial']);
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.view.html',
      controller: 'HomeController'
    }).
    when('/signup', {
      templateUrl: 'views/signup.view.html',
      controller: 'SignupController'
    }).
    when('/signup-full', {
      templateUrl: 'views/signup-full.view.html',
      controller: 'SignupController'
    }).
    when('/info', {
      templateUrl: 'views/signup.view.html',
      controller: 'SignupController'
    });
});