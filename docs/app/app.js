'use strict';
(function (ng, window, doc, module) {

  var dependencies = ['ui.router', 'angular-loading-bar', 'ngAnimate'];

  window.app = ng.module(module, dependencies);

  function bootstrap() {
    ng.element(doc).ready(function () {
      ng.bootstrap(doc, [module], { strictDi: true });
    });
  }

  bootstrap();
})(window.angular, window, window.document, 'hatomi'); //jshint ignore:line

(function (app) {
  app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    class stateObj {
      constructor(name, url, component, redirectTo) {
        this.name = name;
        this.url = url;
        this.component = component || null;
        this.redirectTo = redirectTo || null;
      }
    }

    $stateProvider.state(new stateObj('Nav', '', 'navigation', 'Nav.Home'));
    $stateProvider.state(new stateObj('Nav.Home', '/Home', 'home', false));
    $stateProvider.state(new stateObj('Nav.Projects', '/Projects', 'projects', 'Projects.UX'));
    $stateProvider.state(new stateObj('Nav.Projects.UX', '/UX', 'ux', false));
    $stateProvider.state(new stateObj('Nav.Projects.Details', 'Details/{projectName}', 'projectDetails', false));
    $stateProvider.state(new stateObj('Nav.Projects.Illustration', '/Illustration', 'illustration', false));
    $stateProvider.state(new stateObj('Nav.Projects.Other', '/Other', 'otherWorks', false));
    $stateProvider.state(new stateObj('Nav.WIP', '/WIP', 'wip', false));

    $urlRouterProvider.otherwise('/Home');
  }]);
})(window.app);