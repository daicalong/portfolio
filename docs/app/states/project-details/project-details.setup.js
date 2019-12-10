(function (app, ng) {
    app.component('projectDetails',
        {
            templateUrl: '/app/states/project-details/project-details.template.html',
            controller: projectDetailsController,
        });

    app.controller('projectDetailsController', projectDetailsController);

    projectDetailsController.$inject = ['projectListFactory', '$stateParams', 'projectGalleryValue'];

    function projectDetailsController(projectListFactory, $stateParams, projectGalleryValue) {
        let $ctrl = this;

        $ctrl.$onInit = () => {
            $ctrl.project = projectListFactory.getProjectById($stateParams.projectId);
            ng.extend($ctrl.project, {
                section: [
                    {
                        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
                        paragraph: ''
                    },
                    {
                        img: 'https://images.unsplash.com/photo-1496150997837-ba438ce4b6c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
                        paragraph: ''
                    },
                ]
            })
        }
    }
})(window.app, window.angular);
