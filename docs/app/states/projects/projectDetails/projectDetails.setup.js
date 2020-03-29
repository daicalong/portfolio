(function(app, ng) {
    app.component('projectDetails', {
        templateUrl: '/app/states/projects/projectDetails/projectDetails.template.html',
        controller: projectDetailsController
    });

    app.controller('projectDetailsController', projectDetailsController);

    projectDetailsController.$inject = ['projectListFactory', '$stateParams'];

    function projectDetailsController(projectListFactory, $stateParams) {
        let $ctrl = this;

        $ctrl.$onInit = () => {
            $ctrl.project = projectListFactory.getProjectById($stateParams.projectName);
            console.log($ctrl.project);
        }
    }
})(window.app, window.angular);