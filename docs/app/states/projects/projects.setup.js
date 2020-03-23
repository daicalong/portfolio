(function (app, ng) {
    app.component("projects",
        {
            templateUrl: '/app/states/projects/projects.template.html',
            controller: projectsController
        });

    app.controller('projectsController', projectsController);

    projectsController.$inject = ['projectListFactory'];

    function projectsController() {
        var $ctrl = this;

    }
})(window.app, window.angular);
