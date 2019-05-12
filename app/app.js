'use strict';

// Declare app level module which depends on views, and core components
let app = angular.module('hatomi',['ui.router',  'ngRoute', 'hatomi.view1', 'hatomi.view2', 'hatomi.version']);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

