'use strict';

// Declare app level module which depends on views, and core components
let app = angular.module('hatomi', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  class stateObj {
    constructor(name, url, component, redirectTo) {
      this.name = name;
      this.url = url;
      this.component = component || null;
      this.redirectTo = redirectTo || null;
    }
  }

  $stateProvider.state(new stateObj('Base', '', 'base', 'Base.WIP'));
  $stateProvider.state(new stateObj('Base.Home', '/Home', 'home', false));
  $stateProvider.state(new stateObj('Base.Works', '/Works', 'works', 'Base.Works.UX'));
  $stateProvider.state(new stateObj('Base.Works.UX', '/UX', 'ux', false));
  $stateProvider.state(new stateObj('Base.Works.Illustration', '/Illustration', 'illustration', false));
  $stateProvider.state(new stateObj('Base.Works.Other', '/Other', 'otherWorks', false));
  $stateProvider.state(new stateObj('Base.WIP', '/WIP', 'wip', false));

  $urlRouterProvider.otherwise('/WIP');
}]);


