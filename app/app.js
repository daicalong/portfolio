'use strict';

// Declare app level module which depends on views, and core components
let app = angular.module('hatomi', ['ui.router', 'ngRoute', 'hatomi.view1', 'hatomi.view2', 'hatomi.version']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  var baseState = {
    name: 'Base',
    url: '',
    component: 'base',
    redirectTo: 'Base.Home'
  }
  var homeState = {
    name: 'Base.Home',
    url: '/Home',
    component: 'home'
  }
  $stateProvider.state(baseState);
  $stateProvider.state(homeState);
  $urlRouterProvider.otherwise('/Home');
}]);

app.component("home",
  {
    templateUrl: '/states/home/home.template.html',
    controller: homeController
  });



function homeController() {
  var $ctrl = this;
  $ctrl.person = { 'name': 'hatomi' };
}

app.controller('homeController', homeController);


