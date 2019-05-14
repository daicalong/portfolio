'use strict';

// Declare app level module which depends on views, and core components
let app = angular.module('hatomi', ['ui.router']);

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

  var worksState = {
    name: 'Base.Works',
    url: '/Works',
    redirectTo: 'Base.Works.UX'
  }

  var UXState = {
    name: 'Base.Works.UX',
    url: '/UX',
    component: 'ux'
  }

  var CardState = {
    name: 'Card',
    url: '',
    component: 'projectCardSm'
  }
  $stateProvider.state(baseState);
  $stateProvider.state(homeState);
  $stateProvider.state(worksState);
  $stateProvider.state(UXState);
  $stateProvider.state(CardState);
  $urlRouterProvider.otherwise('/Home');
}]);


