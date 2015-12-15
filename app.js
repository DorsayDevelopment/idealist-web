/**
 * Created by Brycen on 2015-06-10.
 */

var app = angular.module('idealist', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.view.html',
      controller: 'HomeController'
    })
});