(function (app, ng) {
    app.component("ux",
        {
            templateUrl: '/app/states/ux/ux.template.html',
            controller: uxController
        });

    app.controller('uxController', uxController);

    uxController.$inject = ['projectListFactory'];

    function uxController(projectListFactory) {
        let $ctrl = this;

        const _getDate = () => {
            return new Date();
        }

        $ctrl.$onInit = () => {
            $ctrl.uxGallery = projectListFactory.getProjectList('web design');
        };
    }
})(window.app, window.angular);
