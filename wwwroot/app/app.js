'use strict';

// Declare app level module which depends on views, and core components
let app = angular.module('hatomi', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  let baseState = {
    name: 'Base',
    url: '',
    component: 'base',
    redirectTo: 'Base.WIP'
  }

  let homeState = {
    name: 'Base.Home',
    url: '/Home',
    component: 'home'
  }

  let worksState = {
    name: 'Base.Works',
    url: '/Works',
    redirectTo: 'Base.Works.UX'
  }

  let uXState = {
    name: 'Base.Works.UX',
    url: '/UX',
    component: 'ux'
  }

  let illustrationState = {
    name: 'Base.Works.Illustration',
    url: '/Illustration',
    component: 'illustration'
  }

  let otherWorksState = {
    name: 'Base.Works.Other',
    url: '/Other',
    component: 'otherWorks'
  }
  let wipState = {
    name: 'Base.WIP',
    url: '/WIP',
    component: 'wip'
  }

  $stateProvider.state(baseState);
  $stateProvider.state(homeState);
  $stateProvider.state(worksState);
  $stateProvider.state(uXState);
  $stateProvider.state(illustrationState);
  $stateProvider.state(otherWorksState);
  $stateProvider.state(wipState);
  $urlRouterProvider.otherwise('/WIP');
}]);


