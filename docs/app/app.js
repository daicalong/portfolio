'use strict';
(function(ng, window, doc, module) {

    var dependencies = ['ui.router', 'angular-loading-bar', 'ngAnimate', 'ngCookies'];

    window.app = ng.module(module, dependencies);

    function bootstrap() {
        ng.element(doc).ready(function() {
            ng.bootstrap(doc, [module], { strictDi: true });
        });
    }

    bootstrap();
})(window.angular, window, window.document, 'hatomi'); //jshint ignore:line

(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        class stateObj {
            constructor(name, url, component, redirectTo) {
                this.name = name;
                this.url = url;
                this.component = component || null;
                this.redirectTo = redirectTo || null;
            }
        }

        $stateProvider.state(new stateObj('Main', '', 'main', 'Main.WIP'));
        $stateProvider.state(new stateObj('Main.Home', '/Home', 'home', false));
        $stateProvider.state(new stateObj('Main.Projects', '/Projects', 'projects', 'Main.Projects.Overview'));
        $stateProvider.state(new stateObj('Main.Projects.Overview', '', 'overview', false));
        $stateProvider.state(new stateObj('Main.Projects.UX', '/UX', 'ux', false));
        $stateProvider.state(new stateObj('Main.Projects.Details', '/{projectName}', 'projectDetails', false));
        $stateProvider.state(new stateObj('Main.Projects.Illustration', '/Illustration', 'illustration', false));
        $stateProvider.state(new stateObj('Main.Projects.Other', '/Other', 'otherWorks', false));
        $stateProvider.state(new stateObj('Main.WIP', '/WIP', 'wip', false));

        $urlRouterProvider.otherwise('/Home');
    }]);
})(window.app);