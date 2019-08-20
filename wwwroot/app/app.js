'use strict';

// Declare app level module which depends on views, and core components
let app = angular.module('hatomi', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
  let baseState = {
    name: 'Base',
    url: '',
    component: 'base',
    redirectTo: 'Base.Home'
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

  // var State = (name, component, url, redirect) => {
  //   this.name = name;
  //   this.component = component;
  //   this.url = url || '';
  //   this.redirect = redirect || null;
  // };

  $stateProvider.state(baseState);
  $stateProvider.state(homeState);
  $stateProvider.state(worksState);
  $stateProvider.state(uXState);
  $stateProvider.state(illustrationState);
  $stateProvider.state(otherWorksState);
  $urlRouterProvider.otherwise('/Home');
}]);


