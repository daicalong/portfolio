(function(app, ng) {
    app.component("overview", {
        templateUrl: '/app/states/projects/overview/projectsOverview.template.html',
        controller: projectsOverviewController
    });

    app.controller('projectsOverviewController', projectsOverviewController);

    projectsOverviewController.$inject = ['projectListFactory'];

    function projectsOverviewController(projectListFactory) {
        var $ctrl = this;

        $ctrl.$onInit = () => {
            $ctrl.projectList = projectListFactory.getProjectList();
        };
    }
})(window.app, window.angular);