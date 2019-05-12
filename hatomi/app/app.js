'use strict';

// Declare app level module which depends on views, and core components
let app = angular.module('hatomi', []);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
