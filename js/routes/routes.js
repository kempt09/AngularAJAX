var app = angular.module('myApp');

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: './views/access.html',
    controller: 'access'
  })
  .when('/current', {
    templateUrl: './views/currentforcast.html',
    controller: 'currentForcast'
  });
});